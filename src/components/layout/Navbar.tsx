import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { Download } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-5xl flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold sm:inline-block">{portfolio.personal.name}</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
          <Link href="/#experience" className="transition-colors hover:text-foreground/80 text-foreground/60">Experience</Link>
          <Link href="/#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</Link>
          <Link href="/#skills" className="transition-colors hover:text-foreground/80 text-foreground/60">Skills</Link>
          <Link href="/#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href={portfolio.personal.resumeUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "sm", className: "hidden sm:flex" })}>
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
}
