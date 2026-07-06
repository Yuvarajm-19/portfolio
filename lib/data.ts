export const profile = {
  name: "Yuvaraj M",
  photo: "/profile.png",
  role: "Full Stack & AI/ML Developer",
  status: "open_to_work",
  location: "Salem, India",
  education: "B.Tech — Artificial Intelligence & Data Science",
  bio: "Recent graduate who thrives at the intersection of backend architecture and intelligent data pipelines — building things that are fast, reliable, and built to scale. Currently shipping MERN projects with ML integrations, focused on clean APIs and production-ready code.",
  email: "yuvaraj79043@gmail.com",
  github: "https://github.com/Yuvarajm-19",
  linkedin: "https://www.linkedin.com/in/yuvaraj-m-2b311726a/",
  leetcode: "https://leetcode.com/u/yuvaraj79043/",
};

export const focusAreas = [
  "Building real-world MERN projects with ML integrations",
  "System design, clean APIs, and production-ready code",
  "Daily DSA practice — sharpening problem-solving one challenge at a time",
  "Looking to collaborate on meaningful open-source projects",
];

export const goals2026 = [
  { label: "Ship 3+ production-ready full-stack projects", done: true },
  { label: "Contribute to 5+ open-source repositories", done: false },
  {
    label: "Solve 300+ LeetCode problems (trees, graphs, DP)",
    done: false,
  },
  { label: "Deploy an end-to-end ML pipeline on cloud infrastructure", done: false },
  { label: "Land a Software Engineer / Full Stack / Backend role", done: false },
  { label: "Learn Docker, Kubernetes basics, and CI/CD workflows", done: false },
];

export type Project = {
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  bullets: string[];
  tech: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "OD Claimer System",
    emoji: "📋",
    tagline: "MERN Stack · JWT Auth · Role-Based Access",
    description:
      "A full-featured On-Duty request management platform built for academic institutions.",
    bullets: [
      "Dual-role auth (Student / Admin) with JWT",
      "Real-time request tracking & approval dashboard",
      "Notification system for status updates",
      "Fully responsive with clean admin analytics",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
  },
  {
    title: "AI Travel Itinerary Generator",
    emoji: "✈️",
    tagline: "MERN Stack · Gemini AI · OCR · Deployed on Vercel",
    description:
      "Upload flight, hotel, and train bookings — get a full AI-powered day-by-day itinerary instantly.",
    bullets: [
      "Gemini API extracts booking details from PDFs/images via Tesseract.js & pdf-parse",
      "Auto-generates itineraries with recommendations and packing lists",
      "One-click public share link per trip (no login required)",
      "Download itinerary as a file; JWT-secured user dashboard",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Gemini API", "OCR", "Vercel"],
    link: "https://github.com/Yuvarajm-19/travel-itinerary",
  },
  {
    title: "PredictiX",
    emoji: "🧬",
    tagline: "Full-Stack · ML Backend · Python · Health AI",
    description:
      "End-to-end medical prediction platform that uses trained ML models to analyze health reports and surface diagnostic insights.",
    bullets: [
      "Accepts medical reports as input for ML-driven analysis",
      "Python ML backend with trained prediction models",
      "React frontend with clean, intuitive UX",
      "REST API bridge between ML inference and the web layer",
    ],
    tech: ["Python", "React", "Node.js", "Flask", "Machine Learning", "REST API"],
    link: "https://github.com/Yuvarajm-19/PredictiX",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "C"],
  },
  {
    label: "Frontend",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Backend & Databases",
    skills: ["Node.js", "Express.js", "REST API", "MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    label: "AI / ML",
    skills: ["Python", "Flask", "Gemini API", "scikit-learn"],
  },
  {
    label: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export const achievements = [
  {
    title: "Pull Shark",
    detail: "GitHub achievement — merged pull requests across repositories",
  },
  {
    title: "YOLO",
    detail: "GitHub achievement — merged without review, once, on purpose",
  },
  {
    title: "Quickdraw",
    detail: "GitHub achievement — closed an issue or PR within 5 minutes",
  },
  {
    title: "Consistent LeetCode Practice",
    detail: "Daily practice in Data Structures, Algorithms, and System Design fundamentals",
  },
];
