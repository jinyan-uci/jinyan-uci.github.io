export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: string;
  doi?: string;
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface TeachingRole {
  id: string;
  course: string;
  role: string;
  period: string;
  description: string;
}

export type Theme = 'light' | 'dark';
