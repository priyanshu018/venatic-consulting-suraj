import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Industries from "../components/Industries";
import Partners from "../components/Partners";
import ClientImpact from "../components/ClientImpact";
import StatsCta from "../components/StatsCta";

export const metadata: Metadata = {
  title: "Our Clients | Venatic Consulting",
  description:
    "Venatic Consulting serves corporates, governments, development partners and startups across 20+ countries and 8 industries.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR CLIENTS"
        title="Trusted Across Industries and Borders"
        description="We collaborate with a diverse set of organizations to drive meaningful transformation and sustainable growth."
      />
      <Industries />
      <Partners />
      <ClientImpact />
      <StatsCta />
    </>
  );
}
