import React from 'react';
const Homepage = () => (
  <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-b from-blue-50 to-white" id="home">
    <img src={require('../assets/profile.jpg')} alt="Profile" className="w-32 h-32 rounded-full mb-4 shadow-lg" />
    <h1 className="text-4xl font-bold mb-2">Your Name</h1>
    <p className="text-lg text-gray-700 mb-4 text-center max-w-xl">
      Short professional bio goes here. Highlight your passion, expertise, and what makes you unique.
    </p>
  </section>
);
export default Homepage;
