import "server-only";
import bcrypt from "bcryptjs";
import { getSupabase } from "./supabase";

export async function verifyAdminCredentials(email: string, password: string) {
  const { data, error } = await getSupabase()
    .from("admin_users")
    .select("password_hash")
    .eq("email", email.trim().toLowerCase())
    .maybeSingle();

  if (error || !data) return false;

  return bcrypt.compare(password, data.password_hash as string);
}
