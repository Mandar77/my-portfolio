import React from 'react';

const educationData = [
  {
    university: 'Northeastern University, San Jose, CA',
    degree: 'Master of Science in Computer Science',
    gpa: '3.8/4.0',
    graduation: 'Expected Graduation: Dec 2025',
    courses: [
      'Computer Systems',
      'Natural Language Processing',
      'Research Capstone',
      'Cloud Computing',
      'Pattern Recognition and Computer Vision',
      'Data Mining',
      'Algorithms',
      'Programming Design Paradigm'
    ]
  },
  {
    university: 'Vishwakarma Institute of Technology, Pune, India',
    degree: 'Bachelor of Technology in Information Technology',
    gpa: '8.47/10.0',
    graduation: 'Aug 2019 – May 2023',
    courses: [
      'Database Systems',
      'ML/DL',
      'Web Dev',
      'Cloud Computing',
      'Networking',
      'OS'
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Education</h2>
      <div className="max-w-4xl mx-auto space-y-8 px-4">
        {educationData.map((edu, idx) => (
          <div key={idx} className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-1 text-white">{edu.university}</h3>
            <p className="text-blue-200 font-medium mb-1">{edu.degree}</p>
            <p className="text-gray-300 mb-1">
              GPA: {edu.gpa} — <span className="italic">{edu.graduation}</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-2" aria-label="Relevant courses">
              {edu.courses.map((course, i) => (
                <span
                  key={i}
                  className="bg-blue-100 bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-semibold"
                  title={course}
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
