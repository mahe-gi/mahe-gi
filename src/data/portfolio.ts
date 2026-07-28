import { PortfolioData } from "../types/portfolio";

export const portfolio: PortfolioData = {
  personal: {
    name: "CH Mahesh",
    role: "Full Stack Developer",
    description:
      "Full Stack Developer focused on building analytics dashboards, automation platforms, and scalable SaaS applications using React.js, Next.js, Node.js, TypeScript, Prisma ORM, and PostgreSQL.",
    summary:
      "Full Stack Developer focused on building analytics dashboards, automation platforms, and scalable SaaS applications. Skilled in developing REST APIs, third-party integrations, authentication systems, and centralized reporting with a focus on performance and clean architecture.",
    status: "Open to Full Stack Developer opportunities",
    resumeUrl: "https://drive.google.com/file/d/1nfzHEQ77RlqVr0quf_yb4-FRDlGPC8Rh/view?usp=sharing",
  },
  experience: [
    {
      id: "exp-1",
      role: "Junior Full Stack Developer",
      company: "Digital Bevy Private Limited",
      duration: "Sep 2025 - Jul 2026",
      responsibilities: [
        "Developed a full-stack analytics dashboard using React.js, Node.js, Express.js, Prisma ORM, and MySQL that centralized campaign reporting across multiple client accounts.",
        "Integrated Mautic CRM and multiple third-party marketing APIs to automate data collection, normalization, and reporting across internal business systems.",
        "Designed and implemented scalable REST APIs and backend services to automate business workflows and support real-time analytics.",
        "Collaborated across the Software Development Life Cycle (SDLC) from development to deployment.",
        "Contributed to the MVP development of a unified Marketing Automation platform integrating CRM, Email, SMS, Voicemail, Personalized Video, and AI-powered workflow automation."
      ],
    },
    {
      id: "exp-2",
      role: "Web Developer Intern",
      company: "Verdicta Legal Solutions",
      duration: "Mar 2025 - Aug 2025",
      responsibilities: [
        "Developed responsive web applications using React.js, HTML, CSS, JavaScript, and WordPress.",
        "Built reusable UI components and integrated REST APIs for dynamic content.",
        "Improved website responsiveness and resolved UI issues across multiple devices."
      ],
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Nizam College, Hyderabad",
      university: "Osmania University",
      year: "2024",
      cgpa: "8.0/10"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Government Degree & PG College, Mahabubnagar",
      university: "Palamuru University",
      year: "2022",
      cgpa: "7.87/10"
    }
  ],
  certifications: [
    {
      name: "Meta Front-End Developer Professional Certificate",
      provider: "Coursera"
    },
    {
      name: "React (Basic)",
      provider: "HackerRank"
    }
  ],
  skills: [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Java", "SQL"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "React Native", "Expo", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "Prisma ORM", "Auth.js", "JWT", "Hono", "Cloudflare Workers"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      title: "Developer Tools",
      skills: ["Git", "GitHub", "Docker", "Linux", "AWS", "Postman"],
    }
  ],
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/mahe-gi",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/chmahesh01",
    email: process.env.NEXT_PUBLIC_EMAIL || "chmahesh.careers@gmail.com",
  },
};
