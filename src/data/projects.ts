import { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "the-rental-circle",
    title: "The Rental Circle",
    shortDescription:
      "Rental management platform designed to connect renters, asset owners, and administrators through structured rental workflows.",
    problem:
      "Traditional rental processes require manual coordination between renters, owners, and administrators. A centralized digital workflow improves transparency and efficiency.",
    solution:
      "Built a full-stack rental platform with role-based workflows, secure authentication, scalable database design, and rental lifecycle management.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Auth.js",
      "Tailwind CSS"
    ],
    features: [
      "Role-based rental workflows",
      "Renter management",
      "Asset owner management",
      "Administrator workflows",
      "Listings management",
      "Booking workflows",
      "Rental requests",
      "Deposit management",
      "Handover management",
      "SEO-friendly location pages"
    ],
    architecture: {
      frontend: ["Next.js App Router", "Tailwind CSS"],
      backend: ["Server Actions and backend services"],
      database: ["PostgreSQL", "Prisma ORM"],
      authentication: ["Auth.js with role-based authorization"],
    },
    decisions: [
      {
        title: "Why Next.js App Router?",
        reason: "Used Next.js App Router for modern full-stack architecture.",
      },
      {
        title: "Why PostgreSQL & Prisma?",
        reason: "Designed scalable PostgreSQL schemas using Prisma ORM for data reliability and relationships.",
      },
      {
        title: "Why Server Actions?",
        reason: "Implemented protected server actions for secure workflows and seamless client-server integrations.",
      }
    ],
    challenges: [
      "Designing complex rental workflows",
      "Managing multiple user roles",
      "Maintaining data consistency"
    ],
    lessonsLearned: [
      "Marketplace application architecture",
      "Role-based authorization design",
      "Database modeling"
    ],
    githubUrl: "https://github.com/mahe-gi/the-rental-circle",
    liveUrl: "https://therentalcircle.in",
  },
  {
    slug: "devloom",
    title: "Devloom",
    shortDescription:
      "Full-stack developer blogging platform built for creating and managing technical content.",
    problem:
      "Developers need a simple platform to publish, manage, and organize technical knowledge.",
    solution:
      "Built a modern blogging platform with authentication, CRUD operations, type-safe APIs, and a responsive user interface.",
    technologies: [
      "React",
      "TypeScript",
      "Hono",
      "Cloudflare Workers",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Zod"
    ],
    features: [
      "Authentication",
      "Blog management",
      "CRUD operations",
      "Responsive UI",
      "End-to-end type safety",
      "Serverless backend deployment"
    ],
    architecture: {
      frontend: ["React + TypeScript", "Tailwind CSS"],
      backend: ["Hono running on Cloudflare Workers"],
      database: ["PostgreSQL", "Prisma ORM"],
      authentication: ["Token-based Auth"],
    },
    decisions: [
      {
        title: "Why TypeScript?",
        reason: "Used TypeScript for end-to-end type safety and robust developer experience.",
      },
      {
        title: "Why Hono & Cloudflare Workers?",
        reason: "Used Hono with Cloudflare Workers for ultra-fast serverless backend performance at the edge.",
      }
    ],
    challenges: [
      "Building type-safe full-stack communication",
      "Serverless backend deployment",
      "Managing content workflows"
    ],
    lessonsLearned: [
      "Modern serverless architecture",
      "API design",
      "Full-stack TypeScript development"
    ],
    githubUrl: "https://github.com/mahe-gi/devloom",
    liveUrl: "https://blog.techwithmahe.com",
  },
];
