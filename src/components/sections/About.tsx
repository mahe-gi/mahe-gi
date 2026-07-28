import { portfolio } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-background border-t border-border/10">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-zinc-100">About Me</h2>
        <div className="bg-[#18181b] p-8 md:p-12 rounded-2xl border border-zinc-800/50 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
          <p className="text-xl md:text-2xl font-medium text-zinc-300 leading-relaxed">
            "{portfolio.personal.summary}"
          </p>
        </div>
      </div>
    </section>
  );
}
