import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { motion, useScroll } from 'framer-motion'
import PageProgress from "@/components/PageProgress";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.main className="max-w-[1200px] mx-auto px-4">
      <PageProgress width={scrollYProgress} />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </motion.main>
  )
}
