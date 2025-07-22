// src/App.js
import React from "react";
import Homepage from "./components/homepage";
// <<<<<<< feature/timeline
import Timeline from "./components/Timeline";
// import Skills from "./components/skills";
// =======
import WorkExperience from "./components/WorkExperience";
// import Projects from "./components/projects";
import Skills from "./components/Skills";
import Education from './components/Education';
// >>>>>>> main
import Hobbies from './components/hobbies';
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Projects from "./components/projects";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {
        <Navbar />
      /* Optionally add a Navbar or Header here */}
      <main>
        <Homepage />
        {/* Add other sections like WorkExperience, Projects, Skills, etc. */}
        <Timeline />
        <Projects />
        <Skills />
        <Hobbies />
        <Contact />
        {/* Add other sections like Contact, Hobbies, etc. as needed */}
      </main>
    </div>
  );
}

export default App;
