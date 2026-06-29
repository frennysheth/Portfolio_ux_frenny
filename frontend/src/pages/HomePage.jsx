import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Education from "@/sections/Education";
import FeaturedProjects from "@/sections/FeaturedProjects";
import DesignProcess from "@/sections/DesignProcess";
import Hobbies from "@/sections/Hobbies";
import Skills from "@/sections/Skills";
import FunFacts from "@/sections/FunFacts";
import Contact from "@/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <FeaturedProjects />
        <DesignProcess />
        <Hobbies />
        <Skills />
        <FunFacts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
