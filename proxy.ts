import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";

export default async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isAdminRoute = path.startsWith("/admin") && path !== "/admin/login";
  const isLoginRoute = path === "/admin/login";

  const cookie = (await cookies()).get("admin_session")?.value;
  const session = await decrypt(cookie);

  if (isAdminRoute && !session?.email) {
    return NextResponse.redirect(new URL("/admin/login", req.nextUrl));
  }

  if (isLoginRoute && session?.email) {
    return NextResponse.redirect(new URL("/admin", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
