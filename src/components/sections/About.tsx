import { portfolio } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-background border-t border-border/10">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-zinc-100">About Me</h2>
        <div className="bg-zinc-950/40 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group hover:border-white/10 hover:shadow-blue-500/5 transition-all duration-300">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent group-hover:via-blue-400 transition-colors" />
          <p className="text-xl md:text-2xl font-medium text-zinc-300 leading-relaxed tracking-tight">
            &quot;{portfolio.personal.summary}&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
