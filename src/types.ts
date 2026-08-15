export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  locationType: 'On-site' | 'Remote' | 'Hybrid';
  period: string;
  duration?: string;
  isCurrent: boolean;
  isLeadRole?: boolean;
  description: string;
  bulletPoints: string[];
  skills: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: string[];
  featuredSkills?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  association?: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  degree: string;
  period: string;
  skills: string[];
  details?: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  levelPercent: number;
}

export interface ResumeData {
  name: string;
  title: string;
  headline: string;
  location: string;
  email: string;
  linkedinUrl: string;
  linkedinDisplay: string;
  summary: string;
  experience: ExperienceItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  education: EducationItem[];
  languages: LanguageItem[];
}
