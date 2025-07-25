// src/App.js
import React from "react";
import Homepage from "./components/homepage";
import Timeline from "./components/Timeline";
// <<<<<<< feature/timeline
import Skills from "./components/skills";
=======
// import Skills from "./components/skills";
// =======
import WorkExperience from "./components/WorkExperience";
// import Projects from "./components/projects";
import Skills from "./components/skills";
import Education from './components/Education';
// >>>>>>> main
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
