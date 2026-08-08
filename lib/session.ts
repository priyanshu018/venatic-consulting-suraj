import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = secretKey ? new TextEncoder().encode(secretKey) : null;

export type SessionPayload = {
  email: string;
  expiresAt: number;
};

function requireKey() {
  if (!encodedKey) {
    throw new Error("SESSION_SECRET is not set. See .env.local.example.");
  }
  return encodedKey;
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT({ email: payload.email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(requireKey());
}

export async function decrypt(session?: string) {
  if (!session) return null;
  try {
    const { payload } = await jwtVerify(session, requireKey(), {
      algorithms: ["HS256"],
    });
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

const COOKIE_NAME = "admin_session";

export async function createSession(email: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ email, expiresAt: expiresAt.getTime() });
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getSessionCookieValue() {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value;
}
