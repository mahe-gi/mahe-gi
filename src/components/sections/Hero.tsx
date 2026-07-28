import { portfolio } from "@/data/portfolio";
import { Button, buttonVariants } from "@/components/ui/button";
import { Terminal, Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 md:px-8">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-5xl z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text */}
          <div className="flex flex-col space-y-8">
            <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-1.5 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-zinc-300">
                {portfolio.personal.status}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-100">
                {portfolio.personal.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {portfolio.personal.role} building scalable SaaS applications
              </h2>
            </div>

            <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
              {portfolio.personal.description}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="#projects" className={buttonVariants({ size: "lg", className: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200" })}>
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href={portfolio.personal.resumeUrl} target="_blank" className={buttonVariants({ size: "lg", variant: "outline", className: "border-zinc-700 text-zinc-300 hover:bg-zinc-800" })}>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Link>
              
              <div className="flex gap-2 ml-4">
                <Link href={portfolio.social.github} target="_blank" className={buttonVariants({ size: "icon", variant: "ghost", className: "text-zinc-400 hover:text-zinc-100" })}>
                  <FaGithub className="h-5 w-5" />
                </Link>
                <Link href={portfolio.social.linkedin} target="_blank" className={buttonVariants({ size: "icon", variant: "ghost", className: "text-zinc-400 hover:text-zinc-100" })}>
                  <FaLinkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Visualization */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="rounded-xl border border-zinc-800 bg-[#09090b]/80 backdrop-blur shadow-2xl overflow-hidden">
              <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto flex items-center text-xs text-zinc-500 font-mono">
                  <Terminal className="h-3 w-3 mr-2" />
                  developer.ts
                </div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-zinc-300">
                <div>
                  <span className="text-purple-400">const</span> developer = {"{"}
                </div>
                <div className="pl-4">
                  name: <span className="text-green-400">"CH Mahesh"</span>,
                </div>
                <div className="pl-4">
                  role: <span className="text-green-400">"Full Stack Developer"</span>,
                </div>
                <div className="pl-4">
                  experience: <span className="text-green-400">"1.5+ years"</span>,
                </div>
                <div className="pl-4">
                  stack: [
                </div>
                <div className="pl-8">
                  <span className="text-green-400">"React.js"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-green-400">"Next.js"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-green-400">"Node.js"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-green-400">"TypeScript"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-green-400">"PostgreSQL"</span>
                </div>
                <div className="pl-4">
                  ],
                </div>
                <div className="pl-4">
                  focus: <span className="text-green-400">"Scalable SaaS Applications"</span>
                </div>
                <div>{"};"}</div>
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-xl blur -z-10 animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
}
