import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  "https://qqaffovztzrrmchoudme.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxYWZmb3Z6dHpycm1jaG91ZG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1MzczNjUsImV4cCI6MjAyNzExMzM2NX0.quMje33z3fg_shZ6crvfMUOW7kdnsbSp7iCTnyH_3cU"
);
