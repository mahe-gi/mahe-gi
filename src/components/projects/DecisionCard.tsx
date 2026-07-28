import { ProjectDecision } from "@/types/project";
import { Lightbulb } from "lucide-react";

interface DecisionCardProps {
  decision: ProjectDecision;
}

export function DecisionCard({ decision }: DecisionCardProps) {
  return (
    <div className="bg-[#18181b] p-6 rounded-lg border border-border/50 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors" />
      <div className="flex items-start gap-4">
        <div className="bg-blue-500/10 p-3 rounded-full mt-1">
          <Lightbulb className="h-5 w-5 text-blue-400" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-zinc-100 mb-2">{decision.title}</h4>
          <p className="text-zinc-400 leading-relaxed">{decision.reason}</p>
        </div>
      </div>
    </div>
  );
}
