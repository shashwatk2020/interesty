/*
  # Admin Authentication and User Management System

  1. New Tables
    - `admin_users` - Admin user accounts with roles and permissions
    - `user_sessions` - Track active sessions
    - `password_resets` - Handle password reset tokens
    - `user_invitations` - Manage user invitations

  2. Security
    - Enable RLS on all tables
    - Add policies for role-based access
    - Create secure functions for authentication

  3. User Roles
    - Owner: Full system access
    - Admin: Most management capabilities
    - Manager: Limited management access
    - Editor: Content editing only
    - Viewer: Read-only access
*/

-- Create enhanced admin_role enum
DROP TYPE IF EXISTS admin_role CASCADE;
CREATE TYPE admin_role AS ENUM ('owner', 'admin', 'manager', 'editor', 'viewer');

-- Create user status enum
CREATE TYPE user_status AS ENUM ('active', 'inactive', 'pending', 'suspended');

-- Enhanced admin_users table
DROP TABLE IF EXISTS admin_users CASCADE;
CREATE TABLE admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text,
  role admin_role DEFAULT 'viewer',
  status user_status DEFAULT 'pending',
  first_name text,
  last_name text,
  avatar_url text,
  permissions jsonb DEFAULT '{}',
  last_login timestamptz,
  login_attempts integer DEFAULT 0,
  locked_until timestamptz,
  created_by uuid REFERENCES admin_users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- User sessions table
CREATE TABLE IF NOT EXISTS user_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES admin_users(id) ON DELETE CASCADE,
  session_token text UNIQUE NOT NULL,
  expires_at timestamptz NOT NULL,
  ip_address inet,
  user_agent text,
  created_at timestamptz DEFAULT now()
);

-- Password reset tokens
CREATE TABLE IF NOT EXISTS password_resets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES admin_users(id) ON DELETE CASCADE,
  token text UNIQUE NOT NULL,
  expires_at timestamptz NOT NULL,
  used boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- User invitations
CREATE TABLE IF NOT EXISTS user_invitations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  role admin_role DEFAULT 'viewer',
  token text UNIQUE NOT NULL,
  invited_by uuid REFERENCES admin_users(id),
  expires_at timestamptz NOT NULL,
  accepted boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Insert owner account
INSERT INTO admin_users (
  email, 
  role, 
  status, 
  first_name, 
  last_name,
  password_hash
) VALUES (
  'nanoo.shashwat@gmail.com',
  'owner',
  'active',
  'Shashwat',
  'Nanoo',
  '$2b$12$LQv3c1yqBwlVHpPqNQ4MyuO6RXxmPOSyisoKBrsqiQlP6OUjrcAUy' -- Default: 'admin123'
) ON CONFLICT (email) DO UPDATE SET
  role = 'owner',
  status = 'active',
  first_name = 'Shashwat',
  last_name = 'Nanoo';

-- Enable RLS
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE password_resets ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_invitations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for admin_users
CREATE POLICY "Users can view their own profile"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);

CREATE POLICY "Owners and admins can view all users"
  ON admin_users
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users au 
      WHERE au.id::text = auth.uid()::text 
      AND au.role IN ('owner', 'admin')
      AND au.status = 'active'
    )
  );

CREATE POLICY "Owners can manage all users"
  ON admin_users
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users au 
      WHERE au.id::text = auth.uid()::text 
      AND au.role = 'owner'
      AND au.status = 'active'
    )
  );

CREATE POLICY "Admins can manage non-owner users"
  ON admin_users
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users au 
      WHERE au.id::text = auth.uid()::text 
      AND au.role = 'admin'
      AND au.status = 'active'
    )
    AND role != 'owner'
  );

-- RLS Policies for user_sessions
CREATE POLICY "Users can view their own sessions"
  ON user_sessions
  FOR SELECT
  TO authenticated
  USING (user_id::text = auth.uid()::text);

CREATE POLICY "Users can delete their own sessions"
  ON user_sessions
  FOR DELETE
  TO authenticated
  USING (user_id::text = auth.uid()::text);

-- RLS Policies for password_resets
CREATE POLICY "Users can view their own reset tokens"
  ON password_resets
  FOR SELECT
  TO authenticated
  USING (user_id::text = auth.uid()::text);

