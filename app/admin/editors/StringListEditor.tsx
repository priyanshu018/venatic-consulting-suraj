"use client";

import { useState, useTransition } from "react";
import { updateContentSection } from "@/app/actions/content";
import { IconArrowRight } from "@/app/components/icons";
import SaveStatus from "./SaveStatus";

export default function StringListEditor({
  sectionKey,
  initial,
  itemLabel = "Item",
}: {
  sectionKey: string;
  initial: string[];
  itemLabel?: string;
}) {
  const [items, setItems] = useState<string[]>(initial);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [saved, setSaved] = useState(false);

  function save() {
    setSaved(false);
    setError(undefined);
    startTransition(async () => {
      const cleaned = items.map((s) => s.trim()).filter(Boolean);
      const result = await updateContentSection(sectionKey, cleaned);
      if (result?.error) setError(result.error);
      else setSaved(true);
    });
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((value, index) => (
        <div key={index} className="flex items-center gap-2">
          <input
            type="text"
            value={value}
            onChange={(e) =>
              setItems((prev) =>
                prev.map((v, i) => (i === index ? e.target.value : v))
              )
            }
            className="flex-1 rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
          />
          <button
            type="button"
            onClick={() =>
              setItems((prev) => prev.filter((_, i) => i !== index))
            }
            className="text-xs font-semibold text-red-600 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => setItems((prev) => [...prev, ""])}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-navy-900/20 px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900/5"
      >
        Add {itemLabel}
        <IconArrowRight />
      </button>

      <SaveStatus pending={pending} error={error} saved={saved} onSave={save} />
    </div>
  );
}
