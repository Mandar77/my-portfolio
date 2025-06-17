import React from 'react';
import projects from '../data/projects';
const Projects = () => (
  <section className="py-12 bg-gray-50" id="projects">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col">
            <img src={require(`../assets/${project.image}`)} alt={project.title} className="mb-4 rounded h-48 object-cover" />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{tech}</span>
              ))}
            </div>
            <div className="mt-auto flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Projects;
