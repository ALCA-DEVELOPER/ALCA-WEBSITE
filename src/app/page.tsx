import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Preloader />
      <Navbar />
      <Hero />
      <TechStack />
      <Stats />
      <Features />
      <Process />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
      <FloatingActions />
    </main>
  );
}
