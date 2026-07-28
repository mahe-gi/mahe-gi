import { portfolio } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, LayoutTemplate, Settings2 } from "lucide-react";

export function Skills() {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "frontend":
        return <LayoutTemplate className="h-6 w-6 text-blue-400" />;
      case "backend":
        return <Code2 className="h-6 w-6 text-purple-400" />;
      case "database":
        return <Database className="h-6 w-6 text-green-400" />;
      default:
        return <Settings2 className="h-6 w-6 text-orange-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-zinc-100 text-center">Technical Arsenal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.skills.map((category) => (
            <div 
              key={category.title} 
              className="bg-[#18181b] p-8 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-zinc-900 rounded-lg group-hover:scale-110 transition-transform">
                  {getIcon(category.title)}
                </div>
                <h3 className="text-xl font-bold text-zinc-100">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="text-sm py-1.5 px-3 bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:border-zinc-600 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
