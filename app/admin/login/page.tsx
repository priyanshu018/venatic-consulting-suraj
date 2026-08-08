"use client";

import Image from "next/image";
import { useActionState } from "react";
import { login } from "@/app/actions/auth";
import { IconArrowRight } from "@/app/components/icons";

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, undefined);

  return (
    <div className="flex min-h-[calc(100vh-1px)] items-center justify-center bg-cream-50 px-6 py-16">
      <div className="w-full max-w-sm rounded-2xl border border-navy-900/10 bg-white p-8 shadow-sm">
        <Image
          src="/logo.png"
          alt="Venatic Consulting"
          width={557}
          height={142}
          className="h-8 w-auto"
        />
        <p className="mt-1 text-xs font-bold tracking-[0.2em] text-navy-900/50">
          ADMIN
        </p>
        <h1 className="mt-6 text-xl font-bold text-navy-900">Sign in</h1>
        <p className="mt-1 text-sm text-navy-900/60">
          Manage the site&apos;s live statistics.
        </p>

        <form action={formAction} className="mt-6 flex flex-col gap-4">
          <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy-900">
            Email
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@venaticconsulting.com"
              className="rounded-lg border border-navy-900/15 px-4 py-2.5 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy-900">
            Password
            <input
              required
              name="password"
              type="password"
              autoComplete="current-password"
              className="rounded-lg border border-navy-900/15 px-4 py-2.5 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
            />
          </label>

          {state?.error ? (
            <p className="text-sm font-medium text-red-600">{state.error}</p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800 disabled:opacity-60"
          >
            {pending ? "Signing in..." : "Sign in"}
            <IconArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
}
