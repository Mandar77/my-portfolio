// src/App.js
import React from "react";
import Homepage from "./components/homepage";
import Timeline from "./components/Timeline";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/skills";
import Education from './components/Education';
import Hobbies from './components/hobbies';
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Projects from "./components/projects";
function App() {
  return (
    <div className="min-h-screen font-sans bg-hero-pattern bg-cover bg-fixed">
      {
        <Navbar />
      /* Optionally add a Navbar or Header here */}
      <main className="flex flex-col items-center p-4">
        <Homepage />
        <Timeline />
        <WorkExperience />
        <Projects />
        <Skills />
        <Education />
        <Hobbies />
        <Contact />
      </main>
    </div>
  );
}

export default App;
