export const LINKS = {
  github: "https://github.com/JeffZl",
  linkedin: "https://www.linkedin.com/in/jeffly-jeffly/",
  email: "mailto:jeffly291@gmail.com",
  emailText: "jeffly291@gmail.com",
  cv: "mailto:jeffly291@gmail.com?subject=CV%20request",
  cvEn: "mailto:jeffly291@gmail.com?subject=CV%20request%20(English)",
  cvId: "mailto:jeffly291@gmail.com?subject=CV%20request%20(Indonesian)",
};

export const NAV = [
  ["Home", "#top"],
  ["Projects", "#screens"],
  ["Skills", "#highlights"],
  ["Background", "#get"],
  ["Contact", "#end"],
] as const;

/** Sections shown on the scroll ruler (ids must exist on the page). */
export const SECTIONS = [
  { label: "Portfolio", id: "top" },
  { label: "About", id: "highlights" },
  { label: "Projects", id: "screens" },
  { label: "Background", id: "get" },
  { label: "More work", id: "family" },
  { label: "Contact", id: "end" },
];

export const SKILLS = [
  { title: "Web development", body: "Next.js, React and TypeScript. Built Cirqulate, a full-stack social platform with auth, posts and real-time messaging." },
  { title: "Mobile apps", body: "Flutter and Dart with a Node.js backend. WanderWhale pulls live hotel and flight data from the Amadeus API." },
  { title: "Backend & data", body: "Supabase, PostgreSQL, MongoDB and SQL. REST APIs, authentication and image storage." },
  { title: "AI & computer vision", body: "PyTorch, TensorFlow, NumPy and local LLMs. TensorFlow deep learning bootcamp (Udemy, 2026) and a co-authored paper at 83.3% test accuracy." },
  { title: "Linux & infrastructure", body: "Red Hat Certified System Administrator (RHCSA). Docker, plus Prometheus and Grafana monitoring on a restaurant POS." },
  { title: "Teamwork", body: "Built Taxelling, WanderWhale and Cirqulate in teams, using Git and GitHub." },
];

export const PROJECTS = [
  {
    caption: "Taxelling — PPh 21 payroll tax calculator",
    body: "A web app that automates monthly income tax (PPh 21) calculation under PP 58/2023 (TER categories A, B, C), including December reconciliation. Exports PDF tax receipts and Coretax/DJP-ready XML, and runs calculations in the browser for instant results.",
    tags: ["Next.js", "TypeScript", "Supabase", "Zustand", "React-PDF", "Tailwind"],
    art: "linear-gradient(135deg,#1c3a73,#d8b46a 60%,#4a2a24)",
  },
  {
    caption: "WanderWhale — travel planning app",
    body: "A Flutter app for trip planning and booking, with live hotel and flight availability from the Amadeus API, a simulated payment flow, and a Node.js/Express backend with Firebase Auth and Firestore.",
    tags: ["Flutter", "Dart", "Node.js", "Firebase", "Amadeus API"],
    art: "radial-gradient(circle at 60% 40%,#2e8bff,#07090f 60%)",
  },
  {
    caption: "Cirqulate — X (Twitter) clone",
    body: "A full-stack social network with authentication, profiles, posts, quotes, trending topics, real-time messaging and notifications, in dark and light themes.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Cloudinary"],
    art: "linear-gradient(135deg,#2b2b36,#6a7aa8)",
  },
];

export const BACKGROUND = [
  {
    label: "Education", icon: "🎓", title: "Education",
    lines: ["S1 Computer Science, Universitas Tarumanagara, 2024 – 2028", "SMA Westin School, 2021 – 2024"],
    cta: { text: "View LinkedIn", href: LINKS.linkedin, external: true },
  },
  {
    label: "AI certificates", icon: "🧠", title: "AI & ML", strong: true,
    lines: ["TensorFlow for Deep Learning Bootcamp, Udemy, 2026", "Azure AI Fundamentals (AI-900), GreatNusa, 2026."],
    cta: { text: "View on LinkedIn", href: LINKS.linkedin, external: true },
  },
  {
    label: "Systems certificate", icon: "🐧", title: "Linux",
    lines: ["Red Hat Certified System Administrator (RHCSA), Red Hat, 2025", "Docker, Prometheus and Grafana in practice on a restaurant POS."],
    cta: { text: "See the POS", href: "#family", external: false },
  },
];

export const STACK = `languages   python typescript c++ sql
frontend    next.js react flutter
backend     supabase mongodb node.js
ai          pytorch tensorflow opencv
infra       linux docker git prometheus grafana
spoken      english indonesian chinese`;

export const MORE = [
  { n: "04", tag: "Research", icon: "🧠", color: "#14b8a6", art: "linear-gradient(135deg,#052e2b,#2dd4bf)", title: "Avian Species Classifier", body: "Co-authored computer vision paper using Bisection Otsu segmentation and SVM. Cuts threshold search from O(L) to O(log L), reaching 83.3% test accuracy and 0.832 macro F1.", cta: "Read more", href: "#" },
  { n: "05", tag: "Point of sale", icon: "🧾", color: "#e5533d", art: "linear-gradient(135deg,#4a1d6e,#e0457b)", title: "Restaurant POS", body: "Built a point-of-sale system for a restaurant that made day-to-day operations smoother, run with Docker and monitored with Prometheus and Grafana. Client details kept private.", cta: "Details on request", href: "#" },
  { n: "06", tag: "GitHub", icon: "💻", color: "#8b5cf6", art: "linear-gradient(135deg,#1e1b4b,#8b5cf6)", title: "More on GitHub", body: "Other experiments, coursework and repositories.", cta: "Open GitHub", href: LINKS.github },
];

export const FOOTER = [
  { title: "Navigate", links: [["Home", "#top"], ["Skills", "#highlights"], ["Projects", "#screens"], ["Background", "#get"]] },
  { title: "Projects", links: [["Taxelling", "#screens"], ["WanderWhale", "#screens"], ["Cirqulate", "#screens"]] },
  { title: "More", links: [["Research", "#family"], ["Point of sale", "#family"], ["Certificates", "#get"]] },
  { title: "Social", links: [["GitHub", LINKS.github], ["LinkedIn", LINKS.linkedin], ["Email", LINKS.email]] },
];
