import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface User {
  id: string;
  username: string;
  email: string;
  role: 'owner' | 'admin' | 'manager' | 'editor' | 'viewer';
  status: 'active' | 'inactive' | 'pending' | 'suspended';
  first_name?: string;
  last_name?: string;
  avatar_url?: string;
  permissions: any;
  last_login?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  hasPermission: (requiredRole: string) => boolean;
  canManageUsers: () => boolean;
  canEditContent: () => boolean;
  canViewAnalytics: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        setLoading(false);
        return;
      }

      // Verify token and get user data
      const { data, error } = await supabase
        .from('user_sessions')
        .select(`
          user_id,
          expires_at,
          admin_users!inner(
            id,
            username,
            email,
            role,
            status,
            first_name,
            last_name,
            avatar_url,
            permissions,
            last_login
          )
        `)
        .eq('session_token', token)
        .gt('expires_at', new Date().toISOString())
        .single();

      if (error || !data) {
        localStorage.removeItem('admin_token');
        setLoading(false);
        return;
      }

      const userData = data.admin_users;
      if (userData.status !== 'active') {
        localStorage.removeItem('admin_token');
        setLoading(false);
        return;
      }

      setUser({
        id: userData.id,
        username: userData.username,
        email: userData.email,
        role: userData.role,
        status: userData.status,
        first_name: userData.first_name,
        last_name: userData.last_name,
        avatar_url: userData.avatar_url,
        permissions: userData.permissions,
        last_login: userData.last_login
      });
    } catch (error) {
      console.error('Auth check error:', error);
      localStorage.removeItem('admin_token');
    } finally {
      setLoading(false);
    }
  };

  const login = async (username: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      console.log('Attempting login with username:', username);
      
      // Get user data by username
      const { data, error: userError } = await supabase
        .from('admin_users')
        .select('*')
        .eq('username', username.toLowerCase())
        .eq('status', 'active')
        .limit(1);

      if (userError) {
        console.error('User query error:', userError);
        return { success: false, error: 'An error occurred during login' };
      }

      // Check if user was found
      if (!data || data.length === 0) {
        console.log('No user found with username:', username);
        return { success: false, error: 'Invalid username or password' };
      }

      const userData = data[0];
      console.log('User found:', userData.username, userData.role);

      // Check if account is locked
      if (userData.locked_until && new Date(userData.locked_until) > new Date()) {
        return { success: false, error: 'Account is temporarily locked. Please try again later.' };
      }

      // Check password - for demo, accept specific credentials
      const isValidPassword = (username.toLowerCase() === 'admin_tf910' && password === 'Admin_910');

      if (!isValidPassword) {
        console.log('Invalid password for user:', username);
        // Increment login attempts
        await supabase
          .from('admin_users')
          .update({ 
            login_attempts: (userData.login_attempts || 0) + 1,
            locked_until: (userData.login_attempts || 0) >= 4 ? 
              new Date(Date.now() + 15 * 60 * 1000).toISOString() : null
          })
          .eq('id', userData.id);

        return { success: false, error: 'Invalid username or password' };
      }

      console.log('Password verified, creating session...');

      // Create session
      const sessionToken = generateSessionToken();
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

      const { error: sessionError } = await supabase
        .from('user_sessions')
        .insert({
          user_id: userData.id,
          session_token: sessionToken,
          expires_at: expiresAt.toISOString(),
          ip_address: await getClientIP(),
          user_agent: navigator.userAgent
        });

      if (sessionError) {
        console.error('Session creation error:', sessionError);
        return { success: false, error: 'Failed to create session' };
      }

      // Update last login and reset login attempts
      await supabase
        .from('admin_users')
        .update({ 
          last_login: new Date().toISOString(),
          login_attempts: 0,
          locked_until: null
        })
        .eq('id', userData.id);

      // Store token
      localStorage.setItem('admin_token', sessionToken);

      // Set user data
      setUser({
        id: userData.id,
        username: userData.username,
        email: userData.email,
        role: userData.role,
        status: userData.status,
        first_name: userData.first_name,
        last_name: userData.last_name,
        avatar_url: userData.avatar_url,
        permissions: userData.permissions,
        last_login: userData.last_login
      });

      console.log('Login successful for user:', userData.username);
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'An error occurred during login' };
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      if (token) {
        // Delete session from database
        await supabase
          .from('user_sessions')
          .delete()
          .eq('session_token', token);
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('admin_token');
      setUser(null);
    }
  };

  const hasPermission = (requiredRole: string): boolean => {
    if (!user || user.status !== 'active') return false;

    const roleHierarchy = {
      'owner': 5,
      'admin': 4,
      'manager': 3,
      'editor': 2,
      'viewer': 1
    };

    const userLevel = roleHierarchy[user.role as keyof typeof roleHierarchy] || 0;
    const requiredLevel = roleHierarchy[requiredRole as keyof typeof roleHierarchy] || 0;

    return userLevel >= requiredLevel;
  };

  const canManageUsers = (): boolean => {
    return hasPermission('admin');
  };

  const canEditContent = (): boolean => {
    return hasPermission('editor');
  };

  const canViewAnalytics = (): boolean => {
    return hasPermission('manager');
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      logout,
      hasPermission,
      canManageUsers,
      canEditContent,
      canViewAnalytics
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Helper functions
const generateSessionToken = (): string => {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

const getClientIP = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch {
    return '0.0.0.0';
  }
};