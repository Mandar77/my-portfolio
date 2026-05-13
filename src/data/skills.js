import {
  SiPython, SiC, SiCplusplus, SiJavascript, SiTypescript,
  SiTensorflow, SiKeras, SiPytorch, SiScikitlearn,
  SiReact, SiNextdotjs, SiFastapi, SiFlask, SiNodedotjs,
  SiTailwindcss, SiLangchain, SiPandas, SiNumpy,
  SiGunicorn, SiJest, SiEslint,
  SiMysql, SiPostgresql, SiMongodb, SiSupabase, SiSqlite,
  SiGooglecloud, SiDocker, SiKubernetes,
  SiRedhatopenshift, SiTerraform, SiAnsible, SiVercel,
  SiNvidia, SiGit, SiGitlab, SiJenkins, SiPrometheus, SiGrafana
} from 'react-icons/si';
import {
  FaCode, FaJava, FaCloud, FaDatabase, FaBrain, FaWrench, FaGlobe,
  FaGears, FaNetworkWired, FaLock, FaServer, FaMagnifyingGlass, FaPlug,
  FaDiagramProject
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
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "Keras", icon: SiKeras, color: "#D00000" },
    { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "OpenVINO", icon: FaGears, color: "#0068B5" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
    { name: "Pandas", icon: SiPandas, color: "#150458" },
    { name: "NumPy", icon: SiNumpy, color: "#4D77CF" },
    { name: "Beautiful Soup", icon: FaCode, color: "#A78BFA" },
    { name: "Uvicorn", icon: FaServer, color: "#499848" },
    { name: "Gunicorn", icon: SiGunicorn, color: "#499848" },
    { name: "Jest", icon: SiJest, color: "#C21325" },
    { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
  ],
  aiMl: [
    { name: "LLM Integration", icon: FaBrain, color: "#A78BFA" },
    { name: "RAG Systems", icon: FaDiagramProject, color: "#06B6D4" },
    { name: "Vector Embeddings", icon: FaMagnifyingGlass, color: "#EC4899" },
    { name: "FAISS", icon: FaMagnifyingGlass, color: "#0467DF" },
    { name: "Semantic Search", icon: FaMagnifyingGlass, color: "#10B981" },
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
    { name: "AWS", icon: FaCloud, color: "#FF9900" },
    { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "OpenShift", icon: SiRedhatopenshift, color: "#EE0000" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
    { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
    { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  ],
  devops: [
    { name: "Nvidia Triton", icon: SiNvidia, color: "#76B900" },
    { name: "TensorRT", icon: SiNvidia, color: "#76B900" },
    { name: "CUDA", icon: SiNvidia, color: "#76B900" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
    { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
    { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
    { name: "Grafana", icon: SiGrafana, color: "#F46800" },
    { name: "CI/CD", icon: FaGears, color: "#06B6D4" },
  ],
  web: [
    { name: "REST APIs", icon: FaPlug, color: "#06B6D4" },
    { name: "OAuth Integration", icon: FaLock, color: "#10B981" },
    { name: "WebSockets", icon: FaNetworkWired, color: "#A78BFA" },
    { name: "State Management", icon: FaGears, color: "#EC4899" },
    { name: "API Integration", icon: FaPlug, color: "#F59E0B" },
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
  devops: { name: "Performance & CI/CD", icon: FaGears },
  web: { name: "Web Technologies", icon: FaGlobe },
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
};
