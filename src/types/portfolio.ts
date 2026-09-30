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
  summary: string;
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
  highlights: string[];
  stack?: string[];
};

export type Activity = {
  title: string;
  period: string;
  description: string;
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
