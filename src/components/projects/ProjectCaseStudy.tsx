import { Project } from "@/types/project";
import { Architecture } from "./Architecture";
import { DecisionCard } from "./DecisionCard";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowLeft, Image as ImageIcon, AlertTriangle, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface ProjectCaseStudyProps {
  project: Project;
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <Link href="/#projects" className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-200 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-zinc-100">{project.title}</h1>
        <p className="text-xl text-zinc-400 leading-relaxed mb-8">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link href={project.githubUrl} target="_blank" rel="noreferrer" className={buttonVariants()}>
            <FaGithub className="mr-2 h-4 w-4" />
            View Source
          </Link>
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline" })}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          )}
        </div>
      </div>

      {project.image && (
        <div className="mb-16 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/50 shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={project.image} 
            alt={`${project.title} Preview`} 
            className="w-full h-auto object-cover object-center"
          />
        </div>
      )}
      
      {!project.image && (
        <div className="mb-16 h-64 sm:h-96 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/30 flex items-center justify-center flex-col text-zinc-600">
          <ImageIcon className="h-12 w-12 mb-4 opacity-50" />
          <p className="font-medium text-sm">Add a screenshot of {project.title} here</p>
        </div>
      )}

      {/* Stack */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-zinc-100">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="px-4 py-1.5 text-sm bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-zinc-100">The Problem</h2>
          <p className="text-zinc-400 leading-relaxed max-w-prose">
            {project.problem}
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-zinc-100">The Solution</h2>
          <p className="text-zinc-400 leading-relaxed max-w-prose">
            {project.solution}
          </p>
        </section>
      </div>

      {/* Architecture */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-zinc-100">Technical Architecture</h2>
        <Architecture architecture={project.architecture} />
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-zinc-100">Key Features</h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 mr-3" />
              <span className="text-zinc-300">{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Engineering Decisions */}
      {project.decisions.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-zinc-100">Engineering Decisions</h2>
          <div className="space-y-6">
            {project.decisions.map((decision, i) => (
              <DecisionCard key={i} decision={decision} />
            ))}
          </div>
        </section>
      )}

      {/* Challenges & Lessons Learned */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-zinc-100">Challenges</h2>
          <ul className="space-y-4">
            {project.challenges.map((challenge, i) => (
              <li key={i} className="flex items-start text-zinc-400 leading-relaxed">
                <AlertTriangle className="flex-shrink-0 text-amber-500/80 mr-3 h-5 w-5 mt-0.5" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-zinc-100">Lessons Learned</h2>
          <ul className="space-y-4">
            {project.lessonsLearned.map((lesson, i) => (
              <li key={i} className="flex items-start text-zinc-400 leading-relaxed">
                <CheckCircle2 className="flex-shrink-0 text-emerald-500/80 mr-3 h-5 w-5 mt-0.5" />
                <span>{lesson}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
