import { appSecurity } from "./content";
import Accordion from "./Accordion";

export default function AppSecuritySection() {
  return (
    <section className="bg-cream-50 px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
          DIGITAL TRANSFORMATION
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          Application Security Testing
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-navy-900/70">
          {appSecurity.description}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-navy-900/10 bg-white p-6">
            <h3 className="text-base font-bold text-navy-900">
              Vulnerability Assessment
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-900/70">
              {appSecurity.vulnerabilityAssessment}
            </p>
          </div>
          <div className="rounded-2xl border border-navy-900/10 bg-white p-6">
            <h3 className="text-base font-bold text-navy-900">
              Penetration Testing
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-900/70">
              {appSecurity.penetrationTesting}
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-3xl">
          <Accordion
            items={appSecurity.testingTypes.map((t) => ({
              title: t.title,
              content: t.description,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