-- RLS Policies for user_invitations
CREATE POLICY "Owners and admins can manage invitations"
  ON user_invitations
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users au 
      WHERE au.id::text = auth.uid()::text 
      AND au.role IN ('owner', 'admin')
      AND au.status = 'active'
    )
  );

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);
CREATE INDEX IF NOT EXISTS idx_admin_users_role ON admin_users(role);
CREATE INDEX IF NOT EXISTS idx_admin_users_status ON admin_users(status);
CREATE INDEX IF NOT EXISTS idx_user_sessions_token ON user_sessions(session_token);
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON user_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_password_resets_token ON password_resets(token);
CREATE INDEX IF NOT EXISTS idx_user_invitations_token ON user_invitations(token);
CREATE INDEX IF NOT EXISTS idx_user_invitations_email ON user_invitations(email);

-- Create updated_at trigger for admin_users
CREATE TRIGGER update_admin_users_updated_at 
  BEFORE UPDATE ON admin_users 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Function to check user permissions
CREATE OR REPLACE FUNCTION check_user_permission(
  user_id uuid,
  required_role admin_role
) RETURNS boolean AS $$
DECLARE
  user_role admin_role;
  user_status user_status;
BEGIN
  SELECT role, status INTO user_role, user_status
  FROM admin_users
  WHERE id = user_id;
  
  IF user_status != 'active' THEN
    RETURN false;
  END IF;
  
  CASE required_role
    WHEN 'owner' THEN
      RETURN user_role = 'owner';
    WHEN 'admin' THEN
      RETURN user_role IN ('owner', 'admin');
    WHEN 'manager' THEN
      RETURN user_role IN ('owner', 'admin', 'manager');
    WHEN 'editor' THEN
      RETURN user_role IN ('owner', 'admin', 'manager', 'editor');
    WHEN 'viewer' THEN
      RETURN user_role IN ('owner', 'admin', 'manager', 'editor', 'viewer');
    ELSE
      RETURN false;
  END CASE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to create user invitation
CREATE OR REPLACE FUNCTION create_user_invitation(
  invite_email text,
  invite_role admin_role,
  inviter_id uuid
) RETURNS uuid AS $$
DECLARE
  invitation_id uuid;
  invitation_token text;
BEGIN
  -- Check if inviter has permission
  IF NOT check_user_permission(inviter_id, 'admin') THEN
    RAISE EXCEPTION 'Insufficient permissions to create invitation';
  END IF;
  
  -- Generate secure token
  invitation_token := encode(gen_random_bytes(32), 'hex');
  
  -- Create invitation
  INSERT INTO user_invitations (
    email,
    role,
    token,
    invited_by,
    expires_at
  ) VALUES (
    invite_email,
    invite_role,
    invitation_token,
    inviter_id,
    now() + interval '7 days'
  ) RETURNING id INTO invitation_id;
  
  RETURN invitation_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to accept invitation and create user
CREATE OR REPLACE FUNCTION accept_invitation(
  invitation_token text,
  user_password text,
  user_first_name text,
  user_last_name text
) RETURNS uuid AS $$
DECLARE
  invitation_record record;
  new_user_id uuid;
  password_hash text;
BEGIN
  -- Get invitation details
  SELECT * INTO invitation_record
  FROM user_invitations
  WHERE token = invitation_token
    AND NOT accepted
    AND expires_at > now();
  
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Invalid or expired invitation token';
  END IF;
  
  -- Check if user already exists
  IF EXISTS (SELECT 1 FROM admin_users WHERE email = invitation_record.email) THEN
    RAISE EXCEPTION 'User with this email already exists';
  END IF;
  
  -- Hash password (in real implementation, use proper bcrypt)
  password_hash := crypt(user_password, gen_salt('bf'));
  
  -- Create user
  INSERT INTO admin_users (
    email,
    password_hash,
    role,
    status,
    first_name,
    last_name,
    created_by
  ) VALUES (
    invitation_record.email,
    password_hash,
    invitation_record.role,
    'active',
    user_first_name,
    user_last_name,
    invitation_record.invited_by
  ) RETURNING id INTO new_user_id;
  
  -- Mark invitation as accepted
  UPDATE user_invitations
  SET accepted = true
  WHERE id = invitation_record.id;
  
  RETURN new_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;