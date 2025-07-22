import React from "react";
import { timelineData } from "../data/timeline";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaProjectDiagram } from "react-icons/fa";

const typeIcon = {
  work: <FaBriefcase />,
  education: <FaGraduationCap />,
  project: <FaProjectDiagram />,
};

const Timeline = () => (
  <section id="timeline" className="py-12 bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-10">Timeline</h2>
    <div className="max-w-3xl mx-auto">
      <ol className="relative border-l-2 border-blue-300 ml-4">
        {timelineData.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="mb-12 ml-6"
          >
            <span className="absolute w-6 h-6 bg-blue-500 rounded-full -left-3.5 border-4 border-white flex items-center justify-center text-white">
              {typeIcon[item.type]}
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
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-blue-600 hover:underline"
                >
                  Learn More
                </a>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);

export default Timeline;
