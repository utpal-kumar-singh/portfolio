import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [section, setSection] = useState("landing");

  // show content area padding bottom so footer doesn't overlap
  const showMain = section !== "landing";

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar section={section} onNav={setSection} />
      {section === "landing" ? (
        <Landing onEnter={() => setSection("home")} />
      ) : (
        <main className="pt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
          <div id="home">{section === "home" && <Home />}</div>
          <div id="about">{section === "about" && <About />}</div>
          <div id="projects">{section === "projects" && <Projects />}</div>
          <div id="education">{section === "education" && <Education />}</div>
          <div id="contact">{section === "contact" && <Contact />}</div>
        </main>
      )}
      <Footer />
    </div>
  );
}
