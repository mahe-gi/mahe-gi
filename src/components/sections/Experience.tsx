import { portfolio } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-zinc-100">Experience</h2>
        
        <div className="space-y-12 border-l-2 border-zinc-800 ml-4 md:ml-0 md:pl-0 md:border-none relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2" />
          
          {portfolio.experience.map((exp, idx) => (
            <div key={exp.id} className="relative pl-8 md:pl-0 group">
              {/* Timeline dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-2 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-[#09090b] group-hover:ring-blue-500/20 transition-all z-10" />
              
              <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                <div className="bg-[#18181b] p-6 rounded-xl border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                  <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-4`}>
                    <span className="text-blue-400 font-mono text-sm mb-2">{exp.duration}</span>
                    <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                    <span className="text-zinc-400 font-medium">{exp.company}</span>
                  </div>
                  
                  <ul className={`text-sm text-zinc-400 space-y-2 ${idx % 2 === 0 ? 'md:text-right md:flex md:flex-col md:items-end' : ''}`}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start md:inline-flex md:items-start max-w-md">
                        {idx % 2 !== 0 && <span className="text-blue-500 mr-2 mt-1">•</span>}
                        <span>{resp}</span>
                        {idx % 2 === 0 && <span className="text-blue-500 ml-2 mt-1 md:hidden">•</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
