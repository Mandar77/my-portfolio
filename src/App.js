// src/App.js
import React from "react";
import Homepage from "./components/homepage";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/projects";
import Skills from "./components/Skills";
import Education from './components/Education';
import Hobbies from './components/hobbies';
import Navbar from "./components/navbar";
import Contact from "./components/contact";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {
        <Navbar />
      /* Optionally add a Navbar or Header here */}
      <main>
        <Homepage />
        {/* Add other sections like WorkExperience, Projects, Skills, etc. */}
        <WorkExperience />
        <Projects />
        <Skills />
        <Education />
        <Hobbies />
        <Contact />
        {/* Add other sections like Contact, Hobbies, etc. as needed */}
      </main>
    </div>
  );
}

export default App;
