import React from 'react';
import experience from '../data/experience';
const Experience = () => (
  <section className="py-12" id="experience">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
      <ol className="relative border-l-2 border-blue-200">
        {experience.map((job, idx) => (
          <li key={idx} className="mb-10 ml-6">
            <span className="absolute w-4 h-4 bg-blue-400 rounded-full -left-2.5 border border-white"></span>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600">{job.company} &bull; {job.duration}</p>
                <ul className="list-disc ml-5 mt-2 text-gray-700">
                  {job.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
export default Experience;
