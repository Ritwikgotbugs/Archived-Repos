import React from 'react';

interface SkillsTileProps {
  stack: string[];
}

export const Skills = ({ stack }: SkillsTileProps) => {
  return (
    <div className="bg-primary p-2 rounded-3xl inline-block">
      <div className="flex items-center gap-x-2">
        {stack.map((tech, index) => (
          <button
            key={index}
            className="focus:outline-none"
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
  );
};
