import type { Dictionary } from "./types";

/**
 * English content.
 *
 * Everything between [square brackets] is a placeholder — replace it with
 * your own words. Keep the structure (arrays, keys) exactly as it is.
 */
export const en: Dictionary = {
  meta: {
    title: "Behnaz Didehvar — Web Designer & University Lecturer",
    description:
      "Personal site of Behnaz Didehvar, a web designer and programmer in Ardabil, Iran, with twelve years of university teaching in computer engineering.",
  },

  nav: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
    { id: "samples", label: "Samples" },
    { id: "contact-methods", label: "Contact methods" },
  ],

  hero: {
    status: "Open to new work",
    greeting: "Hi, I'm",
    name: "Behnaz Didehvar",
    role: "Web designer & programmer · University lecturer",
    tagline:
      "I taught computer engineering at universities across Ardabil for twelve years. For the past three years I have worked for myself, designing all kinds of websites — e-commerce, educational, sports and more.",
    location: "Ardabil, Iran",
    ctaPrimary: "Get in touch",
    ctaSecondary: "Download CV",
    ctaSecondaryHref: "/en/cv",
  },

  about: {
    label: "About",
    heading: "From the university and the classroom to design and programming",
    body: [
      "I hold an M.Sc. in Computer Engineering and spent twelve years teaching at universities in Ardabil — lecturing, supervising student projects, and explaining difficult ideas until they finally clicked.",
      "Five years ago I became a student again. I completed a web design programme and moved from theory to building: layout, responsive design, front-end development. I now design and build websites of every kind.",
      "Teaching taught me to explain things plainly, and that is how I build too: clear structure, nothing unnecessary, and a page that works on a phone before it looks good on a desktop.",
      "Outside work, most of my free time goes to sport and music. The same discipline carries into my work — once I start a project, I see it through to the end.",
    ],
    facts: [
      { label: "Based in", value: "Ardabil, Iran" },
      { label: "Education", value: "M.Sc. Computer Engineering" },
      { label: "Teaching", value: "12 years · ~5,000 students" },
    ],
    interests: {
      label: "Interests",
      groups: [
        { title: "Sport", items: ["Swimming", "Cycling", "Fitness", "Badminton"] },
        { title: "Music", items: ["Piano"] },
      ],
    },
  },

  experience: {
    label: "Career",
    heading: "Work history and activities",
    intro:
      "Twelve years in the lecture hall, a two-year web design course and three years working independently.",
    items: [
      {
        role: "Web designer & programmer",
        org: "Self-employed",
        period: "3 years",
        location: "Ardabil, Iran",
        summary:
          "Designing and building websites for people and small businesses — from a single landing page to a complete site.",
        points: [
          "Built 5 practical, successful websites from first layout to launch",
          "Handling the whole process — design, build, domain and hosting — myself",
          "Focused on responsive layout and pages that stay fast on a phone.",
        ],
        tags: [],
      },
      {
        role: "University lecturer",
        org: "Universities in Ardabil",
        period: "12 years",
        location: "Ardabil, Iran",
        summary:
          "Twelve years teaching specialised computer engineering courses in lectures, labs and student projects.",
        points: [
          "Taught around 5,000 students at associate and bachelor's levels",
          "Supervised student projects from idea to defence.",
          "Designed course material and assessment for students.",
        ],
        tags: [],
      },
    ],
  },

  skills: {
    label: "Skills",
    heading: "Tools I work with",
    intro: "Tools I actually reach for, grouped by how I use them.",
    groups: [
      {
        title: "Web design",
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind", "Responsive layout"],
      },
      {
        title: "Tools",
        items: ["VS Code", "WordPress", "Joomla", "Git"],
      },
      {
        title: "AI",
        items: ["Working with a range of AI agents"],
      },
      {
        title: "Teaching",
        items: ["Curriculum design", "Lecturing", "Project supervision"],
      },
      {
        title: "Foundations",
        items: ["Computer engineering", "Data structures", "Algorithm design"],
      },
    ],
  },

  contact: {
    label: "Contact",
    heading: "Ready to work with you",
    body:
      "Ready to work with company and factory managers, doctors, engineers, and anyone who needs to present their work or products through technology and digital platforms.\nMy motto is building websites that are usable by everyone, whatever their level of education or technical knowledge, so that nobody gets stuck using them.",
    email: "behnazdidevar64@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "LinkedIn", href: "https://linkedin.com/in/" },
      { label: "X", href: "https://x.com/" },
    ],
  },

  samples: {
    label: "Samples",
    heading: "A few of the sites I have worked on",
    intro: "",
    items: [],
    emptyState: "Work samples will appear here soon.",
  },

  contactMethods: {
    label: "Reach me",
    heading: "Ways to reach me",
    body:
      "The fastest way to reach me is email, and I reply within a few hours.\nYou can also message me on Telegram, WhatsApp and Instagram.\nMy fellow Iranians inside Iran can reach me on Rubika as well.",
    links: [
      { label: "Telegram", href: "https://t.me/" },
      { label: "WhatsApp", href: "https://wa.me/" },
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "Rubika", href: "https://rubika.ir/" },
    ],
  },

  footer: {
    note: "Designed and built by Behnaz Didehvar.",
    rights: "© 2026",
    backToTop: "Back to top",
  },
};
