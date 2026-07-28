import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { LanguageProvider } from "./context/LanguageContext";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const initEngine = async (engine) => {
  await loadSlim(engine);
};

export default function App() {
  return (
    <LanguageProvider>
      <ParticlesProvider init={initEngine}>
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </ParticlesProvider>
    </LanguageProvider>
  );
}
