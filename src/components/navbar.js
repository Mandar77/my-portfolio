import React from 'react';
const Navbar = () => (
  <nav className="bg-white shadow py-4">
    <div className="container mx-auto flex justify-between items-center px-4">
      <span className="font-bold text-xl">Your Name</span>
      <ul className="flex gap-6">
        <li><a href="#home" className="hover:text-blue-600">Home</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
        <li><a href="#hobbies" className="hover:text-blue-600">Hobbies</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
