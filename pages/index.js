import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto px-4">
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
