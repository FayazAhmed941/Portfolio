
import { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon: ReactNode;
  level: number; // Percentage from 0 to 100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}
