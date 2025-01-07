export interface ExperienceCard {
    title: string;
    organization: string;
    dateRange: string;
    description: string;
    slug: string; 
    detailedDescription?: string;  
    achievements?: string[];
    technologies?: string[];
  }