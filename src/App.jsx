import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import AnimatedContent from "./components/Animations/AnimatedContents";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Aurora from './components/Animations/Aurora';
import {useState, useEffect, useLayoutEffect } from "react";
  

export default function App() {
  const sections = ["home", "about","skills", "contact"];
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);


  return (
    <div className="">
      <div className="inset-0 z-10 fixed pointer-events-none">
      <Aurora
        colorStops={["#2c4e3f", "#5a4b8b", "#4f7eb0"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.4}
      />
      </div>
      

      <div className="relative z-30">
        <Navbar sections={sections} activeSection={activeSection} />
      </div>
       <div className="pt-32 relative z-20">
        <Home />
        <About />
        <Skills />
        
        
          <Contact />
        
      </div>
    </div>
  );
}
