import { portfolio } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export function Education() {
  if (!portfolio.education || portfolio.education.length === 0) return null;

  return (
    <section id="education" className="py-24 px-4 md:px-8 bg-zinc-900/10 border-t border-border/10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-zinc-100 flex items-center gap-3">
          <GraduationCap className="h-8 w-8 text-blue-500" />
          Education
        </h2>
        
        <div className="space-y-8">
          {portfolio.education.map((edu, idx) => (
            <div key={idx} className="bg-zinc-950/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100">{edu.degree}</h3>
                  <p className="text-zinc-400 font-medium text-lg">{edu.institution}, {edu.university}</p>
                </div>
                <div className="mt-2 md:mt-0 text-left md:text-right">
                  <span className="inline-block bg-blue-500/10 text-blue-400 font-mono text-sm px-3 py-1 rounded-full mb-2">
                    Class of {edu.year}
                  </span>
                  <p className="text-zinc-500 font-medium text-sm">CGPA: {edu.cgpa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
