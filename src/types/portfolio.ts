export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  university: string;
  year: string;
  cgpa: string;
}

export interface Certification {
  name: string;
  provider: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    description: string;
    summary: string;
    status: string;
    resumeUrl: string;
  };
  experience: Experience[];
  skills: SkillCategory[];
  education: Education[];
  certifications: Certification[];
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
}
