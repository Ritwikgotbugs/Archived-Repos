import React from 'react';
import { Skills } from './skills';

interface ProjectsTileProps {
  title: string;
  subtitle: string;
  img: string;
}

export const ProjectsTile = ({ title, subtitle, img }: ProjectsTileProps) => {
  return (
    <div className="bg-secondary rounded-xl inline-block">
      <div className='px-6 pt-6'>
        <h1 className='text-xl font-bold text-white'>{title}</h1>
        <h2 className='text-l pb-2 text-white'>{subtitle}</h2>
        <img src={img} width="250" alt="Project" className="rounded-lg mb-5" />
        <Skills 
          title='React' 
          img='https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000'
        />
      </div>
      <div className='flex justify-end gap-x-2 py-3 px-4'>
      <button onClick={()=> {window.open('https://www.github.com/Ritwikgotbugs/Xpens')}}>
          <img src='https://img.icons8.com/?size=100&id=16318&format=png&color=FFFFFF' width="35" alt="Skill" className="rounded-lg" />
      </button>
      <button onClick={()=> {window.open('https://www.github.com/Ritwikgotbugs/Xpens')}}>
          <img src='https://img.icons8.com/?size=100&id=7gn1JUOaj7KZ&format=png&color=FFFFFF' width="25" alt="Skill" className="rounded-lg" />
      </button>
      </div>
    </div>
  );
}
