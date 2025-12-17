import { Project, Experience, Skill, Education, Certification, PersonalInfo } from './types';

// Inlined data to prevent JSON module resolution issues in browser environments
const data = {
  "personalInfo": {
    "name": "Sachin Tambe",
    "title": "Agentic AI Engineer & Data Scientist",
    "tagline": "From Data Insights to Autonomous Intelligence.",
    "bio": "I am an Agentic AI Engineer building on a strong foundation in Data Science and Analytics. My journey started with interpreting data to drive business decisions, which naturally evolved into engineering autonomous AI systems that take action on that data. I am actively learning and implementing multi-agent workflows, fine-tuning LLMs, and developing intelligent applications that bridge the gap between traditional data analysis and agentic automation.",
    "email": "tambesachin347@gmail.com",
    "phone": "+91-9076398319",
    "resumeUrl": "/resume.pdf",
    "socials": {
      "github": "https://github.com/",
      "linkedin": "https://linkedin.com/in/",
      "kaggle": "https://kaggle.com/",
      "twitter": "https://twitter.com/",
      "medium": "https://medium.com/"
    }
  },
  "skills": [
    {
      "category": "Agentic AI & AI Developer",
      "items": ["LangChain", "LangGraph", "CrewAI", "AutoGen", "Phidata", "Agent Orchestration", "Tool Use/Function Calling"]
    },
    {
      "category": "Artificial Intelligence",
      "items": ["OpenAI API", "Hugging Face", "Fine-tuning (LoRA/QLoRA)", "RAG Architecture", "Vector Databases (Pinecone, Chroma)", "Ollama"]
    },
    {
      "category": "Data Scientist & Analyst",
      "items": ["Python (Pandas, NumPy)", "Scikit-learn", "Statistical Modeling", "A/B Testing", "EDA", "Data Visualization"]
    },
    {
      "category": "Data Engineering & Tools",
      "items": ["SQL (PostgreSQL)", "AWS Services", "Docker", "Apache Airflow", "Power BI", "Git/GitHub"]
    }
  ],
  "experience": [
    {
      "id": "exp_current",
      "role": "Agentic AI Engineer",
      "company": "Tech Innovations",
      "period": "Jun 2025 – Present",
      "description": "Designing and deploying autonomous agentic workflows to automate complex business processes.",
      "achievements": [
        "Architected a multi-agent system using CrewAI to automate market research, reducing manual data gathering time by 85%.",
        "Developed a production-grade RAG pipeline using LangGraph that processes technical documentation to answer engineering queries with 98% retrieval accuracy.",
        "Integrated function-calling capabilities allowing AI agents to directly interact with SQL databases and generate real-time reports."
      ]
    },
    {
      "id": "exp_prev",
      "role": "Data Scientist & Analyst",
      "company": "Art in Art",
      "period": "Jan 2024 – Jun 2025",
      "description": "Focused on predictive modeling and automated reporting systems.",
      "achievements": [
        "Built an automated ETL pipeline using Python & SQL, cutting manual reporting time by 70% (15hrs/week saved).",
        "Developed interactive Power BI dashboards monitoring production KPIs, leading to a 12% reduction in inventory waste.",
        "Implemented a sales forecasting model (XGBoost) achieving 95% accuracy, directly aiding supply chain planning."
      ]
    }
  ],
  "projects": [
    {
      "id": "p1",
      "title": "Autonomous Legal Research Agent",
      "description": "A multi-agent system capable of analyzing legal contracts. One agent retrieves clauses, another checks for compliance against a vector database of laws, and a third drafts a summary report. Built with LangGraph.",
      "tags": ["Agentic AI", "LangGraph", "Vector DB", "Python"],
      "image": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1000",
      "github": "#",
      "link": "#"
    },
    {
      "id": "p2",
      "title": "Enterprise RAG Document Assistant",
      "description": "A production-ready RAG system ingesting thousands of PDF technical manuals. Uses hybrid search (Keyword + Semantic) and citation-backed answers to ensure reliability.",
      "tags": ["LangChain", "OpenAI", "Pinecone", "React"],
      "image": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
      "github": "#",
      "link": "#"
    },
    {
      "id": "p3",
      "title": "Predictive Maintenance IoT Dashboard",
      "description": "End-to-end analytics platform. Ingests real-time sensor data via Kafka, processes with Spark, and uses LSTM networks to predict machinery failure 48 hours in advance.",
      "tags": ["IoT", "LSTM", "Streamlit", "AWS"],
      "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
      "github": "#"
    },
    {
      "id": "p4",
      "title": "Customer Churn Prediction Pipeline",
      "description": "Automated ML pipeline with Airflow. Features automated data cleaning, feature engineering, and model retraining. Pushes high-risk segments to CRM.",
      "tags": ["Scikit-learn", "Airflow", "MLflow", "SQL"],
      "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      "github": "#"
    }
  ],
  "education": [
    {
      "id": "edu1",
      "degree": "B.Sc. in Information Technology",
      "institution": "Somaiya Vidyavihar University, Mumbai",
      "period": "Graduating 2025",
      "description": "Focus on Data Structures, Algorithms, and Database Management Systems."
    }
  ],
  "certifications": [
    {
      "id": "c1",
      "name": "Python for Data Science, AI & Development",
      "issuer": "IBM, Coursera"
    },
    {
      "id": "c2",
      "name": "Databases and SQL for Data Science with Python",
      "issuer": "IBM, Coursera"
    },
    {
      "id": "c3",
      "name": "Foundations of Data Science",
      "issuer": "IBM, Coursera"
    },
    {
      "id": "c4",
      "name": "Data Engineering Foundations",
      "issuer": "IBM, Coursera"
    }
  ]
};

export const PERSONAL_INFO: PersonalInfo = data.personalInfo;
export const SKILLS: Skill[] = data.skills;
export const EXPERIENCE: Experience[] = data.experience;
export const PROJECTS: Project[] = data.projects;
export const EDUCATION: Education[] = data.education;
export const CERTIFICATIONS: Certification[] = data.certifications;

export const SYSTEM_INSTRUCTION = `You are the AI assistant for ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.title}. 
You are here to help recruiters and visitors learn more about Sachin's background.
Use the following context to answer questions:

Bio: ${PERSONAL_INFO.bio}

Skills:
${SKILLS.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}). ${e.description}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tags: ${p.tags.join(', ')})`).join('\n')}

Education:
${EDUCATION.map(e => `- ${e.degree} at ${e.institution} (${e.period})`).join('\n')}

Certifications:
${CERTIFICATIONS.map(c => `- ${c.name} by ${c.issuer}`).join('\n')}

Contact Info:
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.socials.linkedin}
GitHub: ${PERSONAL_INFO.socials.github}

Keep your responses professional, concise, and friendly. If a user asks something outside this context, politely guide them back to professional topics or say you don't know.`;