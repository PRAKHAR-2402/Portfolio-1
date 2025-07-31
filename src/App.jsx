import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
const App = () => {
  return (
    <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Expanding gradient background */}
      <div className="absolute inset-0 -z-10 w-full h-full min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Experience />
        <Technologies />

        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
};

export default App;
