export type Link = {
  label: string;
  href: string;
};

export type Media = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
};

export type Project = {
  id: string;
  eyebrow: string;
  title: string;
  period: string;
  role: string;
  summary: string;
  overview: string[];
  media: Media[];
  metrics: string[];
  problem: string;
  contributions: string[];
  results: string[];
  stack: string[];
  links: Link[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  details: {
    title: string;
    description: string;
  }[];
  stack?: string[];
};

export type Activity = {
  title: string;
  period: string;
  description: string;
  details?: {
    period: string;
    title: string;
    description: string[];
  }[];
};

export type ArchiveProject = {
  title: string;
  period: string;
  description: string;
  tags: string[];
  links: Link[];
};

export type Certificate = {
  name: string;
  issuer: string;
  acquired: string;
  detail?: string;
};
