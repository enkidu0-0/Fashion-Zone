import { supabase } from './supabase'

// Test the connection
export const testConnection = async () => {
  try {
    const { data, error } = await supabase.from('_tables').select('*').limit(1)
    if (error) {
      console.error('Connection error:', error.message)
      return false
    }
    console.log('Successfully connected to Supabase!')
    return true
  } catch (err) {
    console.error('Connection error:', err)
    return false
  }
} 