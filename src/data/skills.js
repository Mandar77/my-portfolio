import {
  SiPython, SiC, SiCplusplus, SiJavascript, SiTypescript,
  SiTensorflow, SiPytorch, SiScikitlearn,
  SiReact, SiNextdotjs, SiFastapi, SiFlask, SiNodedotjs,
  SiTailwindcss, SiLangchain,
  SiMysql, SiPostgresql, SiMongodb, SiSupabase, SiSqlite,
  SiAmazonwebservices, SiGooglecloud, SiDocker, SiKubernetes,
  SiTerraform, SiVercel, SiHelm,
  SiNvidia, SiGit, SiPrometheus, SiGrafana
} from 'react-icons/si';
import {
  FaCode, FaJava, FaCloud, FaDatabase, FaBrain, FaWrench, FaGlobe,
  FaGears, FaNetworkWired, FaLock, FaMagnifyingGlass, FaPlug,
  FaDiagramProject, FaSitemap, FaBolt
} from 'react-icons/fa6';

// Brand-colored, per-skill icon definitions.
// `icon` is a react-icons component; `color` is the brand color used on hover.
export const skillsData = {
  languages: [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Java", icon: FaJava, color: "#E76F00" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  ],
  frameworks: [
    { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
  ],
  aiMl: [
    { name: "LLM Integration", icon: FaBrain, color: "#A78BFA" },
    { name: "RAG Systems", icon: FaDiagramProject, color: "#06B6D4" },
    { name: "Vector Embeddings", icon: FaMagnifyingGlass, color: "#EC4899" },
    { name: "Prompt Engineering", icon: FaCode, color: "#F59E0B" },
    { name: "NLP Processing", icon: FaBrain, color: "#A78BFA" },
  ],
  databases: [
    { name: "MySQL", icon: SiMysql, color: "#00758F" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
    { name: "Vector Databases", icon: FaDatabase, color: "#A78BFA" },
    { name: "SQLite", icon: SiSqlite, color: "#003B57" },
  ],
  cloud: [
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
    { name: "Helm", icon: SiHelm, color: "#0F1689" },
    { name: "CI/CD", icon: FaGears, color: "#06B6D4" },
    { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  ],
  devops: [
    { name: "Nvidia Triton", icon: SiNvidia, color: "#76B900" },
    { name: "TensorRT", icon: SiNvidia, color: "#76B900" },
    { name: "CUDA", icon: SiNvidia, color: "#76B900" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
    { name: "Grafana", icon: SiGrafana, color: "#F46800" },
  ],
  web: [
    { name: "REST APIs", icon: FaPlug, color: "#06B6D4" },
    { name: "OAuth", icon: FaLock, color: "#10B981" },
    { name: "WebSockets", icon: FaNetworkWired, color: "#A78BFA" },
  ],
  distributed: [
    { name: "Microservices", icon: FaSitemap, color: "#06B6D4" },
    { name: "Distributed Systems", icon: FaSitemap, color: "#A78BFA" },
    { name: "Low-latency Systems", icon: FaBolt, color: "#FBBF24" },
  ],
};

// Backwards-compatible plain-string view for the terminal commands
// (which renders skill names in ASCII output, not React).
export const skills = Object.fromEntries(
  Object.entries(skillsData).map(([key, items]) => [key, items.map(i => i.name)])
);

// Category display names + icon component for the GUI.
export const skillCategories = {
  languages: { name: "Languages", icon: FaCode },
  frameworks: { name: "Frameworks & Libraries", icon: FaWrench },
  aiMl: { name: "AI/ML & NLP", icon: FaBrain },
  databases: { name: "Databases", icon: FaDatabase },
  cloud: { name: "Cloud & DevOps", icon: FaCloud },
  devops: { name: "Performance & Tooling", icon: FaGears },
  web: { name: "Web Technologies", icon: FaGlobe },
  distributed: { name: "Distributed Systems & Networking", icon: FaSitemap },
};

// Plain-text icons used by the terminal (no React).
export const skillCategoryEmojis = {
  languages: "[LANG]",
  frameworks: "[FW]",
  aiMl: "[AI]",
  databases: "[DB]",
  cloud: "[CLOUD]",
  devops: "[OPS]",
  web: "[WEB]",
  distributed: "[DIST]",
};
