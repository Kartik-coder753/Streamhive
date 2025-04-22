
import { createClient } from '@supabase/supabase-js'

// Get environment variables with fallback to empty strings to prevent immediate error
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Check if both URL and key are present
export const isSupabaseConfigured = () => {
  return Boolean(supabaseUrl && supabaseKey)
}

// Create a mock client when not configured
const createMockClient = () => {
  return {
    auth: {
      getSession: () => Promise.resolve({ data: { session: null } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signInWithPassword: () => Promise.resolve({ error: new Error('Supabase not configured') }),
      signUp: () => Promise.resolve({ error: new Error('Supabase not configured') }),
      signOut: () => Promise.resolve({ error: null })
    }
  }
}

// Create client or mock client based on configuration
export const supabase = isSupabaseConfigured() 
  ? createClient(supabaseUrl, supabaseKey)
  : createMockClient() as any
