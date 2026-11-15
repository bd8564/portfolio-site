export type NavItem = {
  /** Anchor id of the section on the page. */
  id: string;
  label: string;
};

export type Fact = {
  label: string;
  value: string;
};

export type ExperienceItem = {
  role: string;
  org: string;
  /** Duration, pre-formatted for each language, e.g. "3 years" / "۳ سال". */
  period: string;
  location: string;
  summary: string;
  points: string[];
  tags: string[];
};

export type SampleItem = {
  title: string;
  kind: string;
  description: string;
  href?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  href: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  hero: {
    status: string;
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    location: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
  };
  about: {
    label: string;
    heading: string;
    body: string[];
    facts: Fact[];
    interests: {
      label: string;
      groups: {
        title: string;
        items: string[];
      }[];
    };
  };
  experience: {
    label: string;
    heading: string;
    intro: string;
    items: ExperienceItem[];
  };
  skills: {
    label: string;
    heading: string;
    intro: string;
    groups: SkillGroup[];
  };
  contact: {
    label: string;
    heading: string;
    body: string;
    email: string;
    links: ContactLink[];
  };
  samples: {
    label: string;
    heading: string;
    intro: string;
    items: SampleItem[];
    emptyState: string;
  };
  contactMethods: {
    label: string;
    heading: string;
    body: string;
    links: ContactLink[];
  };
  footer: {
    note: string;
    rights: string;
    backToTop: string;
  };
};
