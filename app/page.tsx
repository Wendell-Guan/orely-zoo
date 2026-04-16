import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stories from "@/components/Stories";
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
      <Stories />
      <Pricing />
      <ThingsToDo />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  );
}
