import { createClient } from '@supabase/supabase-js';

// Retrieve Supabase credentials from environment variables
// Using VITE_ prefix as required for client-side environment variables in Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Fail-safe check to prevent runtime error "supabaseUrl is required"
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Supabase environment variables are missing. ' +
    'Please check your .env file or build settings and ensure ' +
    'VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.'
  );
}

// Initialize the Supabase client
// If variables are missing, it will initialize with undefined/empty string, 
// which causes the error reported. Providing a clearer check here.
export const supabase = createClient(
  supabaseUrl || '', 
  supabaseAnonKey || ''
);

/**
 * Persists a new booking to the 'bookings' table.
 */
export async function createBooking(bookingData: {
  tour_id: number;
  tour_name: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  booking_date: string;
  guests: number;
  message?: string;
}) {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase client is not correctly initialized. Missing environment variables.');
  }

  const { data, error } = await supabase
    .from('bookings')
    .insert([bookingData])
    .select();

  if (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
  
  return data;
}