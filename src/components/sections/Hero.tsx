"use client";

import { portfolio } from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/button";
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-zinc-950/50 backdrop-blur-md border border-white/5 shadow-2xl rounded-full px-4 py-1.5 w-fit">
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
          </motion.div>

          {/* Right Column: Engineering Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="rounded-xl border border-white/5 bg-zinc-950/60 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/5">
              <div className="flex items-center px-4 py-3 border-b border-white/5 bg-zinc-950/80">
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
                  name: <span className="text-green-400">&quot;CH Mahesh&quot;</span>,
                </div>
                <div className="pl-4">
                  role: <span className="text-green-400">&quot;Full Stack Developer&quot;</span>,
                </div>
                <div className="pl-4">
                  experience: <span className="text-green-400">&quot;1.5+ years&quot;</span>,
                </div>
                <div className="pl-4">
                  stack: [
                </div>
                <div className="pl-8">
                  <span className="text-green-400">&quot;React.js&quot;</span>,
                </div>
                <div className="pl-8">
                  <span className="text-green-400">&quot;Next.js&quot;</span>,
                </div>
                <div className="pl-8">
                  <span className="text-green-400">&quot;Node.js&quot;</span>,
                </div>
                <div className="pl-8">
                  <span className="text-green-400">&quot;TypeScript&quot;</span>,
                </div>
                <div className="pl-8">
                  <span className="text-green-400">&quot;PostgreSQL&quot;</span>
                </div>
                <div className="pl-4">
                  ],
                </div>
                <div className="pl-4">
                  focus: <span className="text-green-400">&quot;Scalable SaaS Applications&quot;</span>
                </div>
                <div>{"};"}</div>
              </div>
            </div>
            
            
            {/* Decorative Glow */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-xl blur-xl -z-10 animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
