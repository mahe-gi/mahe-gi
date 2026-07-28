import Link from "next/link";
import { Project } from "@/types/project";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-2xl">{project.title}</CardTitle>
        <CardDescription className="text-zinc-400 mt-2">
          {project.shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-white/5 text-zinc-300 hover:bg-white/10 border border-white/5 font-normal">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge variant="outline" className="text-zinc-400 border-zinc-700">
              +{project.technologies.length - 5}
            </Badge>
          )}
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-zinc-300">Key Features:</h4>
          <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
            {project.features.slice(0, 3).map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3 pt-6 mt-auto">
        <Link href={`/projects/${project.slug}`} className={buttonVariants({ className: "w-full sm:w-auto" })}>
          Read Case Study
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <div className="flex w-full sm:w-auto gap-3">
          <Link href={project.githubUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "icon", className: "flex-1 sm:flex-none" })}>
            <FaGithub className="h-4 w-4" />
            <span className="sr-only">GitHub Repo</span>
          </Link>
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "icon", className: "flex-1 sm:flex-none" })}>
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Live Demo</span>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
