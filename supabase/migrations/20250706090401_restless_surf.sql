/*
  # Admin Panel Database Schema

  1. New Tables
    - `competitions`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `short_description` (text, max 150 chars)
      - `long_description` (text)
      - `featured_image` (text)
      - `start_date` (date)
      - `end_date` (date)
      - `status` (enum: active, upcoming, past)
      - `priority` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `teams`
      - `id` (uuid, primary key)
      - `name` (text)
      - `slug` (text, unique)
      - `logo` (text)
      - `country` (text)
      - `region` (text)
      - `squad_info` (jsonb)
      - `statistics` (jsonb)
      - `social_links` (jsonb)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `venues`
      - `id` (uuid, primary key)
      - `name` (text)
      - `slug` (text, unique)
      - `location` (text)
      - `address` (text)
      - `capacity` (integer)
      - `images` (jsonb)
      - `seating_map` (text)
      - `facilities` (jsonb)
      - `transportation` (jsonb)
      - `accessibility` (jsonb)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `fixtures`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `match_date` (timestamp)
      - `home_team_id` (uuid, foreign key)
      - `away_team_id` (uuid, foreign key)
      - `venue_id` (uuid, foreign key)
      - `competition_id` (uuid, foreign key)
      - `status` (enum: scheduled, live, finished, postponed)
      - `home_score` (integer)
      - `away_score` (integer)
      - `pricing_tiers` (jsonb)
      - `broadcasting` (jsonb)
      - `is_major` (boolean)
      - `is_hot` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `partner_links`
      - `id` (uuid, primary key)
      - `entity_type` (text)
      - `entity_id` (uuid)
      - `partner_name` (text)
      - `url` (text)
      - `price` (decimal)
      - `availability` (boolean)
      - `created_at` (timestamp)
    
    - `admin_users`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `role` (enum: admin, editor, viewer)
      - `permissions` (jsonb)
      - `created_at` (timestamp)
    
    - `activity_logs`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `action` (text)
      - `entity_type` (text)
      - `entity_id` (uuid)
      - `changes` (jsonb)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for admin access
*/

-- Create enums
CREATE TYPE competition_status AS ENUM ('active', 'upcoming', 'past');
CREATE TYPE fixture_status AS ENUM ('scheduled', 'live', 'finished', 'postponed');
CREATE TYPE admin_role AS ENUM ('admin', 'editor', 'viewer');

-- Competitions table
CREATE TABLE IF NOT EXISTS competitions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  short_description text CHECK (length(short_description) <= 150),
  long_description text,
  featured_image text,
  start_date date,
  end_date date,
  status competition_status DEFAULT 'upcoming',
  priority integer DEFAULT 0,
  meta_title text,
  meta_description text,
  keywords text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Teams table
CREATE TABLE IF NOT EXISTS teams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  logo text,
  country text,
  region text,
  squad_info jsonb DEFAULT '{}',
  statistics jsonb DEFAULT '{}',
  social_links jsonb DEFAULT '{}',
  meta_title text,
  meta_description text,
  keywords text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Venues table
CREATE TABLE IF NOT EXISTS venues (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  location text,
  address text,
  capacity integer,
  images jsonb DEFAULT '[]',
  seating_map text,
  facilities jsonb DEFAULT '[]',
  transportation jsonb DEFAULT '{}',
  accessibility jsonb DEFAULT '{}',
  meta_title text,
  meta_description text,
  keywords text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Fixtures table
CREATE TABLE IF NOT EXISTS fixtures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  match_date timestamptz NOT NULL,
  home_team_id uuid REFERENCES teams(id),
  away_team_id uuid REFERENCES teams(id),
  venue_id uuid REFERENCES venues(id),
  competition_id uuid REFERENCES competitions(id),
  status fixture_status DEFAULT 'scheduled',
  home_score integer DEFAULT 0,
  away_score integer DEFAULT 0,
  pricing_tiers jsonb DEFAULT '[]',
  broadcasting jsonb DEFAULT '{}',
  is_major boolean DEFAULT false,
  is_hot boolean DEFAULT false,
  meta_title text,
  meta_description text,
  keywords text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Partner links table
CREATE TABLE IF NOT EXISTS partner_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_type text NOT NULL,
  entity_id uuid NOT NULL,
  partner_name text NOT NULL,
  url text NOT NULL,
  price decimal(10,2),
  availability boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  role admin_role DEFAULT 'viewer',
  permissions jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Activity logs table
CREATE TABLE IF NOT EXISTS activity_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES admin_users(id),
  action text NOT NULL,
  entity_type text,
  entity_id uuid,
  changes jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE competitions ENABLE ROW LEVEL SECURITY;
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE venues ENABLE ROW LEVEL SECURITY;
ALTER TABLE fixtures ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
CREATE POLICY "Admin full access to competitions"
  ON competitions
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin full access to teams"
  ON teams
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin full access to venues"
  ON venues
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin full access to fixtures"
  ON fixtures
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin full access to partner_links"
  ON partner_links
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin full access to admin_users"
  ON admin_users
  FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admin full access to activity_logs"
  ON activity_logs
  FOR ALL
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_competitions_slug ON competitions(slug);
CREATE INDEX IF NOT EXISTS idx_competitions_status ON competitions(status);
CREATE INDEX IF NOT EXISTS idx_teams_slug ON teams(slug);
CREATE INDEX IF NOT EXISTS idx_venues_slug ON venues(slug);
CREATE INDEX IF NOT EXISTS idx_fixtures_slug ON fixtures(slug);
CREATE INDEX IF NOT EXISTS idx_fixtures_date ON fixtures(match_date);
CREATE INDEX IF NOT EXISTS idx_partner_links_entity ON partner_links(entity_type, entity_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_competitions_updated_at BEFORE UPDATE ON competitions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_teams_updated_at BEFORE UPDATE ON teams FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_venues_updated_at BEFORE UPDATE ON venues FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_fixtures_updated_at BEFORE UPDATE ON fixtures FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();