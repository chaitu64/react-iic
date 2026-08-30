import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

console.log("Supabase URL loaded:", supabaseUrl);
console.log("Supabase key exists:", !!supabaseKey);
console.log(
  "Supabase key starts with:",
  supabaseKey.substring(0, 15)
);

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
