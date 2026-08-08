import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { decrypt, getSessionCookieValue } from "./session";

export const verifySession = cache(async () => {
  const cookieValue = await getSessionCookieValue();
  const session = await decrypt(cookieValue);

  if (!session?.email) {
    redirect("/admin/login");
  }

  return { isAuth: true, email: session.email };
});

export const getOptionalSession = cache(async () => {
  const cookieValue = await getSessionCookieValue();
  const session = await decrypt(cookieValue);
  return session?.email ? { email: session.email } : null;
});
