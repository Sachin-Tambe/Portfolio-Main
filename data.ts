import { Project, Experience, Skill, Education, Certification, PersonalInfo, CaseStudy } from './types';

const data = {
  "personalInfo": {
    "name": "Sachin Tambe",
    "title": "Associate Agentic AI Engineer & Data Science Intern",
    "tagline": "From Data Insights to Autonomous Intelligence.",
    "bio": "I am an Associate Agentic AI Engineer building on a strong foundation in Data Science and Analytics. My journey started with interpreting data to drive business decisions, which naturally evolved into engineering autonomous AI systems that take action on that data. I am actively implementing multi-agent workflows, fine-tuning LLMs, and developing intelligent applications that bridge the gap between traditional data analysis and agentic automation.",
    "email": "tambesachin347@gmail.com",
    "phone": "+91-9076398319",
    "resumeUrl": "https://drive.google.com/file/d/1Zsh439Ug81BvNpp_ZR_nbg4Biq7D4_nB/view?usp=sharing",
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
      "items": ["LangChain", "LangGraph", "CrewAI", "Voice AI", "Agent Orchestration", "Tool Use/Function Calling", "AutoGPT"]
    },
    {
      "category": "Artificial Intelligence",
      "items": ["OpenAI API", "Google AI Studio", "Hugging Face", "Fine-tuning (LoRA/QLoRA)", "RAG Architecture", "Vector Databases (Pinecone, Chroma)", "Ollama"]
    },
    {
      "category": "Cloud & Data Engineering",
      "items": ["GCP (Vertex AI, BigQuery)", "AWS Services", "SQL (PostgreSQL)", "Docker", "Apache Airflow", "VS Code", "Git/GitHub"]
    },
    {
      "category": "Data Science & Analytics",
      "items": ["Python (Pandas, NumPy)", "Scikit-learn", "Statistical Modeling", "A/B Testing", "EDA", "Data Visualization (Power BI)"]
    },
    {
      "category": "Low Code / No Code",
      "items": ["n8n", "Zapier", "Make.com", "Voiceflow", "Stack AI", "Retool", "Bubble", "Glide"]
    }
  ],
  "experience": [
    {
      "id": "exp_current",
      "role": "Data Analyst Executive",
      "company": "Art in Art - (A Gandhi Group Company) |",
      "period": "Jun 2025 – Present",
      "description": "Focused on predictive modeling and automated reporting systems for manufacturing clients.",
      "achievements": [
        "Built an automated ETL pipeline using Python & SQL, cutting manual reporting time by **70%** (**15hrs/week saved**).",
        "Developed interactive Power BI dashboards monitoring production KPIs, leading to a **12% reduction** in inventory waste.",
        "Implemented a sales forecasting model (XGBoost) achieving **95% accuracy**, directly aiding supply chain planning."
      ]
    }
   ,
    {
      "id": "exp_prev",
      "role": "Applied AI Intern – Agnirva AI - Internship",
      "company": "Agnirva.com Space Community",
      "period": "Feb 2025 – Mar 2025",
      "description": "Explored AI tools like ChatGPT & Gemini for real-world use cases, built ML pipelines",
      "achievements": [
       "Explored AI tools like ChatGPT & Gemini for real-world use cases, built ML pipelines" , 
        "Create a Awesome Projects Using Vibe Coding " 
      ]
    }
    ,
      {
      "id": "exp_prev",
      "role": " AI: Transformative Learning with TechSaksham",
      "company": "Edunet Foundation",
      "period": "Feb 2025 – Mar 2025",
      "description": "Developed and deployed AI models using Python and Azure through the TechSaksham initiative, culminating in a 4-week virtual internship focused on solving real-world industrial problems.",
      "achievements": [
"Successfully finished a 4-week industry-aligned virtual internship (in collaboration with AICTE), working on real-world problem prototypes and industrial use cases."
      ]
    }
  ],
  "projects": [
    {
      "id": "p1",
      "title": "Autonomous Legal Research Agent",
      "description": "A multi-agent system capable of analyzing legal contracts. One agent retrieves clauses, another checks for compliance, and a third drafts summary reports.",
      "tags": ["Agentic AI", "LangGraph", "Vector DB", "Python"],
      "image": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1000",
      "github": "#",
      "link": "#",
      "caseStudyId": "cs1"
    },
    {
      "id": "p2",
      "title": "Enterprise RAG Document Assistant",
      "description": "A production-ready RAG system ingesting technical manuals with hybrid search and citation-backed answers.",
      "tags": ["LangChain", "OpenAI", "Pinecone", "Python"],
      "image": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
      "github": "#",
      "link": "#",
      "caseStudyId": "cs2"
    },
    {
      "id": "p3",
      "title": "Predictive Maintenance IoT Dashboard",
      "description": "End-to-end analytics platform using LSTM networks to predict machinery failure 48 hours in advance.",
      "tags": ["IoT", "LSTM", "Streamlit", "AWS"],
      "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
      "github": "#",
      "link": "#"
    },
    {
      "id": "p4",
      "title": "Customer Churn Prediction Pipeline",
      "description": "Automated ML pipeline with Airflow, features automated cleaning and model retraining.",
      "tags": ["Scikit-learn", "Airflow", "MLflow", "SQL"],
      "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      "github": "#",
      "link": "#"
    }
  ],
  "caseStudies": [
    {
      "id": "cs1",
      "title": "The Future of Legal Audits",
      "subtitle": "How Agentic AI reduced manual review time by 92%",
      "challenge": "Legal teams at a mid-sized firm were spending hundreds of hours manually checking thousands of contracts for GDPR compliance. Human error was high, and the process was not scalable.",
      "solution": "Built a 3-agent autonomous team using LangGraph. The 'Retriever' agent parsed PDFs into vector chunks. The 'Auditor' agent checked chunks against a predefined legal checklist. The 'Summarizer' compiled findings into a final PDF report.",
      "results": [
        "Manual effort reduced from 40 hours per batch to **3.2 hours**.",
        "**Zero missed** high-risk clauses in initial benchmark tests.",
        "System handles up to **500 pages** of text simultaneously."
      ],
      "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
      "github": "#",
      "link": "#"
    },
    {
      "id": "cs2",
      "title": "Zero-Hallucination RAG",
      "subtitle": "Building trust in enterprise AI documentation",
      "challenge": "A manufacturing client needed an AI that could answer technical queries from 10,000+ internal documents without ever making up facts, as incorrect instructions could lead to machine damage.",
      "solution": "Implemented a 'Self-Correcting RAG' architecture. If the retrieved context is insufficient, the model refuses to answer or triggers a broader search. Added metadata filtering to ensure only relevant manual versions are used.",
      "results": [
        "**98% accuracy** in technical parameter retrieval.",
        "Full **citation mapping** for every claim made by the assistant.",
        "Reduction in technical support tickets by **35%** within 3 months."
      ],
      "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      "github": "#",
      "link": "#"
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
export const CASE_STUDIES: CaseStudy[] = data.caseStudies;
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
