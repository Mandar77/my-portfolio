// src/components/Projects.js
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { timelineData } from "../data/timeline";

// Example projects array. Add as many as you want!
// const projects = [
//   {
//     title: "Number Plate Recognition System",
//     description: [
//       "Published at IC-ICN 2022",
//       "Used AWS, RTO APIs, OpenCV (Haar Cascade, EasyOCR), Apache, EC2",
//     ],
//     tech: ["AWS", "OpenCV", "EasyOCR", "Apache", "EC2", "RTO APIs"],
//     publication: "https://www.researchgate.net/publication/384329752",
//     // No GitHub for this project
//   },
//   {
//     title: "KhetiKaksha (Farmer Hub)",
//     description: [
//       "Published at IC-ICN 2022",
//       "Web app with Plant Disease Detection (ResNet9) and Crop Recommendation (SVM)",
//     ],
//     tech: ["React", "ResNet9", "SVM", "Web App"],
//     publication: "https://www.researchgate.net/publication/384330843"
//     // No GitHub for this project
//   },
//   {
//     title: "Multi Modal Dynamic Hand Gesture Recognition",
//     description: [
//       "3rd place at NU Student Research Showcase",
//       "97.25% accuracy, <40ms latency, 119GB dataset, 34-model ensemble",
//     ],
//     tech: ["Ensemble", "Deep Learning", "Python"],
//     publication: "https://www.researchgate.net/publication/387056779_Multi_Modal_Dynamic_Hand_Gesture_Recognition",
//     github: "https://github.khoury.northeastern.edu/mandar07/CS5330_FA24_Group1_Project.git",
//   },
//   {
//     title: "Personal Portfolio Website",
//     description: [
//       "Modern, responsive portfolio built with React and Tailwind CSS.",
//       "Deployed on Vercel with custom domain support.",
//     ],
//     tech: ["React", "Tailwind CSS", "Vercel"],
//     github: "https://github.com/Mandar77/my-portfolio.git",
//     // No publication for this project
//   },
//   // Add more projects as needed!
// ];

const projects = timelineData.filter(item => item.type === 'project');

const Projects = () => (
  <section id="projects" className="py-12 bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
    <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
      {projects.map((proj, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col"
        >
          <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
          <p className="mb-3 text-gray-700">{proj.description}</p>
          <div className="mt-auto flex gap-4">
            {/* Conditionally render GitHub link if present */}
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-700 hover:text-blue-900 font-medium"
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
