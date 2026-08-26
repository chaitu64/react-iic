import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || "YOUR_SUPABASE_URL_HERE";
const supabaseKey = process.env.SUPABASE_KEY || "YOUR_SUPABASE_KEY_HERE";

export const supabase = createClient(supabaseUrl, supabaseKey);
