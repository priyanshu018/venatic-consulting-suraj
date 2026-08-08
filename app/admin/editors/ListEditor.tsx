"use client";

import { useState, useTransition } from "react";
import { updateContentSection } from "@/app/actions/content";
import { IconArrowRight } from "@/app/components/icons";
import SaveStatus from "./SaveStatus";
import type { FieldDef } from "./TextEditor";

export default function ListEditor<T extends Record<string, unknown>>({
  sectionKey,
  fields,
  initial,
  itemLabel = "Item",
  blankItem,
}: {
  sectionKey: string;
  fields: FieldDef[];
  initial: T[];
  itemLabel?: string;
  blankItem: T;
}) {
  const [items, setItems] = useState<T[]>(initial);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [saved, setSaved] = useState(false);

  function updateField(index: number, key: string, value: string) {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [key]: value } : item))
    );
  }

  function removeItem(index: number) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  function addItem() {
    setItems((prev) => [...prev, { ...blankItem }]);
  }

  function save() {
    setSaved(false);
    setError(undefined);
    startTransition(async () => {
      const result = await updateContentSection(sectionKey, items);
      if (result?.error) setError(result.error);
      else setSaved(true);
    });
  }

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-xl border border-navy-900/10 p-4"
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wide text-navy-900/40">
              {itemLabel} {index + 1}
            </p>
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="text-xs font-semibold text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
          <div className="mt-3 flex flex-col gap-3">
            {fields.map((field) => (
              <label
                key={field.key}
                className="flex flex-col gap-1.5 text-sm font-semibold text-navy-900"
              >
                {field.label}
                {field.multiline ? (
                  <textarea
                    rows={2}
                    value={(item[field.key] as string) ?? ""}
                    onChange={(e) =>
                      updateField(index, field.key, e.target.value)
                    }
                    className="resize-none rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
                  />
                ) : (
                  <input
                    type="text"
                    value={(item[field.key] as string) ?? ""}
                    onChange={(e) =>
                      updateField(index, field.key, e.target.value)
                    }
                    className="rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
                  />
                )}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addItem}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-navy-900/20 px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900/5"
      >
        Add {itemLabel}
        <IconArrowRight />
      </button>

      <SaveStatus pending={pending} error={error} saved={saved} onSave={save} />
    </div>
  );
}
