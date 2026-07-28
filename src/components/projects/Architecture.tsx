import { ProjectArchitecture } from "@/types/project";
import { Badge } from "@/components/ui/badge";

interface ArchitectureProps {
  architecture: ProjectArchitecture;
}

export function Architecture({ architecture }: ArchitectureProps) {
  const layers = [
    { name: "Frontend", items: architecture.frontend },
    { name: "Backend", items: architecture.backend },
    { name: "Database", items: architecture.database },
    { name: "Authentication", items: architecture.authentication },
    { name: "Deployment", items: architecture.deployment },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {layers.map((layer) => {
        if (!layer.items || layer.items.length === 0) return null;
        
        return (
          <div key={layer.name} className="bg-[#18181b] rounded-lg p-5 border border-border/50">
            <h4 className="text-sm font-semibold text-zinc-300 mb-4">{layer.name}</h4>
            <div className="flex flex-wrap gap-2">
              {layer.items.map((item) => (
                <Badge key={item} variant="secondary" className="bg-zinc-800 text-zinc-200">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
