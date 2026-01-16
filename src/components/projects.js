// src/components/Projects.js
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { timelineData } from "../data/timeline";

const projects = timelineData.filter(item => item.type === 'project');

const Projects = () => (
  <section id="projects" className="py-12">
    <h2 className="text-3xl font-bold text-center mb-10 text-white">Projects</h2>
    <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
      {projects.map((proj, idx) => (
        <div
          key={idx}
          className="glass-card p-6 flex flex-col"
        >
          <h3 className="text-xl font-semibold mb-2 text-white">{proj.title}</h3>
          <p className="mb-3 text-gray-200">{proj.description}</p>
          <div className="mt-auto flex gap-4">
            {/* Conditionally render GitHub link if present */}
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-300 hover:text-blue-100 font-medium"
                aria-label="Publication or GitHub"
              >
                {proj.link.includes('github') ? <FaGithub className="inline" /> : <FaExternalLinkAlt className="inline" />} {proj.link.includes('github') ? 'GitHub' : 'Publication'}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
