import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Competition {
  id: string;
  title: string;
  slug: string;
  short_description?: string;
  long_description?: string;
  featured_image?: string;
  start_date?: string;
  end_date?: string;
  status: 'active' | 'upcoming' | 'past';
  priority: number;
  meta_title?: string;
  meta_description?: string;
  keywords?: string;
  created_at: string;
  updated_at: string;
}

export interface Team {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  country?: string;
  region?: string;
  squad_info: any;
  statistics: any;
  social_links: any;
  meta_title?: string;
  meta_description?: string;
  keywords?: string;
  created_at: string;
  updated_at: string;
}

export interface Venue {
  id: string;
  name: string;
  slug: string;
  location?: string;
  address?: string;
  capacity?: number;
  images: string[];
  seating_map?: string;
  facilities: string[];
  transportation: any;
  accessibility: any;
  meta_title?: string;
  meta_description?: string;
  keywords?: string;
  created_at: string;
  updated_at: string;
}

export interface Fixture {
  id: string;
  title: string;
  slug: string;
  match_date: string;
  home_team_id?: string;
  away_team_id?: string;
  venue_id?: string;
  competition_id?: string;
  status: 'scheduled' | 'live' | 'finished' | 'postponed';
  home_score: number;
  away_score: number;
  pricing_tiers: any[];
  broadcasting: any;
  is_major: boolean;
  is_hot: boolean;
  meta_title?: string;
  meta_description?: string;
  keywords?: string;
  created_at: string;
  updated_at: string;
  home_team?: Team;
  away_team?: Team;
  venue?: Venue;
  competition?: Competition;
}

export interface PartnerLink {
  id: string;
  entity_type: string;
  entity_id: string;
  partner_name: string;
  url: string;
  price?: number;
  availability: boolean;
  created_at: string;
}

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  permissions: any;
  created_at: string;
}

export interface ActivityLog {
  id: string;
  user_id: string;
  action: string;
  entity_type?: string;
  entity_id?: string;
  changes: any;
  created_at: string;
}