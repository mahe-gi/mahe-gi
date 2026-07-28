export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectDecision {
  title: string;
  reason: string;
}

export interface ProjectArchitecture {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  authentication?: string[];
  deployment?: string[];
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  architecture: ProjectArchitecture;
  decisions: ProjectDecision[];
  challenges: string[];
  lessonsLearned: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  screenshots?: string[];
}
