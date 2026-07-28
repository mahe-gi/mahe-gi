# CH Mahesh — Full Stack Developer Portfolio

A premium, engineering-focused developer portfolio built to showcase my experience, projects, technical skills, and software engineering approach.

Live Website:
https://your-domain.com

---

## Overview

This portfolio represents my journey as a Full Stack Developer building production-ready SaaS applications.

The goal was to create a professional developer website that feels like a software engineer's resume combined with detailed product case studies.

The portfolio highlights:

- Full-stack development experience
- SaaS application architecture
- Real-world projects
- Backend and database design
- Engineering decisions
- Technical skills

---

## Tech Stack

### Frontend

- Next.js 15 (App Router)
- React.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide React

### Backend / Architecture

- Next.js Server Components
- REST API architecture
- Server Actions
- Type-safe development patterns

### Database

- PostgreSQL
- Prisma ORM

### Tools

- Git
- GitHub
- Docker
- Vercel
- ESLint

---

# Features

## Modern Portfolio Experience

- Premium dark-mode design
- Responsive layout
- Clean typography
- Engineering-focused UI
- Minimal animations

## Project Case Studies

Each featured project includes:

- Problem statement
- Solution approach
- Technical architecture
- Technology choices
- Engineering decisions
- Challenges
- Lessons learned

## Developer-Focused Sections

- Professional experience
- Technical skills
- Education
- Certifications
- Contact information

---

# Architecture

```text
src
│
├── app
│   ├── page.tsx
│   ├── layout.tsx
│   └── projects
│       └── [slug]
│
├── components
│   ├── sections
│   ├── projects
│   └── ui
│
├── data
│   ├── portfolio.ts
│   └── projects.ts
│
├── types
│
└── lib
```

---

# Data Driven Architecture

The website follows a centralized content architecture.

All portfolio information is managed from:

```text
src/data/portfolio.ts
src/data/projects.ts
```

Components only handle presentation.

This makes updating:

- Experience
- Skills
- Projects
- Education
- Certifications

simple without modifying UI components.

---

# Featured Projects

## The Rental Circle

A rental management platform connecting renters, asset owners, and administrators.

### Highlights

- Role-based workflows
- Authentication
- Rental lifecycle management
- PostgreSQL database design
- Prisma ORM
- Next.js App Router

Technologies:

```text
Next.js
React
TypeScript
PostgreSQL
Prisma
Auth.js
```

---

## Devloom

A full-stack developer blogging platform.

### Highlights

- Authentication
- CRUD operations
- Type-safe APIs
- Serverless backend
- Responsive UI

Technologies:

```text
React
TypeScript
Hono
Cloudflare Workers
Prisma
PostgreSQL
```

---

# Performance & Quality

The project focuses on:

- Type safety
- Component reusability
- Clean architecture
- SEO optimization
- Accessibility
- Responsive design

Implemented:

- Metadata optimization
- OpenGraph support
- Sitemap generation
- Robots configuration
- Optimized production build

---

# Getting Started

## Clone repository

```bash
git clone https://github.com/mahe-gi/portfolio.git
```

## Install dependencies

```bash
npm install
```

## Run development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# Environment Variables

Create:

```text
.env.local
```

Example:

```env
NEXT_PUBLIC_SITE_URL=
```

---

# Production Build

Run:

```bash
npm run build
```

The project is optimized for deployment on Vercel.

---

# Deployment

Deployed using:

* Vercel
* Next.js optimized hosting

---

# Design Inspiration

The design direction was inspired by:

* Linear
* Vercel
* Stripe
* Modern SaaS applications

The goal was to create:

> "A software engineer's product showcase, not a designer portfolio."

---

# Author

## CH Mahesh

Full Stack Developer

Building scalable SaaS applications using:

* React.js
* Next.js
* Node.js
* TypeScript
* PostgreSQL

GitHub:
[https://github.com/mahe-gi](https://github.com/mahe-gi)

LinkedIn:
[https://linkedin.com/in/chmahesh01](https://linkedin.com/in/chmahesh01)

---

## License

This project is for personal portfolio use.
