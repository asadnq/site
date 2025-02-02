
export enum TechStackProficiency {
  hobby = 'hobby',
  professional = 'professional',
}

export enum TechStackCategory {
  frontend = 'frontend',
  backend = 'backend',
  devops = 'devops',
  spec = 'spec',
  misc = 'misc',
  language = 'language',
}

export interface TechStackItem {
  name: string;
  logoId?: string;
  logo: string;
  url?: string;
  projectIds: string[];
  proficiency: TechStackProficiency;
  categories: TechStackCategory[];
}

