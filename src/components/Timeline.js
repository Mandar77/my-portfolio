import React from "react";
import { timelineData } from "../data/timeline";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaProjectDiagram, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { processTimeline } from "../utils/timeline";

const typeDetails = {
  work: {
    icon: <FaBriefcase />,
    color: "bg-blue-500",
    borderColor: "border-blue-300",
  },
  education: {
    icon: <FaGraduationCap />,
    color: "bg-green-500",
    borderColor: "border-green-300",
  },
  project: {
    icon: <FaProjectDiagram />,
    color: "bg-purple-500",
    borderColor: "border-purple-300",
  },
};

const Timeline = () => {
  const lanes = processTimeline(timelineData);

  return (
    <section id="timeline" className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Timeline</h2>
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-4">
          {lanes.map((lane, laneIndex) => (
            <div key={laneIndex} className="flex-1">
              <ol className={`relative border-l-2 ${typeDetails.work.borderColor} ml-4`}>
                {lane.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="mb-12 ml-6"
                  >
                    <span className={`absolute w-6 h-6 ${typeDetails[item.type].color} rounded-full -left-3.5 border-4 border-white flex items-center justify-center text-white`}>
                      {typeDetails[item.type].icon}
                    </span>
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div>
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                          <span className="text-blue-700">{item.subtitle}</span>
                          <div className="text-gray-500 text-sm">{item.date}</div>
                        </div>
                      </div>
                      <p className="mt-3 text-gray-700">{item.description}</p>
                      <div className="mt-3 flex gap-4">
                        {item.github && (
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-gray-700 hover:text-black font-medium"
                            aria-label="GitHub Repository"
                          >
                            <FaGithub className="inline" /> GitHub
                          </a>
                        )}
                        {item.publication && (
                          <a
                            href={item.publication}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-blue-700 hover:text-blue-900 font-medium"
                            aria-label="Publication"
                          >
                            <FaExternalLinkAlt className="inline" /> Publication
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
