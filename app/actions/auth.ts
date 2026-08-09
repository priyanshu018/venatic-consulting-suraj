"use server";

import { redirect } from "next/navigation";
import { verifyAdminCredentials } from "@/lib/admin-users";
import { createSession, deleteSession } from "@/lib/session";

export type LoginState = { error?: string } | undefined;

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Enter your email and password." };
  }

  let valid: boolean;
  try {
    valid = await verifyAdminCredentials(email, password);
  } catch (error) {
    console.error("Admin login failed while connecting to Supabase.", error);
    return {
      error:
        "Could not reach Supabase. Check NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, then restart the dev server.",
    };
  }

  if (!valid) {
    return { error: "Invalid email or password." };
  }

  await createSession(email.toLowerCase());
  redirect("/admin");
}

export async function logout() {
  await deleteSession();
  redirect("/admin/login");
}
