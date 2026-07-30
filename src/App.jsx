import { Routes, Route } from "react-router-dom";
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
import ProjectCaseStudy from "./pages/ProjectCaseStudy";

const initEngine = async (engine) => {
  await loadSlim(engine);
};

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ParticlesProvider init={initEngine}>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
          </Routes>
        </main>
        <Footer />
      </ParticlesProvider>
    </LanguageProvider>
  );
}
