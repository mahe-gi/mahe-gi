import { portfolio } from "@/data/portfolio";
import { Award } from "lucide-react";

export function Certifications() {
  if (!portfolio.certifications || portfolio.certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-24 px-4 md:px-8 border-t border-border/10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-zinc-100 flex items-center gap-3">
          <Award className="h-8 w-8 text-purple-500" />
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portfolio.certifications.map((cert, idx) => (
            <div key={idx} className="bg-zinc-950/40 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-white/10 hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group">
              <div className="bg-purple-500/10 p-3 rounded-full group-hover:bg-purple-500/20 transition-colors">
                <Award className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-100 mb-1 leading-tight">{cert.name}</h3>
                <p className="text-zinc-400 text-sm font-medium">{cert.provider}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
