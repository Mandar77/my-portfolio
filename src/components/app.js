import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Experience from './components/WorkExperience';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Projects />
      <Experience />
      <Skills />
      <Hobbies />
      <Contact />
    </>
  );
}
export default App;
