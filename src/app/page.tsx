import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pyramids from "@/components/Pyramids";
import Research from "@/components/Research";
import Gallery from "@/components/Gallery";
import Visit from "@/components/Visit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950">
      <Navbar />
      <Hero />
      <About />
      <Pyramids />
      <Research />
      <Gallery />
      <Visit />
      <Contact />
      <Footer />
    </main>
  );
}
