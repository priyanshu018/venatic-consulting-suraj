import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Partners from "./components/Partners";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import ClientImpact from "./components/ClientImpact";
import StatsCta from "./components/StatsCta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Industries />
        <Partners />
        <WhoWeWorkWith />
        <ClientImpact />
        <StatsCta />
      </main>
      <Footer />
    </div>
  );
}
