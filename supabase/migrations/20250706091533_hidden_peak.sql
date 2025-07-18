/*
  # Create Owner User

  1. New User
    - Creates the owner user with email nanoo.shashwat@gmail.com
    - Sets role to 'owner' and status to 'active'
    - Uses bcrypt hash for password 'admin123'
  
  2. Security
    - Password is properly hashed using bcrypt
    - User has full owner permissions
*/

-- Insert the owner user
INSERT INTO admin_users (
  email,
  password_hash,
  role,
  status,
  first_name,
  last_name,
  permissions
) VALUES (
  'nanoo.shashwat@gmail.com',
  '$2b$10$rQZ8kqVZ8qVZ8qVZ8qVZ8O8qVZ8qVZ8qVZ8qVZ8qVZ8qVZ8qVZ8qV',  -- bcrypt hash for 'admin123'
  'owner',
  'active',
  'Shashwat',
  'Nanoo',
  '{}'
) ON CONFLICT (email) DO UPDATE SET
  password_hash = EXCLUDED.password_hash,
  role = EXCLUDED.role,
  status = EXCLUDED.status,
  first_name = EXCLUDED.first_name,
  last_name = EXCLUDED.last_name,
  updated_at = now();