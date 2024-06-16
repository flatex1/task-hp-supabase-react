import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aushniidrgdnhohvezpw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmF1c2huaWlkcmdkbmhvaHZlenB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NjM2MTEsImV4cCI6MjAzNDAzOTYxMX0.oIwD2MaX5SKp3G5QRCwkXEnelYlKAG2scvE34oENSEI';
const supabase = createClient(supabaseUrl, supabaseKey);

export const insertBooking = async (bookingData) => {
  const { data, error } = await supabase
    .from('booking')
    .insert([bookingData]);

  if (error) throw error;
  return data;
};

export default supabase;
