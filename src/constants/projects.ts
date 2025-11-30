export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ShopStore",
    description:
      "A fully functional e-commerce platform built with Next.js, NextAuth, Prisma, Neon DB, TypeScript, zod, jest, react-hook-form, Shadcn UI, and Tailwind CSS. It includes authentication, product management, shopping cart, and order processing features.",
    image: `${import.meta.env.BASE_URL}docs/shopzStore.png`,
    category: "AI Content Platform",
    technologies: [
      "Next.js",
      "NextAuth",
      "Prisma",
      "Neon DB",
      "TypeScript",
      "zod",
      "jest",
      "react-hook-form",
      "Shadcn UI",
      "Tailwind CSS",
      "Vercel",
      "PayPal"
    ],
    demoLink: "https://shopz-store.vercel.app/",
    codeLink: "https://github.com/rohitkandpal03/shopz-store",
  },
  {
    id: 2,
    title: "Studio.ai",
    description:
      "Designed and implemented the project from scratch, including authentication features such as email-based magic link login, Google OAuth login, and secure logout functionality. Developed advanced pagination techniques, real-time content editing inside an iframe, and a custom AI-powered chat assistant for content creation. Collaborated closely with backend and QA teams to ensure a seamless user experience.",
    image: `${import.meta.env.BASE_URL}docs/studioAi.png`,
    category: "AI Content Platform",
    technologies: [
      "React.js",
      "React Router",
      "Google OAuth",
      "AI",
      "TypeScript",
      "Firebase",
    ],
    demoLink: "https://studio.officeiq.ai/",
    codeLink: "",
  },
  {
    id: 3,
    title: "Office-IQ Document Intelligence",
    description:
      "Revolutionary document management application enabling intelligent interaction with documents through multiple data sources. Features advanced AI processing capabilities and seamless user experience.",
    image: `${import.meta.env.BASE_URL}docs/officeiqAi.png`,
    category: "Enterprise Application",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "React ToolTip",
      "React Markdown",
    ],
    demoLink: "https://www.officeiq.ai/",
    codeLink: "",
  },
  {
    id: 4,
    title: "Bajaj Finserv Health Limited",
    description:
      "Developed user interfaces for web applications to streamline hospital operations. Translated design wireframes into responsive, performant code. Improved usability and user experience for hospital staff and patients. Implemented optimization techniques and conducted thorough testing, resulting in a 25% increase in user engagement.",
    image: `${import.meta.env.BASE_URL}docs/bajajFinservHealth.png`,
    category: "Healthcare Solution",
    technologies: [
      "Next.js",
      "Typescript",
      "Redis",
      "React Query",
      "Emotion CSS",
      "Material UI",
      "Performance Optimization",
      "Jest",
      "React Testing Library",
    ],
    demoLink: "https://www.bajajfinservhealth.in/hospitals",
    codeLink: "",
  },
  {
    id: 5,
    title: "Virtual Combine Sports Platform",
    description:
      "Comprehensive sports platform connecting coaches and athletes with team management, performance tracking, and national leaderboard functionality. Built for scalability and real-time data synchronization.",
    image: `${import.meta.env.BASE_URL}docs/virtualCombine.png`,
    category: "Sports Management",
    technologies: [
      "React.js",
      "React Redux",
      "Jest",
      "JavaScript",
      "Performance Tracking",
    ],
    demoLink: "https://virtualcombine.com",
    codeLink: "",
  },
];
