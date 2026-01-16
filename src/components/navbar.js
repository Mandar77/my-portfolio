import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "Timeline", to: "timeline" },
  { name: "Work Experience", to: "work-experience" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Education", to: "education" },
  { name: "Hobbies", to: "hobbies" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-card shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <span className="font-bold text-xl text-white">Mandar Ambulkar</span>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-60}
              activeClass="text-blue-300 font-bold"
              className="cursor-pointer text-white hover:text-blue-300 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass-card px-4 pb-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-60}
                activeClass="text-blue-300 font-bold"
                className="cursor-pointer text-white hover:text-blue-300 font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
