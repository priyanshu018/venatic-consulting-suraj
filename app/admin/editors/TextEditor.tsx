"use client";

import { useState, useTransition } from "react";
import { updateContentSection } from "@/app/actions/content";
import SaveStatus from "./SaveStatus";

export type FieldDef = {
  key: string;
  label: string;
  multiline?: boolean;
  image?: boolean;
};

export default function TextEditor({
  sectionKey,
  fields,
  initial,
}: {
  sectionKey: string;
  fields: FieldDef[];
  initial: Record<string, string>;
}) {
  const [values, setValues] = useState(initial);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [saved, setSaved] = useState(false);

  function save() {
    setSaved(false);
    setError(undefined);
    startTransition(async () => {
      const result = await updateContentSection(sectionKey, values);
      if (result?.error) setError(result.error);
      else setSaved(true);
    });
  }

  return (
    <div className="flex flex-col gap-4">
      {fields.map((field) => (
        <label
          key={field.key}
          className="flex flex-col gap-1.5 text-sm font-semibold text-navy-900"
        >
          {field.label}
          {field.multiline ? (
            <textarea
              rows={3}
              value={values[field.key] ?? ""}
              onChange={(e) =>
                setValues((v) => ({ ...v, [field.key]: e.target.value }))
              }
              className="resize-none rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
            />
          ) : (
            <input
              type="text"
              value={values[field.key] ?? ""}
              onChange={(e) =>
                setValues((v) => ({ ...v, [field.key]: e.target.value }))
              }
              className="rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
            />
          )}
        </label>
      ))}
      <SaveStatus pending={pending} error={error} saved={saved} onSave={save} />
    </div>
  );
}
