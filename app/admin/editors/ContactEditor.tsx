"use client";

import { useState, useTransition } from "react";
import { updateContentSection } from "@/app/actions/content";
import SaveStatus from "./SaveStatus";
import type { contact as contactType } from "@/app/components/content";

export default function ContactEditor({
  initial,
}: {
  initial: typeof contactType;
}) {
  const [email, setEmail] = useState(initial.email);
  const [phones, setPhones] = useState(initial.phones);
  const [address, setAddress] = useState(initial.address);
  const [whatsappNumber, setWhatsappNumber] = useState(initial.whatsappNumber);
  const [whatsappDisplay, setWhatsappDisplay] = useState(initial.whatsappDisplay);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [saved, setSaved] = useState(false);

  function save() {
    setSaved(false);
    setError(undefined);
    startTransition(async () => {
      const result = await updateContentSection("contact", {
        email,
        phones,
        address,
        whatsappNumber,
        whatsappDisplay,
      });
      if (result?.error) setError(result.error);
      else setSaved(true);
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <label className="flex flex-col gap-1.5 text-sm font-bold text-navy-900">
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
        />
      </label>

      <div>
        <p className="text-sm font-bold text-navy-900">Phone numbers</p>
        <div className="mt-2 flex flex-col gap-3">
          {phones.map((phone, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-2 rounded-xl border border-navy-900/10 p-3 sm:grid-cols-[1fr_1fr_80px]"
            >
              <input
                type="text"
                placeholder="Display (e.g. +1 (904) 606-4084)"
                value={phone.display}
                onChange={(e) =>
                  setPhones((prev) =>
                    prev.map((v, idx) =>
                      idx === i ? { ...v, display: e.target.value } : v
                    )
                  )
                }
                className="rounded-lg border border-navy-900/15 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy-900/40"
              />
              <input
                type="text"
                placeholder="tel: link (e.g. tel:+19046064084)"
                value={phone.href}
                onChange={(e) =>
                  setPhones((prev) =>
                    prev.map((v, idx) =>
                      idx === i ? { ...v, href: e.target.value } : v
                    )
                  )
                }
                className="rounded-lg border border-navy-900/15 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy-900/40"
              />
              <input
                type="text"
                placeholder="Country"
                value={phone.country}
                onChange={(e) =>
                  setPhones((prev) =>
                    prev.map((v, idx) =>
                      idx === i ? { ...v, country: e.target.value } : v
                    )
                  )
                }
                className="rounded-lg border border-navy-900/15 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy-900/40"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setPhones((prev) => [...prev, { display: "", href: "", country: "" }])
            }
            className="w-fit text-xs font-semibold text-navy-900 hover:underline"
          >
            + Add phone number
          </button>
        </div>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-bold text-navy-900">
        Office address
        <textarea
          rows={2}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="resize-none rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
        />
      </label>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-bold text-navy-900">
          WhatsApp number (digits only, country code)
          <input
            type="text"
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            className="rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-bold text-navy-900">
          WhatsApp display
          <input
            type="text"
            value={whatsappDisplay}
            onChange={(e) => setWhatsappDisplay(e.target.value)}
            className="rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
          />
        </label>
      </div>

      <SaveStatus pending={pending} error={error} saved={saved} onSave={save} />
    </div>
  );
}
