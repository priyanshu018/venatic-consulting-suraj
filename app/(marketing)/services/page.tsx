import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Services from "../../components/Services";
import TaxConsultingSection from "../../components/TaxConsultingSection";
import OutsourcingSection from "../../components/OutsourcingSection";
import AppDevSection from "../../components/AppDevSection";
import AppSecuritySection from "../../components/AppSecuritySection";
import StatsCta from "../../components/StatsCta";

export const metadata: Metadata = {
  title: "Services | Venatic Consulting",
  description:
    "End-to-end consulting solutions across strategy, operations, finance, organization, digital transformation and government advisory.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title="How We Help Organizations Grow"
        description="From strategy through execution, our practice areas cover every stage of organizational growth and transformation."
      />
      <Services />
      <TaxConsultingSection />
      <OutsourcingSection />
      <AppDevSection />
      <AppSecuritySection />
      <StatsCta />
    </>
  );
}
