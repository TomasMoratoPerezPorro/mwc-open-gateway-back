import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL; // The URL of your Supabase project
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY; // The anon key for your Supabase project

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key are required!');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);