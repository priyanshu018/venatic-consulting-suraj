import "server-only";
import bcrypt from "bcryptjs";
import { query } from "./db";

type AdminUserRow = {
  email: string;
  password_hash: string;
};

export async function verifyAdminCredentials(email: string, password: string) {
  const { rows } = await query<AdminUserRow>(
    "select email, password_hash from admin_users where email = $1",
    [email.trim().toLowerCase()]
  );
  const user = rows[0];
  if (!user) return false;

  return bcrypt.compare(password, user.password_hash);
}
