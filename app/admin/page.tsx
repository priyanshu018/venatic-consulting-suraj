import type { Metadata } from "next";
import { verifySession } from "@/lib/dal";
import { getStats } from "@/lib/stats";
import { getSection } from "@/lib/content-db";
import { logout } from "@/app/actions/auth";
import {
  hero as heroDefaults,
  heroFeatures as heroFeaturesDefaults,
  services as servicesDefaults,
  taxConsulting as taxConsultingDefaults,
  outsourcing as outsourcingDefaults,
  appDev as appDevDefaults,
  appSecurity as appSecurityDefaults,
  caseStudies as caseStudiesDefaults,
  industries as industriesDefaults,
  partners as partnersDefaults,
  workWithCards as workWithCardsDefaults,
  testimonials as testimonialsDefaults,
  contact as contactDefaults,
} from "@/app/components/content";

import StatsForm from "./StatsForm";
import AdminSectionCard from "./editors/AdminSectionCard";
import TextEditor from "./editors/TextEditor";
import ListEditor from "./editors/ListEditor";
import StringListEditor from "./editors/StringListEditor";
import TaxConsultingEditor from "./editors/TaxConsultingEditor";
import OutsourcingEditor from "./editors/OutsourcingEditor";
import AppDevEditor from "./editors/AppDevEditor";
import AppSecurityEditor from "./editors/AppSecurityEditor";
import ContactEditor from "./editors/ContactEditor";

