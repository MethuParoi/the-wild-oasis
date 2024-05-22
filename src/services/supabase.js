import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://trrdncclwgddualobqjb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRycmRuY2Nsd2dkZHVhbG9icWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyMDA4MzUsImV4cCI6MjAzMTc3NjgzNX0.ElPhTCsiwJRunL3Yw99ZE065lSuvG4CgNWLDhqaKtiA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
