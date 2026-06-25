export const timelineData = [
  {
    date: "May 2026 - Present",
    title: "Software Development Engineer",
    subtitle: "PASAL Inc., Remote",
    description: "Architected and deployed a scalable, distributed, cloud-native AI outbound email pipeline using Next.js 15, Inngest durable functions, and LLMs (Gemini & GPT-4o-mini), automating delivery of ~500 highly personalized emails/month on a ~$85/month budget. Engineered the database layer on Neon Postgres + Drizzle ORM with a non-bypassable pre-send compliance framework ensuring 100% adherence to CAN-SPAM and AI-content regulations.",
    type: "work",
  },
  {
    date: "January 2026",
    title: "Project Phoenix",
    subtitle: "San Jose, CA",
    description: "A crash-resilient, AI-driven autonomous SRE system that decomposes long-running goals into MongoDB-backed workflows and reliably resumes multi-agent execution across failures, restarts, and system deaths.",
    type: "project",
    github: "https://github.com/Mandar77/pheonix.git",
    tech: ["Python", "MongoDB", "LLM Integration", "Multi-Agent", "Docker"]
  },
  {
    date: "December 2025",
    title: "Chess Game",
    subtitle: "San Jose, CA",
    description: "A full-featured chess application with real-time multiplayer support, computer opponents, and AI-powered game analysis using Google's Gemini API.",
    type: "project",
    github: "https://github.com/Mandar77/chess",
    tech: ["React", "Node.js", "WebSockets", "Gemini API"]
  },
  {
    date: "December 2025",
    title: "AI Demo Builder",
    subtitle: "Cloud Computing Project, San Jose, CA",
    description: "Cloud-native, serverless AI platform for automated demo generation from GitHub repositories. Architected a distributed serverless platform using 18 event-driven AWS Lambda microservices with S3 and DynamoDB, provisioned end-to-end via AWS CDK. Enhanced robustness with validation, failure isolation, and cleanup services, verified through rigorous end-to-end testing.",
    type: "project",
    github: "https://github.com/Mandar77/AI-Demo-Builder",
    tech: ["AWS Lambda", "AWS CDK", "S3", "DynamoDB", "Serverless"]
  },
  {
    date: "Sept 2025 - Dec 2025",
    title: "Software Engineer, SurfSense (NU ChatBot Project)",
    subtitle: "San Jose, CA",
    description: "Productionized an open-source RAG platform with RBAC, domain-restricted authentication, and privacy-aware retrieval controls on Azure (App Services, PostgreSQL, AD), supporting secure multi-tenant access for 1,000+ institutional users. Reduced end-to-end query latency from 320ms to <180ms via a hybrid RAG pipeline using pgvector, rerankers, intelligent caching, and async FastAPI under concurrent load. Improved frontend performance by 40% with a modular React + Zustand architecture and multi-session chat memory visualization.",
    type: "work",
    publication: "https://www.researchgate.net/publication/398984671_NU_Chatbot_Adapting_Open-Source_RAG_Systems_for_Private_University_Deployment"
  },
  {
    date: "June 2025",
    title: "Burnout Prevention Dashboard & AI Chat Bot",
    subtitle: "San Jose, CA",
    description: "Full-stack wellness app with AI assistant. Integrated 5+ health APIs, Zustand state management, and retry logic. Achieved <200ms AI chat response and reduced failed API calls from 15% to 9%.",
    type: "project",
    github: "https://github.com/Mandar77/hackathon",
    tech: ["React", "Node.js", "Zustand", "REST APIs", "LLM Integration"]
  },
  {
    date: "April 2025",
    title: "Algorithm RAG System",
    subtitle: "San Jose, CA",
    description: "Retrieval-Augmented Generation system for algorithm recommendations. Achieved 95% accuracy with FAISS semantic search across 500+ algorithm chunks at sub-100ms latency. Built a hybrid retrieval FastAPI service combining vector similarity and keyword matching across 10 categories, reducing search complexity by 40% and serving 100+ concurrent users.",
    type: "project",
    github: "https://github.com/Aarzoo-Bansal/algorithm_rag_system",
    tech: ["Python", "FastAPI", "FAISS", "RAG Systems", "Vector Embeddings"]
  },
  {
    date: "Sept 2024 - April 2025",
    title: "Graduate Teaching Assistant",
    subtitle: "Khoury College of Computer Science, Northeastern University",
    description: "Led a team of 3 TAs to support 40+ students in algorithm design and analysis (CS 5800 / CS 5008) through lab sessions, office hours, and programming guidance while collaborating with faculty on course materials.",
    type: "work",
  },
  {
    date: "Jan 2024 - Dec 2025",
    title: "Master of Science in Computer Science",
    subtitle: "Northeastern University, San Jose, CA",
    description: "GPA: 3.87/4.0. Courses: Pattern Recognition, Computer Vision, Natural Language Processing, Data Mining, Algorithms, Programming Design Paradigm.",
    type: "education",
  },
  {
    date: "Jan 2023 - Dec 2023",
    title: "Software Developer",
    subtitle: "Reticulo Sports Technology Pvt. Ltd., Pune, India",
    description: "Improved product categorization efficiency by 25% by classifying 12,000+ images into 12 categories with MobileNetV3, cutting manual verification time by 30%. Boosted GPU inference speed by 40% using Nvidia Triton and CUDA (15ms → 10ms, +20% throughput). Deployed optimized DL models on low-power mobile devices (memory -50%, model size 1.2GB → 600MB). Enhanced app scalability to support 50,000+ daily interactions while raising accuracy by 10% and cutting training time by 20%.",
    type: "work",
  },
  {
    date: "Aug 2019 - May 2023",
    title: "Bachelor of Technology in Information Technology",
    subtitle: "Vishwakarma Institute of Technology, Pune, India",
    description: "GPA: 8.47/10.0. Courses: Database Management Systems, Machine Learning, Deep Learning, Networking, Web Development, Cloud Computing, Image Processing, Network Security, Computer Architecture, Operating Systems, Data Communication and Networking.",
    type: "education",
  },
  {
    date: "2022",
    title: "Number Plate Recognition System",
    subtitle: "Published at IC-ICN 2022",
    description: "Used AWS, RTO APIs, OpenCV (Haar Cascade, EasyOCR), Apache, EC2",
    type: "project",
    publication: "https://www.researchgate.net/publication/384329752",
    tech: ["Python", "OpenCV", "AWS", "EasyOCR"]
  },
  {
    date: "2022",
    title: "KhetiKaksha (Farmer Hub)",
    subtitle: "Published at IC-ICN 2022",
    description: "Web app with Plant Disease Detection (ResNet9) and Crop Recommendation (SVM)",
    type: "project",
    publication: "https://www.researchgate.net/publication/384330843",
    tech: ["Python", "PyTorch", "Scikit-learn", "Flask"]
  },
  {
    date: "2024",
    title: "Multi Modal Dynamic Hand Gesture Recognition",
    subtitle: "3rd place at NU Student Research Showcase",
    description: "Achieved 97.25% validation accuracy with an ensemble of 34 binary classifiers using priority-based fusion. Processed a 119GB dataset at 25-30 FPS real-time with <40ms latency. Cut computational overhead by 60% via PCA-based feature extraction, maintaining a 2GB memory footprint while processing 1M+ multi-modal images across 35 gesture classes.",
    type: "project",
    publication: "https://www.researchgate.net/publication/387056779_Multi_Modal_Dynamic_Hand_Gesture_Recognition",
    github: "https://github.khoury.northeastern.edu/mandar07/CS5330_FA24_Group1_Project.git",
    tech: ["Python", "PyTorch", "Computer Vision", "Deep Learning"]
  },
  {
    date: "2024",
    title: "Personal Portfolio Website",
    subtitle: "React and Tailwind CSS",
    description: "Modern, responsive portfolio built with React and Tailwind CSS. Deployed on Vercel with custom domain support.",
    type: "project",
    github: "https://github.com/Mandar77/my-portfolio.git",
    tech: ["React", "Tailwind CSS", "JavaScript", "Vercel"]
  }
];
