import React from 'react';

interface SkillsTileProps {
  title: string;
  img: string;
  onClick?: () => void;
}

export const Skills = ({ title, img, onClick }: SkillsTileProps) => {
  return (
    <div className="bg-primary p-2 rounded-3xl inline-block">
      <div className="flex items-center gap-x-2">
        <button onClick={onClick}>
          <img src={img} width="28" alt="Skill" className="rounded-lg" />
        </button>
      </div>
    </div>
  );
}
