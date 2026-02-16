export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: 'Award' | 'Publication' | 'Talk' | 'General';
  description: string;
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'Journal' | 'Conference' | 'Preprint';
  doi?: string;
  pdf?: string;
  arxiv?: string;
  bibtex?: string;
  tags: string[];
}

export interface Talk {
  id: string;
  title: string;
  event: string;
  location: string;
  date: string;
  type: 'Invited' | 'Conference' | 'Seminar';
  slides?: string;
  video?: string;
}

export type Theme = 'light' | 'dark';