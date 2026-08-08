"use client";

import { useState, type ReactNode } from "react";
import { IconChevronDown } from "./icons";

export type AccordionItem = {
  title: string;
  content: ReactNode;
};

export default function Accordion({
  items,
  defaultOpen = [],
}: {
  items: AccordionItem[];
  defaultOpen?: number[];
}) {
  const [open, setOpen] = useState<Set<number>>(new Set(defaultOpen));

  function toggle(index: number) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <div
            key={item.title}
            className="overflow-hidden rounded-xl border border-navy-900/10"
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold transition-colors ${
                isOpen
                  ? "bg-navy-900 text-white"
                  : "bg-white text-navy-900 hover:bg-cream-50"
              }`}
            >
              {item.title}
              <IconChevronDown
                className={`h-4 w-4 shrink-0 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen ? (
              <div className="border-t border-navy-900/10 bg-white px-5 py-4 text-sm leading-relaxed text-navy-900/70">
                {item.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
