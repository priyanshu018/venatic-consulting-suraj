"use client";

import { useState, useTransition } from "react";
import { updateContentSection } from "@/app/actions/content";
import SaveStatus from "./SaveStatus";
import type { taxConsulting as taxConsultingType } from "@/app/components/content";

export default function TaxConsultingEditor({
  initial,
}: {
  initial: typeof taxConsultingType;
}) {
  const [intro, setIntro] = useState(initial.intro);
  const [services, setServices] = useState(initial.services);
  const [pricing, setPricing] = useState(initial.pricing);
  const [note, setNote] = useState(initial.note);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [saved, setSaved] = useState(false);

  function save() {
    setSaved(false);
    setError(undefined);
    startTransition(async () => {
      const result = await updateContentSection("tax_consulting", {
        intro: intro.map((s) => s.trim()).filter(Boolean),
        services: services.map((s) => s.trim()).filter(Boolean),
        pricing,
        note,
      });
      if (result?.error) setError(result.error);
      else setSaved(true);
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-bold text-navy-900">Intro paragraphs</p>
        <div className="mt-2 flex flex-col gap-2">
          {intro.map((p, i) => (
            <div key={i} className="flex items-start gap-2">
              <textarea
                rows={2}
                value={p}
                onChange={(e) =>
                  setIntro((prev) =>
                    prev.map((v, idx) => (idx === i ? e.target.value : v))
                  )
                }
                className="flex-1 resize-none rounded-lg border border-navy-900/15 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy-900/40"
              />
              <button
                type="button"
                onClick={() => setIntro((prev) => prev.filter((_, idx) => idx !== i))}
                className="text-xs font-semibold text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setIntro((prev) => [...prev, ""])}
            className="w-fit text-xs font-semibold text-navy-900 hover:underline"
          >
            + Add paragraph
          </button>
        </div>
      </div>

      <div>
        <p className="text-sm font-bold text-navy-900">Services list</p>
        <div className="mt-2 flex flex-col gap-2">
          {services.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="text"
                value={s}
                onChange={(e) =>
                  setServices((prev) =>
                    prev.map((v, idx) => (idx === i ? e.target.value : v))
                  )
                }
                className="flex-1 rounded-lg border border-navy-900/15 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy-900/40"
              />
              <button
                type="button"
                onClick={() => setServices((prev) => prev.filter((_, idx) => idx !== i))}
                className="text-xs font-semibold text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setServices((prev) => [...prev, ""])}
            className="w-fit text-xs font-semibold text-navy-900 hover:underline"
          >
            + Add service
          </button>
        </div>
      </div>

      <div>
        <p className="text-sm font-bold text-navy-900">Pricing</p>
        <div className="mt-2 flex flex-col gap-2">
          {pricing.map((row, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Label"
                value={row.label}
                onChange={(e) =>
                  setPricing((prev) =>
                    prev.map((v, idx) =>
                      idx === i ? { ...v, label: e.target.value } : v
                    )
                  )
                }
                className="flex-1 rounded-lg border border-navy-900/15 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy-900/40"
              />
              <input
                type="text"
                placeholder="Price"
                value={row.price}
                onChange={(e) =>
                  setPricing((prev) =>
                    prev.map((v, idx) =>
                      idx === i ? { ...v, price: e.target.value } : v
                    )
                  )
                }
                className="w-28 rounded-lg border border-navy-900/15 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy-900/40"
              />
              <button
                type="button"
                onClick={() => setPricing((prev) => prev.filter((_, idx) => idx !== i))}
                className="text-xs font-semibold text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setPricing((prev) => [...prev, { label: "", price: "" }])}
            className="w-fit text-xs font-semibold text-navy-900 hover:underline"
          >
            + Add price row
          </button>
        </div>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-bold text-navy-900">
        Note
        <textarea
          rows={2}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="resize-none rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
        />
      </label>

      <SaveStatus pending={pending} error={error} saved={saved} onSave={save} />
    </div>
  );
}
