import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import LocalImpact from "@/components/local-impact";
import Vision from "@/components/vision";
import Services from "@/components/services";
import Builds from "@/components/builds";
import WhyMe from "@/components/why-me";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LocalImpact />
        <Vision />
        <Services />
        <Builds />
        <WhyMe />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
