import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Partners from "./components/Partners";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import ClientImpact from "./components/ClientImpact";
import ContactSection from "./components/ContactSection";
import StatsCta from "./components/StatsCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <Partners />
      <WhoWeWorkWith />
      <ClientImpact />
      <ContactSection />
      <StatsCta />
    </>
  );
}