export const metadata: Metadata = {
  title: "Admin | Venatic Consulting",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const NAV = [
  { id: "stats", label: "Stats" },
  { id: "hero", label: "Hero" },
  { id: "hero-features", label: "Hero Highlights" },
  { id: "services", label: "Services" },
  { id: "tax", label: "US Tax" },
  { id: "outsourcing", label: "Outsourcing" },
  { id: "app-dev", label: "App Dev" },
  { id: "app-security", label: "App Security" },
  { id: "case-studies", label: "Success Stories" },
  { id: "industries", label: "Industries" },
  { id: "partners", label: "Partners" },
  { id: "who-we-work-with", label: "Who We Work With" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact Info" },
];

export default async function AdminDashboardPage() {
  const session = await verifySession();

  const [
    stats,
    hero,
    heroFeatures,
    services,
    taxConsulting,
    outsourcing,
    appDev,
    appSecurity,
    caseStudies,
    industries,
    partners,
    whoWeWorkWith,
    testimonials,
    contact,
  ] = await Promise.all([
    getStats(),
    getSection("hero", heroDefaults),
    getSection("hero_features", heroFeaturesDefaults),
    getSection("services", servicesDefaults),
    getSection("tax_consulting", taxConsultingDefaults),
    getSection("outsourcing", outsourcingDefaults),
    getSection("app_dev", appDevDefaults),
    getSection("app_security", appSecurityDefaults),
    getSection("case_studies", caseStudiesDefaults),
    getSection("industries", industriesDefaults),
    getSection("partners", partnersDefaults),
    getSection("who_we_work_with", workWithCardsDefaults),
    getSection("testimonials", testimonialsDefaults),
    getSection("contact", contactDefaults),
  ]);

  return (
    <div className="min-h-[calc(100vh-1px)] bg-cream-50 pb-24">
      <div className="sticky top-0 z-10 border-b border-navy-900/10 bg-cream-50/95 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-gold-500">
              ADMIN
            </p>
            <p className="text-sm text-navy-900/60">
              Signed in as {session.email}
            </p>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="rounded-full border border-navy-900/20 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900/5"
            >
              Log out
            </button>
          </form>
        </div>
        <nav className="mx-auto mt-3 flex max-w-5xl flex-wrap gap-x-4 gap-y-1">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs font-semibold text-navy-900/60 hover:text-navy-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-8 flex max-w-5xl flex-col gap-6 px-6">
        <AdminSectionCard
          id="stats"
          title="Site Statistics"
          description="Powers the Countries / Projects / Clients counters in the hero, closing stats bar, and About page."
        >
          <StatsForm initialStats={stats} />
        </AdminSectionCard>

        <AdminSectionCard id="hero" title="Hero Section">
          <TextEditor
            sectionKey="hero"
            initial={hero}
            fields={[
              { key: "eyebrow", label: "Eyebrow" },
              { key: "titleLine1", label: "Title — line 1" },
              { key: "titleLine2", label: "Title — line 2" },
              { key: "titleHighlight", label: "Title — highlighted word" },
              { key: "description", label: "Description", multiline: true },
            ]}
          />
        </AdminSectionCard>

        <AdminSectionCard
          id="hero-features"
          title="Hero Feature Highlights"
          description="The three feature call-outs under the hero buttons, and reused on the About page."
        >
          <ListEditor
            sectionKey="hero_features"
            itemLabel="Highlight"
            initial={heroFeatures}
            blankItem={{ title: "", subtitle: "" }}
            fields={[
              { key: "title", label: "Title" },
              { key: "subtitle", label: "Subtitle" },
            ]}
          />
        </AdminSectionCard>

        <AdminSectionCard
          id="services"
          title="Services Overview Cards"
          description="The 4 cards under 'End-to-End Solutions for Complex Challenges'."
        >
          <ListEditor
            sectionKey="services"
            itemLabel="Service"
            initial={services}
            blankItem={{ slug: "", title: "", description: "" }}
            fields={[
              { key: "title", label: "Title" },
              { key: "description", label: "Description", multiline: true },
            ]}
          />
        </AdminSectionCard>

        <AdminSectionCard id="tax" title="US Tax Consulting">
          <TaxConsultingEditor initial={taxConsulting} />
        </AdminSectionCard>

        <AdminSectionCard id="outsourcing" title="Outsourcing">
          <OutsourcingEditor initial={outsourcing} />
        </AdminSectionCard>

        <AdminSectionCard id="app-dev" title="Application Development">
          <AppDevEditor initial={appDev} />
        </AdminSectionCard>

        <AdminSectionCard id="app-security" title="Application Security Testing">
          <AppSecurityEditor initial={appSecurity} />
        </AdminSectionCard>

        <AdminSectionCard
          id="case-studies"
          title="Success Stories"
          description="Photo, tag, title and description are all editable."
        >
          <ListEditor
            sectionKey="case_studies"
            itemLabel="Story"
            initial={caseStudies}
            blankItem={{ tag: "", image: "", title: "", description: "" }}
            fields={[
              { key: "image", label: "Photo", image: true },
              { key: "tag", label: "Tag" },
              { key: "title", label: "Title" },
              { key: "description", label: "Description", multiline: true },
            ]}
          />
        </AdminSectionCard>

        <AdminSectionCard
          id="industries"
          title="Industries We Serve"
          description="Icons are assigned by position, so new entries beyond the 8th reuse the first icon."
        >
          <StringListEditor
            sectionKey="industries"
            itemLabel="Industry"
            initial={industries}
          />
        </AdminSectionCard>

        <AdminSectionCard
          id="partners"
          title="Partners in Progress"
          description="The scrolling client-logo strip. Upload a logo image, or leave it blank to show the name as text."
        >
          <ListEditor
            sectionKey="partners"
            itemLabel="Partner"
            initial={partners}
            blankItem={{ name: "", image: "" }}
            fields={[
              { key: "image", label: "Logo", image: true },
              { key: "name", label: "Name" },
            ]}
          />
        </AdminSectionCard>

        <AdminSectionCard
          id="who-we-work-with"
          title="Who We Work With"
          description="Photo, title and description are all editable."
        >
          <ListEditor
            sectionKey="who_we_work_with"
            itemLabel="Card"
            initial={whoWeWorkWith}
            blankItem={{ image: "", title: "", description: "" }}
            fields={[
              { key: "image", label: "Photo", image: true },
              { key: "title", label: "Title" },
              { key: "description", label: "Description", multiline: true },
            ]}
          />
        </AdminSectionCard>

        <AdminSectionCard id="testimonials" title="Testimonials">
          <ListEditor
            sectionKey="testimonials"
            itemLabel="Testimonial"
            initial={testimonials}
            blankItem={{ quote: "", attribution: "", company: "" }}
            fields={[
              { key: "quote", label: "Quote", multiline: true },
              { key: "attribution", label: "Attribution (e.g. CFO)" },
              { key: "company", label: "Company" },
            ]}
          />
        </AdminSectionCard>

        <AdminSectionCard
          id="contact"
          title="Contact Information"
          description="Used across the footer, contact page and floating WhatsApp button."
        >
          <ContactEditor initial={contact} />
        </AdminSectionCard>
      </div>
    </div>
  );
}
