import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sonsjilzsqdsfqlexehp.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvbnNqaWx6c3Fkc2ZxbGV4ZWhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2MDM4MjgsImV4cCI6MjA2MTE3OTgyOH0.6EDgq9AnHP1byyQG2GgVyUzGwbMhoT5-Gr9_5vAzO48'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseKey);