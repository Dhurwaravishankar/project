import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || supabaseUrl === 'your-project-url') {
  throw new Error(
    'Please set VITE_SUPABASE_URL environment variable by clicking "Connect to Supabase" button'
  );
}

if (!supabaseAnonKey || supabaseAnonKey === 'your-anon-key') {
  throw new Error(
    'Please set VITE_SUPABASE_ANON_KEY environment variable by clicking "Connect to Supabase" button'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);