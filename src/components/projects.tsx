import React from 'react';
import { Skills } from './skills';
import { Badge } from "@/components/ui/badge"


interface ProjectsTileProps {
  title: string;
  subtitle: string;
  img: string;
  githubUrl: string;
  demoUrl: string;
  stack: string[];
}

export const ProjectsTile = ({ title, subtitle, img, githubUrl, demoUrl, stack }: ProjectsTileProps) => {

  return (
    <div className="bg-secondary rounded-xl w-80 h-96 flex flex-col justify-between">
      <div className='px-6 pt-6 flex-grow'>
        <h1 className='text-xl font-bold text-white'>{title}</h1>
        <h2 className='text-l pb-2 text-white'>{subtitle}</h2>
        <div className='bg-primary flex justify-center items-center p-3 rounded-lg my-2 h-36'>
          <img src={img} alt="Project" className="object-contain h-full rounded-lg" />
        </div>
        
        <div className="flex flex-wrap gap-1">
          {stack.map((tech, index) => (
            <Badge variant="default">{stack[index]}</Badge>

          ))}
        </div>
        
      </div>
      <div className='flex justify-end gap-x-2 py-1 px-3'>
        <button onClick={() => {window.open(githubUrl)}}>
          <img src='https://img.icons8.com/?size=100&id=16318&format=png&color=FFFFFF' width="35" alt="Github" className="rounded-lg" />
        </button>
        <button onClick={() => {window.open(demoUrl)}}>
          <img src='https://img.icons8.com/?size=100&id=7gn1JUOaj7KZ&format=png&color=FFFFFF' width="25" alt="Web" className="rounded-lg" />
        </button>
      </div>
    </div>
  );
}
