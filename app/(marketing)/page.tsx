import Hero from "../components/Hero";
import Services from "../components/Services";
import SuccessStories from "../components/SuccessStories";
import Industries from "../components/Industries";
import Partners from "../components/Partners";
import WhoWeWorkWith from "../components/WhoWeWorkWith";
import ClientImpact from "../components/ClientImpact";
import StatsCta from "../components/StatsCta";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SuccessStories />
      <Industries />
      <Partners />
      <WhoWeWorkWith />
      <ClientImpact />
      <StatsCta />
    </>
  );
}
