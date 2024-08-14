import React from 'react';
import { Skills } from './skills';

interface ProjectsTileProps {
  title: string;
  subtitle: string;
  img: string;
  githubUrl: string;
  demoUrl: string;
}

export const ProjectsTile = ({ title, subtitle, img, githubUrl, demoUrl }: ProjectsTileProps) => {
  return (
    <div className="bg-secondary rounded-xl w-80 h-96 flex flex-col justify-between">
      <div className='px-6 pt-6 flex-grow'>
        <h1 className='text-xl font-bold text-white'>{title}</h1>
        <h2 className='text-l pb-2 text-white'>{subtitle}</h2>
        <div className='bg-primary flex justify-center items-center p-3 rounded-lg my-2 h-40'>
          <img src={img} alt="Project" className="object-contain h-full rounded-lg" />
        </div>
        <Skills 
          title='React' 
          img='https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000'
        />
      </div>
      <div className='flex justify-end gap-x-2 py-3 px-4'>
        <button onClick={() => {window.open(`${githubUrl}`)}}>
          <img src='https://img.icons8.com/?size=100&id=16318&format=png&color=FFFFFF' width="35" alt="Github" className="rounded-lg" />
        </button>
        <button onClick={() => {window.open(`${demoUrl}`)}}>
          <img src='https://img.icons8.com/?size=100&id=7gn1JUOaj7KZ&format=png&color=FFFFFF' width="25" alt="Web" className="rounded-lg" />
        </button>
      </div>
    </div>
  );
}
