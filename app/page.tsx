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
      className="relative mx-auto max-w-[1200px] min-h-screen bg-forest"
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
        title={<>WILDLIFE<br />SANCTUARY</>}
        body="Orely is a Wildlife Sanctuary and Conservation Center located in the North. It houses exotic animals such as tigers, lions, elephants, and monkeys. A massive butterfly-showing Aviary with 3 stops, plus endangered species and numerous wildlife preservation programs."
      />
      <StoryCard
        align="left"
        title={<>PROTECT NATURE<br />&amp; RARE SPECIES</>}
        body="Orely displays a variety of animals from around the world. The African savannah, the Sea Safari, and a Wildlife Discovery & Treatment Environment. The Big Cat Exhibit contains Tigers, Lions, and Leopards in their habitat."
      />
      <StoryCard
        align="right"
        title={<>ORELY ZOO<br />CONSERVATION</>}
        body="Orely is dedicated to educating the public about wildlife conservation and taking an active role in its care with ethical, positive educational content, coordinated programs for all ages, and information about different animal species."
      />

      <Pricing />
      <ThingsToDo />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  );
}
