"use client";

import { useState, useTransition } from "react";
import { updateContentSection } from "@/app/actions/content";
import SaveStatus from "./SaveStatus";
import type { appSecurity as appSecurityType } from "@/app/components/content";

export default function AppSecurityEditor({
  initial,
}: {
  initial: typeof appSecurityType;
}) {
  const [description, setDescription] = useState(initial.description);
  const [vulnerabilityAssessment, setVulnerabilityAssessment] = useState(
    initial.vulnerabilityAssessment
  );
  const [penetrationTesting, setPenetrationTesting] = useState(
    initial.penetrationTesting
  );
  const [testingTypes, setTestingTypes] = useState(initial.testingTypes);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [saved, setSaved] = useState(false);

  function save() {
    setSaved(false);
    setError(undefined);
    startTransition(async () => {
      const result = await updateContentSection("app_security", {
        description,
        vulnerabilityAssessment,
        penetrationTesting,
        testingTypes,
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
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="resize-none rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-bold text-navy-900">
        Vulnerability Assessment
        <textarea
          rows={2}
          value={vulnerabilityAssessment}
          onChange={(e) => setVulnerabilityAssessment(e.target.value)}
          className="resize-none rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-bold text-navy-900">
        Penetration Testing
        <textarea
          rows={3}
          value={penetrationTesting}
          onChange={(e) => setPenetrationTesting(e.target.value)}
          className="resize-none rounded-lg border border-navy-900/15 px-3 py-2 text-sm font-normal text-navy-900 outline-none focus:border-navy-900/40"
        />
      </label>

      <div>
        <p className="text-sm font-bold text-navy-900">Testing types</p>
        <div className="mt-2 flex flex-col gap-4">
          {testingTypes.map((item, i) => (
            <div key={i} className="rounded-xl border border-navy-900/10 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-navy-900/40">
                Type {i + 1}
              </p>
              <div className="mt-3 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Title"
                  value={item.title}
                  onChange={(e) =>
                    setTestingTypes((prev) =>
                      prev.map((v, idx) =>
                        idx === i ? { ...v, title: e.target.value } : v
                      )
                    )
                  }
                  className="rounded-lg border border-navy-900/15 px-3 py-2 text-sm text-navy-900 outline-none focus:border-navy-900/40"
                />
                <textarea
                  rows={3}
                  placeholder="Description"
                  value={item.description}
                  onChange={(e) =>
                    setTestingTypes((prev) =>
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
        </div>
      </div>

      <SaveStatus pending={pending} error={error} saved={saved} onSave={save} />
    </div>
  );
}
