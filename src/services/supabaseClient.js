import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aushniidrgdnhohvezpw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1c2huaWlkcmdkbmhvaHZlenB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NjM2MTEsImV4cCI6MjAzNDAzOTYxMX0.oIwD2MaX5SKp3G5QRCwkXEnelYlKAG2scvE34oENSEI';
const supabase = createClient(supabaseUrl, supabaseKey);

export const insertBooking = async (bookingData) => {
  const { data, error } = await supabase
    .from('booking')
    .insert([bookingData]);

  if (error) throw error;
  return data;
};

export const insertContact = async (contactData) => {
  const { data, error } = await supabase
    .from('contact')
    .insert([contactData]);

  if (error) throw error;
  return data;
};

export const signUpUser = async (email, password) => {
  const { user, session, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return { user, session };
};

export const signInUser = async (email, password) => {
  const { user, session, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return { user, session };
};

export const signOutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export default supabase;