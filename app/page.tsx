import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrackerStrip from "@/components/TrackerStrip";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Vision from "@/components/Vision";
import Privacy from "@/components/Privacy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Nav />
      <Hero />
      <TrackerStrip />
      <Features />
      <HowItWorks />
      <Vision />
      <Privacy />
      <Footer />
    </main>
  );
}
