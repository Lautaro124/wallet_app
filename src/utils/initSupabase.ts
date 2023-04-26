import * as SecureStore from 'expo-secure-store'
import { createClient } from '@supabase/supabase-js'
import { setupURLPolyfill } from 'react-native-url-polyfill'

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key)
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value)
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key)
  }
}

setupURLPolyfill()
const supabaseUrl = process.env.SUPABASE_URL ?? 'https://obeqvjdsleonaqifhpwx.supabase.co'
const supabaseAnonKey = process.env.SUPABASE_PUBLIC_KEY ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iZXF2amRzbGVvbmFxaWZocHd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyMjExNTEsImV4cCI6MTk5Njc5NzE1MX0.K4a5xBOal3VOgmW6upcEfkGWvWbcqG5NtiSi8N0aKE8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
})
