import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Tech {
  name: string;
  iconUrl: string;
}

interface SkillsProps {
  skills: Tech[];
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-4 cursor-pointer justify-center">
        {skills.map((skill, index) => (
          <Tooltip key={index}>
            <TooltipTrigger>
              <div className="bg-secondary text-white rounded-lg p-2 flex flex-col items-center justify-between border-2 border-transparent hover:border-blue-600 transition-all transform hover:scale-105 hover:shadow-lg">
                <img src={skill.iconUrl} alt={skill.name} className="w-8 h-8" />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-secondary text-white rounded-xl mb-2">
              <p>{skill.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};
