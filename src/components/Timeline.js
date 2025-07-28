import React from "react";
import { timelineData } from "../data/timeline";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaProjectDiagram,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { sortTimelineData } from "../utils/timeline";

const typeDetails = {
  work: {
    icon: <FaBriefcase />,
    color: "bg-blue-500",
  },
  education: {
    icon: <FaGraduationCap />,
    color: "bg-green-500",
  },
  project: {
    icon: <FaProjectDiagram />,
    color: "bg-purple-500",
  },
};

const Timeline = () => {
  const sortedTimeline = sortTimelineData(timelineData);

  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-16">Timeline</h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line in the center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300"></div>

        <div className="space-y-12">
          {sortedTimeline.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            const type = typeDetails[item.type] || typeDetails.work;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon */}
                <div className="z-10 w-8 h-8 rounded-full flex items-center justify-center text-white absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0 shadow-lg"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${type.color}`}>
                    {type.icon}
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-1/2 hidden md:block" />

                {/* Card */}
                <div
                  className={`bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 hover:shadow-xl transition-shadow duration-300 ${
                    isLeft ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                  }`}
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-blue-700">{item.subtitle}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
