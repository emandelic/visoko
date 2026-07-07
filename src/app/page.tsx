import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Discoveries from "@/components/Discoveries";
import Stats from "@/components/Stats";
import Attractions from "@/components/Attractions";
import Accommodation from "@/components/Accommodation";
import MapSection from "@/components/MapSection";
import Tours from "@/components/Tours";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-900">
      <Navbar />
      <Hero />
      <About />
      <Discoveries />
      <Stats />
      <Attractions />
      <Accommodation />
      <MapSection />
      <Tours />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
