import React from "react";
import { motion } from "framer-motion";

const hobbiesData = [
  {
    name: "Badminton",
    icon: "🏸",
    description:
      "I regularly play badminton and compete in recreational tournaments at the A/B level across the Bay Area. It’s a great way to stay active and meet fellow players in the community.",
  },
  {
    name: "Photography",
    icon: "📸",
    description:
      "I enjoy capturing moments and landscapes, experimenting with lighting and composition to create compelling images.",
  },
  {
    name: "Travel",
    icon: "✈️",
    description:
      "Exploring new places and cultures broadens my perspective and inspires creativity.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const Hobbies = () => (
  <section id="hobbies" className="py-12 bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-10">Hobbies & Interests</h2>
    <div className="max-w-4xl mx-auto grid gap-8 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {hobbiesData.map((hobby, idx) => (
        <motion.div
          key={idx}
          custom={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          tabIndex={0}
          aria-label={hobby.name}
        >
          <div className="text-6xl mb-4" aria-hidden="true">
            {hobby.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{hobby.name}</h3>
          <p className="text-gray-700">{hobby.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Hobbies;
