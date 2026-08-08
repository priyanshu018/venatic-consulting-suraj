"use client";

import { useState, useTransition } from "react";
import { updateContentSection } from "@/app/actions/content";
import SaveStatus from "./SaveStatus";
import type { outsourcing as outsourcingType } from "@/app/components/content";

export default function OutsourcingEditor({
  initial,
}: {
  initial: typeof outsourcingType;
}) {
  const [intro, setIntro] = useState(initial.intro);
  const [items, setItems] = useState(initial.items);
  const [tagline, setTagline] = useState(initial.tagline);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [saved, setSaved] = useState(false);

  function save() {
    setSaved(false);
    setError(undefined);
    startTransition(async () => {
      const result = await updateContentSection("outsourcing", {
        intro,
        items,
        tagline,
      });
      if (result?.error) setError(result.error);
      else setSaved(true);
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <label className="flex flex-col gap-1.5 text-sm font-bold text-navy-900">
        Intro
        <textarea
          rows={2}
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
          className="resize-none rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
        />
      </label>

      <div>
        <p className="text-sm font-bold text-navy-900">Items</p>
        <div className="mt-2 flex flex-col gap-4">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl border border-navy-900/10 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wide text-navy-900/40">
                  Item {i + 1}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setItems((prev) => prev.filter((_, idx) => idx !== i))
                  }
                  className="text-xs font-semibold text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
              <div className="mt-3 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Title"
                  value={item.title}
                  onChange={(e) =>
                    setItems((prev) =>
                      prev.map((v, idx) =>
                        idx === i ? { ...v, title: e.target.value } : v
                      )
                    )
                  }
                  className="rounded-lg border border-navy-900/15 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy-900/40"
                />
                <textarea
                  rows={2}
                  placeholder="Description"
                  value={item.description}
                  onChange={(e) =>
                    setItems((prev) =>
                      prev.map((v, idx) =>
                        idx === i ? { ...v, description: e.target.value } : v
                      )
                    )
                  }
                  className="resize-none rounded-lg border border-navy-900/15 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy-900/40"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setItems((prev) => [...prev, { title: "", description: "" }])
            }
            className="w-fit text-xs font-semibold text-navy-900 hover:underline"
          >
            + Add item
          </button>
        </div>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-bold text-navy-900">
        Tagline
        <input
          type="text"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          className="rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
        />
      </label>

      <SaveStatus pending={pending} error={error} saved={saved} onSave={save} />
    </div>
  );
}
