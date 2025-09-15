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
import Confetti from 'react-confetti';


function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Confetti />
      {
        <Navbar />
      /* Optionally add a Navbar or Header here */}
      <main>
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
