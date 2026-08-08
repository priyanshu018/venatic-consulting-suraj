"use client";

import { useActionState } from "react";
import { updateStatsAction } from "@/app/actions/stats";
import type { SiteStats } from "@/lib/stats";
import { IconArrowRight } from "@/app/components/icons";

export default function StatsForm({ initialStats }: { initialStats: SiteStats }) {
  const [state, formAction, pending] = useActionState(updateStatsAction, undefined);

  return (
    <form action={formAction} className="mt-6 flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy-900">
          Countries
          <input
            required
            name="countries"
            type="number"
            min={0}
            step={1}
            defaultValue={initialStats.countries}
            className="rounded-lg border border-navy-900/15 px-4 py-2.5 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy-900">
          Projects
          <input
            required
            name="projects"
            type="number"
            min={0}
            step={1}
            defaultValue={initialStats.projects}
            className="rounded-lg border border-navy-900/15 px-4 py-2.5 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy-900">
          Clients
          <input
            required
            name="clients"
            type="number"
            min={0}
            step={1}
            defaultValue={initialStats.clients}
            className="rounded-lg border border-navy-900/15 px-4 py-2.5 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
          />
        </label>
      </div>

      {state?.error ? (
        <p className="text-sm font-medium text-red-600">{state.error}</p>
      ) : null}
      {state?.success ? (
        <p className="text-sm font-medium text-emerald-600">
          Saved. The site now reflects these numbers.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-fit items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800 disabled:opacity-60"
      >
        {pending ? "Saving..." : "Save changes"}
        <IconArrowRight />
      </button>
    </form>
  );
}
