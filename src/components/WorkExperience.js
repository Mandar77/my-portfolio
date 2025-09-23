// src/components/WorkExperience.js
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Graduate Teaching Assistant",
    company: "Northeastern University",
    location: "San Jose, CA",
    duration: "Sept 2024 to April 2025",
    details: [
      "Courses: CS 5800 (Algorithms), CS 5008 (Data Structures and Algorithms)",
    ],
  },
  {
    title: "Software Developer",
    company: "Reticulo Sports Technology",
    location: "Pune, India",
    duration: "Aug 2023 to Dec 2023",
    details: [
      "Improved product categorization by 25% with MobileNetV3 on 12,000+ images",
      "Boosted GPU inference performance 40% with Nvidia Triton/CUDA",
      "Implemented hardware-specific acceleration and batch optimization",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Reticulo Sports Technology",
    location: "Pune, India",
    duration: "Jan 2023 to June 2023",
    details: [
      "Optimized deep learning models for mobile deployment (cut memory 50%)",
      "Increased mobile performance and reduced training time",
    ],
  },
];

const WorkExperience = () => (
  <section id="experience" className="py-12">
    <h2 className="text-3xl font-bold text-center mb-10 text-white">Work Experience</h2>
    <div className="max-w-3xl mx-auto">
      <ol className="relative border-l-2 border-blue-300 ml-4">
        {experiences.map((exp, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="mb-12 ml-6"
          >
            <span className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 border-2 border-white"></span>
            <div className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <span className="text-blue-200">{exp.company}</span>
                  <div className="text-gray-300 text-sm">{exp.location} — {exp.duration}</div>
                </div>
              </div>
              <ul className="mt-3 list-disc ml-6 text-gray-200">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);

export default WorkExperience;
