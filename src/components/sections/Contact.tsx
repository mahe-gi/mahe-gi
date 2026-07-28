"use client";

import { portfolio } from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";


export function Contact() {

  return (
    <section id="contact" className="py-32 px-4 md:px-8 bg-zinc-900/30 border-t border-border/10">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100">Let&apos;s build something together.</h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
          I&apos;m currently open to Full Stack Developer opportunities. Feel free to connect for collaboration or opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <Link href={`mailto:${portfolio.social.email}`} className={buttonVariants({ size: "lg", className: "w-full sm:w-auto text-base h-12 px-6" })}>
            <Mail className="mr-2 h-5 w-5" />
            Email
          </Link>
          
          <Link href={portfolio.social.linkedin} target="_blank" className={buttonVariants({ size: "lg", variant: "outline", className: "w-full sm:w-auto text-base h-12 px-6 border-zinc-700 hover:bg-zinc-800" })}>
            <FaLinkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Link>
          
          <Link href={portfolio.social.github} target="_blank" className={buttonVariants({ size: "lg", variant: "outline", className: "w-full sm:w-auto text-base h-12 px-6 border-zinc-700 hover:bg-zinc-800" })}>
            <FaGithub className="mr-2 h-5 w-5" />
            GitHub
          </Link>
          
          <Link href={portfolio.personal.resumeUrl} target="_blank" className={buttonVariants({ size: "lg", variant: "outline", className: "w-full sm:w-auto text-base h-12 px-6 border-zinc-700 hover:bg-zinc-800" })}>
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Link>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} {portfolio.personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
