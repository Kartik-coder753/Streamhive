
import { createClient } from '@supabase/supabase-js'

// Get environment variables with fallback to empty strings to prevent immediate error
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Create client regardless of empty values to avoid immediate crash
// The app will need to handle connection errors when using Supabase functions
export const supabase = createClient(supabaseUrl, supabaseKey)

// Add a helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return Boolean(supabaseUrl && supabaseKey)
}
