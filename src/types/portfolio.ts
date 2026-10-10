export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  monogram: string;
  title: string;
  headline: string[];
  summary: string;
  email: string;
  phone?: string;
  phoneUrl?: string;
  location: string;
  address?: string;
  githubUrl: string;
  linkedinUrl: string;
  profileImage: string;
  cvUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  type: "work" | "internship" | "organization" | "academic";
}

export interface Project {
  id: string;
  title: string;
  category: string;
  organization: string;
  description: string;
  features: string[];
  repositoryUrl: string;
  liveDemoUrl: string;
  imageUrl: string;
}

export interface Research {
  id: string;
  title: string;
  target: string;
  field: string;
  focus: string[];
  description: string;
  year: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa?: string;
  gpaScale?: string;
  predicate?: string;
  description?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  validity?: string;
  url?: string;
  type: "certification" | "training";
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  year: string;
  context: string;
  rank: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
