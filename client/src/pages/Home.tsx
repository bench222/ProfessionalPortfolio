import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter text-primary">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
