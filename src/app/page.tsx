import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Preloader />
      <Navbar />
      <Hero />
      <Features />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
