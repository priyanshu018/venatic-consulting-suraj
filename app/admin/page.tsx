import type { Metadata } from "next";
import { verifySession } from "@/lib/dal";
import { getStats } from "@/lib/stats";
import { logout } from "@/app/actions/auth";
import StatsForm from "./StatsForm";

export const metadata: Metadata = {
  title: "Admin | Venatic Consulting",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const session = await verifySession();
  const stats = await getStats();

  return (
    <div className="min-h-[calc(100vh-1px)] bg-cream-50 px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
              ADMIN
            </p>
            <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-navy-900">
              Site Statistics
            </h1>
            <p className="mt-1 text-sm text-navy-900/60">
              Signed in as {session.email}
            </p>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="rounded-full border border-navy-900/20 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900/5"
            >
              Log out
            </button>
          </form>
        </div>

        <div className="mt-8 rounded-2xl border border-navy-900/10 bg-white p-8">
          <p className="text-sm text-navy-900/60">
            These numbers power the Countries / Projects / Clients counters
            shown in the hero, the closing stats bar, and the About page.
          </p>
          <StatsForm initialStats={stats} />
        </div>
      </div>
    </div>
  );
}
