import React from "react";
import { motion } from "framer-motion";

const Homepage = () => (
  <motion.section
    id="home"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="glass-card flex flex-col items-center justify-center min-h-[70vh] px-4 py-8 md:p-12 my-8"
  >
    <img
      src={require("../assets/profile.jpeg")}
      alt="Profile"
      className="w-32 h-32 rounded-full shadow-lg mb-6 object-cover"
    />
    <h1 className="text-4xl font-bold mb-2 text-blue-800">Mandar Ambulkar</h1>
    <p className="text-lg text-white text-center max-w-xl mb-4">
      Welcome! I’m a passionate computer scientist with experience in deep learning, cloud, and full-stack development. I love building impactful solutions and collaborating with diverse teams to solve real-world problems.
    </p>
    <motion.a
      href="#contact"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold inline-block focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      Contact Me
    </motion.a>
  </motion.section>
);

export default Homepage;
