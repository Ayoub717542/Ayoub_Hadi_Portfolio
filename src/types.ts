export interface Project {
  id: string;
  name: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend API' | 'Logistics';
  isFeatured?: boolean;
  context: string;
  problem: string;
  solution: string;
  targetAudience: string;
  features: string[];
  technologies: { name: string; role: string }[];
  personalContribution: string[];
  challengesAndSolutions: { challenge: string; solution: string }[];
  resultsAndMetrics: string[];
  limitationsAndFutureWork: string[];
  githubUrl: string;
  demoUrl?: string;
  readmeUrl?: string;
  linkedinPostUrl?: string;
  realizedDate: string;
  isTeamProject: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  keyAchievments: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface AuditItem {
  id: string;
  field: string;
  source: string;
  status: 'available' | 'incomplete' | 'to_verify' | 'missing' | 'validated';
  inconsistencyNote?: string;
  actionRequired: string;
}

export interface CandidateProfile {
  fullName: string;
  desiredTitle: string;
  level: string;
  soughtOpportunity: string;
  location: string;
  mobilityZone: string;
  availability: string;
  shortBio: string;
  longBio: string;
  emails: { primary: string; secondary: string };
  phone: string;
  cvUrl: string;
  cvLastUpdated: string;
  linkedInUrl: string;
  gitHubUrl: string;
  generalDemoUrl: string;
  languages: { language: string; proficiency: string }[];
}
