// src/components/Skills.js
import React from "react";
import { FaPython, FaJava, FaReact, FaDocker, FaAws, FaGoogle, FaCuttlefish } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTensorflow, SiKeras, SiPytorch, SiScikitlearn, SiMysql, SiPostgresql, SiMongodb, SiTerraform, SiAnsible, SiPrometheus, SiGrafana } from 'react-icons/si';
import { TbBrandNextjs, TbApi } from 'react-icons/tb';
import { DiNodejsSmall } from 'react-icons/di';
import { RiOpenaiFill } from 'react-icons/ri';

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: <FaPython /> },
      { name: "C", icon: <FaCuttlefish /> },
      { name: "C++", icon: <FaCuttlefish /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Keras", icon: <SiKeras /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "OpenVINO", icon: <RiOpenaiFill /> },
      { name: "Torch", icon: <SiPytorch /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <TbBrandNextjs /> },
      { name: "FastAPI", icon: <TbApi /> },
      { name: "Flask", icon: <TbApi /> },
      { name: "Node.js", icon: <DiNodejsSmall /> },
      { name: "Tailwind CSS", icon: <RiOpenaiFill /> },
      { name: "LangChain", icon: <RiOpenaiFill /> },
      { name: "Pandas", icon: <RiOpenaiFill /> },
      { name: "NumPy", icon: <RiOpenaiFill /> },
      { name: "Beautiful Soup", icon: <RiOpenaiFill /> },
      { name: "Uvicorn", icon: <TbApi /> },
      { name: "Gunicorn", icon: <TbApi /> },
      { name: "Jest", icon: <RiOpenaiFill /> },
      { name: "ESLint", icon: <SiJavascript /> },
    ],
  },
  {
    category: "AI/ML & NLP",
    items: [
      { name: "LLM Integration", icon: <RiOpenaiFill /> },
      { name: "RAG Systems", icon: <TbApi /> },
      { name: "Vector Embeddings", icon: <TbApi /> },
      { name: "FAISS", icon: <TbApi /> },
      { name: "Semantic Search", icon: <TbApi /> },
      { name: "Prompt Engineering", icon: <RiOpenaiFill /> },
      { name: "NLP Processing", icon: <TbApi /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Supabase", icon: <TbApi /> },
      { name: "Vector Databases", icon: <SiMongodb /> },
      { name: "SQLite", icon: <RiOpenaiFill /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Google Cloud", icon: <FaGoogle /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <TbApi /> },
      { name: "OpenShift", icon: <TbApi /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "Ansible", icon: <SiAnsible /> },
      { name: "Vercel", icon: <TbApi /> },
    ],
  },
  {
    category: "Performance & CI/CD",
    items: [
      { name: "Nvidia Triton", icon: <SiPrometheus /> },
      { name: "TensorRT", icon: <SiPrometheus /> },
      { name: "TensorRT", icon: <SiPrometheus /> },
      { name: "Git", icon: <SiJavascript /> },
      { name: "GitLab", icon: <TbApi /> },
      { name: "Jenkins", icon: <SiPrometheus /> },
      { name: "Prometheus", icon: <SiPrometheus /> },
      { name: "Grafana", icon: <SiGrafana /> },
    ],
  },
  {
    category: "Web Technologies",
    items: [
      { name: "REST APIs", icon: <TbApi /> },
      { name: "OAuth Integration", icon: <RiOpenaiFill /> },
      { name: "WebSockets", icon: <TbApi /> },
      { name: "WebSockets", icon: <TbApi /> },
      { name: "State Management", icon: <RiOpenaiFill /> },
      { name: "WebSockets", icon: <TbApi /> },
      { name: "API Integration", icon: <TbApi /> },
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
                  {item.icon && <span className="text-xl">{item.icon}</span>}
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
