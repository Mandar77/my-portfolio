import React from 'react';
import hobbies from '../data/hobbies';
const Hobbies = () => (
  <section className="py-12" id="hobbies">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Hobbies & Interests</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {hobbies.map((hobby, idx) => (
          <div key={idx} className="bg-white rounded shadow p-6 w-60 text-center">
            <span className="text-4xl mb-2">{hobby.icon}</span>
            <h3 className="text-lg font-semibold">{hobby.name}</h3>
            <p className="text-gray-600">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Hobbies;
