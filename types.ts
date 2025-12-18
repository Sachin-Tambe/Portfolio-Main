export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
  caseStudyId?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  link?: string;
}

export interface Socials {
  github: string;
  linkedin: string;
  kaggle: string;
  twitter?: string;
  medium?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  resumeUrl: string;
  socials: Socials;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isStreaming?: boolean;
}