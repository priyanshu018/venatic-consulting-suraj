"use client";

import { useState, type FormEvent } from "react";
import { IconArrowRight } from "./icons";

export default function ContactForm({ contactEmail }: { contactEmail: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy-900/10 bg-white p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy-900">
          Name
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your name"
            className="rounded-lg border border-navy-900/15 px-4 py-2.5 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy-900">
          Email
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@company.com"
            className="rounded-lg border border-navy-900/15 px-4 py-2.5 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
          />
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-1.5 text-sm font-semibold text-navy-900">
        Message
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Tell us about your challenge..."
          className="resize-none rounded-lg border border-navy-900/15 px-4 py-2.5 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
      >
        Send Message
        <IconArrowRight />
      </button>
      <p className="mt-3 text-xs text-navy-900/50">
        Submitting opens your email client with this message addressed to{" "}
        {contactEmail}.
      </p>
    </form>
  );
}
