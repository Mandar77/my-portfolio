import {
  SiPython, SiC, SiCplusplus, SiJavascript, SiTypescript,
  SiTensorflow, SiPytorch, SiScikitlearn, SiKeras,
  SiReact, SiNextdotjs, SiFastapi, SiFlask, SiNodedotjs,
  SiAngular, SiTailwindcss, SiLangchain, SiJest,
  SiMysql, SiPostgresql, SiMongodb, SiSupabase, SiSqlite,
  SiSnowflake, SiAmazondynamodb,
  SiAmazonwebservices, SiGooglecloud, SiDocker, SiKubernetes,
  SiTerraform, SiJenkins, SiGitlab, SiApachespark,
  SiNvidia, SiGit, SiPostman, SiPrometheus, SiGrafana,
  SiPandas, SiNumpy
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import {
  FaCode, FaJava, FaCloud, FaDatabase, FaBrain, FaWrench, FaGlobe,
  FaGears, FaNetworkWired, FaLock, FaMagnifyingGlass, FaPlug,
  FaDiagramProject, FaSitemap, FaBolt, FaTable, FaArrowsSpin,
  FaCircleCheck, FaPeopleGroup, FaMicrochip
} from 'react-icons/fa6';

// Brand-colored, per-skill icon definitions.
// `icon` is a react-icons component; `color` is the brand color used on hover.
export const skillsData = {
  languages: [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "SQL", icon: FaTable, color: "#06B6D4" },
    { name: "Java", icon: FaJava, color: "#E76F00" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "C", icon: SiC, color: "#A8B9CC" },
  ],
  web: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
    { name: "REST APIs", icon: FaPlug, color: "#06B6D4" },
    { name: "Microservices", icon: FaSitemap, color: "#06B6D4" },
    { name: "OAuth", icon: FaLock, color: "#10B981" },
    { name: "WebSockets", icon: FaNetworkWired, color: "#A78BFA" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Jest", icon: SiJest, color: "#C21325" },
  ],
  cloud: [
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "AWS Glue", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "AWS Lambda", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "AWS CDK", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "Azure", icon: VscAzure, color: "#0078D4" },
    { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    { name: "ETL Pipelines", icon: FaArrowsSpin, color: "#06B6D4" },
    { name: "Data Integration", icon: FaDiagramProject, color: "#A78BFA" },
    { name: "Data Validation", icon: FaCircleCheck, color: "#10B981" },
    { name: "PySpark", icon: SiApachespark, color: "#E25A1C" },
  ],
  databases: [
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MySQL", icon: SiMysql, color: "#00758F" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
    { name: "DynamoDB", icon: SiAmazondynamodb, color: "#4053D6" },
    { name: "SQLite", icon: SiSqlite, color: "#003B57" },
    { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
    { name: "pgvector", icon: FaDatabase, color: "#A78BFA" },
  ],
  devops: [
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
    { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
    { name: "GitLab CI", icon: SiGitlab, color: "#FC6D26" },
    { name: "CI/CD", icon: FaGears, color: "#06B6D4" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
    { name: "Grafana", icon: SiGrafana, color: "#F46800" },
    { name: "Agile/Scrum", icon: FaPeopleGroup, color: "#10B981" },
  ],
  aiMl: [
    { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "Keras", icon: SiKeras, color: "#D00000" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
    { name: "LLM Integration", icon: FaBrain, color: "#A78BFA" },
    { name: "RAG Systems", icon: FaDiagramProject, color: "#06B6D4" },
    { name: "FAISS", icon: FaMagnifyingGlass, color: "#EC4899" },
    { name: "Nvidia Triton", icon: SiNvidia, color: "#76B900" },
    { name: "TensorRT", icon: SiNvidia, color: "#76B900" },
    { name: "OpenVINO", icon: FaMicrochip, color: "#0068B5" },
    { name: "Pandas", icon: SiPandas, color: "#150458" },
    { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
  ],
  distributed: [
    { name: "Distributed Systems", icon: FaSitemap, color: "#A78BFA" },
    { name: "Low-latency Systems", icon: FaBolt, color: "#FBBF24" },
    { name: "Serverless Architecture", icon: FaCloud, color: "#06B6D4" },
    { name: "Vector Embeddings", icon: FaMagnifyingGlass, color: "#EC4899" },
    { name: "Prompt Engineering", icon: FaCode, color: "#F59E0B" },
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
  web: { name: "Web & Backend", icon: FaGlobe },
  cloud: { name: "Cloud & Data Engineering", icon: FaCloud },
  databases: { name: "Databases", icon: FaDatabase },
  devops: { name: "DevOps & Tools", icon: FaWrench },
  aiMl: { name: "AI/ML", icon: FaBrain },
  distributed: { name: "Distributed & Systems Design", icon: FaSitemap },
};

// Plain-text icons used by the terminal (no React).
export const skillCategoryEmojis = {
  languages: "[LANG]",
  web: "[WEB]",
  cloud: "[CLOUD]",
  databases: "[DB]",
  devops: "[OPS]",
  aiMl: "[AI]",
  distributed: "[DIST]",
};
