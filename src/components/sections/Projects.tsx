import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-zinc-900/20 border-y border-border/10">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-100">Selected Projects</h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A showcase of production-ready applications I&apos;ve built, focusing on scalable architecture and solving real-world problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
