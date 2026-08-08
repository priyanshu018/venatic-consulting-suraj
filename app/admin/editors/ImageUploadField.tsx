"use client";

import { useState, useTransition } from "react";
import { uploadImageAction } from "@/app/actions/upload";

export default function ImageUploadField({
  label,
  value,
  onChange,
  folder,
}: {
  label: string;
  value: string;
  onChange: (url: string) => void;
  folder: string;
}) {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();

  function handleFile(file: File | undefined) {
    if (!file) return;
    setError(undefined);
    const formData = new FormData();
    formData.set("file", file);
    formData.set("folder", folder);

    startTransition(async () => {
      const result = await uploadImageAction(formData);
      if (result?.error) setError(result.error);
      else if (result?.url) onChange(result.url);
    });
  }

  return (
    <div className="flex flex-col gap-1.5 text-sm font-semibold text-navy-900">
      {label}
      <div className="flex items-center gap-3">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-navy-900/15 bg-cream-50">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="" className="h-full w-full object-cover" />
          ) : (
            <span className="text-[10px] text-navy-900/30">No image</span>
          )}
        </div>
        <label className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border border-navy-900/20 px-4 py-2 text-xs font-semibold text-navy-900 transition-colors hover:bg-navy-900/5">
          {pending ? "Uploading..." : value ? "Replace image" : "Upload image"}
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp,image/svg+xml"
            disabled={pending}
            onChange={(e) => handleFile(e.target.files?.[0])}
            className="hidden"
          />
        </label>
      </div>
      {error ? <p className="text-xs font-medium text-red-600">{error}</p> : null}
    </div>
  );
}
