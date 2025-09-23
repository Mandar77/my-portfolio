// src/components/Skills.js
import React from "react";
import { FaCuttlefish, FaPython, FaJava, FaReact, FaDocker, FaAws, FaGoogle, FaGitAlt, FaJenkins } from 'react-icons/fa';
import { SiNvidia, SiTensorflow, SiKeras, SiPytorch, SiScikitlearn, SiMysql, SiPostgresql, SiSqlite, SiMongodb, SiTerraform, SiAnsible, SiGitlab, SiPrometheus, SiGrafana, SiOpencv } from 'react-icons/si';

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: <FaPython /> },
      { name: "C", icon: <FaCuttlefish /> },
      { name: "C++", icon: <FaCuttlefish /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Keras", icon: <SiKeras /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "OpenVINO" },
      { name: "Torch", icon: <SiPytorch /> },
      { name: "React", icon: <FaReact /> },
      { name: "OpenCV", icon: <SiOpencv /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: <FaAws /> },
      { name: "GCP", icon: <FaGoogle /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes"},
      { name: "OpenShift"},
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "Ansible", icon: <SiAnsible /> },
    ],
  },
  {
    category: "Performance & CI/CD",
    items: [
      { name: "Nvidia Triton", icon: <SiNvidia /> },
      { name: "TensorRT", icon: <SiNvidia /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitLab", icon: <SiGitlab /> },
      { name: "Jenkins", icon: <FaJenkins /> },
      { name: "Prometheus", icon: <SiPrometheus /> },
      { name: "Grafana", icon: <SiGrafana /> },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-12">
    <div className="glass-card max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Skills</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-4">
        {skills.map((cat, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">{cat.category}</h3>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 bg-blue-100 bg-opacity-20 rounded-lg shadow hover:bg-blue-200 hover:bg-opacity-30 transition-colors cursor-pointer text-white text-sm font-medium"
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
