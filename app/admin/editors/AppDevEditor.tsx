"use client";

import { useState, useTransition } from "react";
import { updateContentSection } from "@/app/actions/content";
import SaveStatus from "./SaveStatus";
import type { appDev as appDevType } from "@/app/components/content";

export default function AppDevEditor({
  initial,
}: {
  initial: typeof appDevType;
}) {
  const [description, setDescription] = useState(initial.description);
  const [helpsTitle, setHelpsTitle] = useState(initial.helpsTitle);
  const [helps, setHelps] = useState(initial.helps);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [saved, setSaved] = useState(false);

  function save() {
    setSaved(false);
    setError(undefined);
    startTransition(async () => {
      const result = await updateContentSection("app_dev", {
        description,
        helpsTitle,
        helps: helps.map((s) => s.trim()).filter(Boolean),
      });
      if (result?.error) setError(result.error);
      else setSaved(true);
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <label className="flex flex-col gap-1.5 text-sm font-bold text-navy-900">
        Description
        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="resize-none rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-bold text-navy-900">
        &quot;Helps you&quot; section title
        <input
          type="text"
          value={helpsTitle}
          onChange={(e) => setHelpsTitle(e.target.value)}
          className="rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
        />
      </label>

      <div>
        <p className="text-sm font-bold text-navy-900">Helps list</p>
        <div className="mt-2 flex flex-col gap-2">
          {helps.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="text"
                value={s}
                onChange={(e) =>
                  setHelps((prev) =>
                    prev.map((v, idx) => (idx === i ? e.target.value : v))
                  )
                }
                className="flex-1 rounded-lg border border-navy-900/15 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy-900/40"
              />
              <button
                type="button"
                onClick={() => setHelps((prev) => prev.filter((_, idx) => idx !== i))}
                className="text-xs font-semibold text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setHelps((prev) => [...prev, ""])}
            className="w-fit text-xs font-semibold text-navy-900 hover:underline"
          >
            + Add item
          </button>
        </div>
      </div>

      <SaveStatus pending={pending} error={error} saved={saved} onSave={save} />
    </div>
  );
}
