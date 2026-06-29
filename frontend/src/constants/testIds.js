// Centralised data-testid constants
export const HOME = {
  emergentLink: "home-emergent-link",
};

export const NAV = {
  root: "nav-root",
  logo: "nav-logo",
  link: (key) => `nav-link-${key}`,
  cta: "nav-contact-cta",
  menuToggle: "nav-menu-toggle",
};

export const HERO = {
  root: "hero-root",
  title: "hero-title",
  subtitle: "hero-subtitle",
  ctaProjects: "hero-cta-projects",
  ctaLetter: "hero-cta-letter",
  polaroid: (i) => `hero-polaroid-${i}`,
};

export const ABOUT = { root: "about-root", body: "about-body" };
export const EDUCATION = { root: "education-root", item: (i) => `education-item-${i}` };
export const PROJECTS = {
  root: "projects-root",
  card: (slug) => `project-card-${slug}`,
  open: (slug) => `project-open-${slug}`,
  behance: (slug) => `project-behance-${slug}`,
};
export const PROCESS = { root: "process-root", step: (k) => `process-step-${k}` };
export const HOBBIES = { root: "hobbies-root", item: (k) => `hobby-${k}` };
export const SKILLS = { root: "skills-root", chip: (k) => `skill-chip-${k}` };
export const FUNFACTS = { root: "funfacts-root", note: (k) => `funfact-${k}` };
export const CONTACT = {
  root: "contact-root",
  name: "contact-input-name",
  email: "contact-input-email",
  subject: "contact-input-subject",
  message: "contact-input-message",
  submit: "contact-submit",
  success: "contact-success",
  error: "contact-error",
  linkedin: "contact-linkedin",
  behance: "contact-behance",
  email_link: "contact-email-link",
  resume: "contact-resume",
};
export const CASE_STUDY = {
  root: "case-study-root",
  back: "case-study-back",
  behance: "case-study-behance",
};
