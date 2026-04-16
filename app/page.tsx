import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StoryCard from "@/components/StoryCard";
import Pricing from "@/components/Pricing";
import ThingsToDo from "@/components/ThingsToDo";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="relative mx-auto max-w-[1200px] min-h-screen bg-forest overflow-hidden"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <Navbar />
      <Hero />

      <StoryCard
        align="right"
        title={<>RARE SPECIES<br />MARKETPLACE</>}
        body="Orely Exotics is a curated marketplace for rare and exotic pets. We source reptiles, parrots, small mammals, and aquatic species only from licensed, ethical breeders who meet our strict welfare standards."
      />
      <StoryCard
        align="left"
        title={<>LIVE ARRIVAL<br />&amp; HEALTH GUARANTEE</>}
        body="Every animal ships with temperature-controlled overnight delivery and a full live-arrival guarantee. Our in-house vets screen each pet, and you receive a health certificate, feeding plan, and habitat checklist before it leaves the facility."
      />
      <StoryCard
        align="right"
        title={<>ETHICAL SOURCING<br />&amp; LIFETIME SUPPORT</>}
        body="No wild-caught animals — ever. We verify breeder permits, publish lineage records, and support every buyer with lifetime care consultations so your exotic companion thrives for years to come."
      />

      <Pricing />
      <ThingsToDo />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  );
}
