'use client';

import { About } from '@/sections/about';
import { SkillsPage } from '@/sections/skills';

export default function CategoriesPage() {
  return (
    <div className='flex flex-wrap md:gap-10 mt-20 flex-col'>
        <About />
        <SkillsPage />
      <div className='w-full items-center justify-center flex gap-y-5 flex-col pb-5'>
        <p><img  className='px-7 md:px-0' src="https://github-readme-streak-stats.herokuapp.com/?user=ritwikgotbugs&background=171717&border=232323&stroke=ffffff&currStreakNum=ffffff&sideNums=ffffff&currStreakLabel=ffffff&sideLabels=ffffff&dates=ffffff" alt="ritwikgotbugs" /></p>
        <img className='items-center flex w-[130px] h-[25px]' src="https://komarev.com/ghpvc/?username=ritwikgotbugs&label=Profile%20views&color=0e75b6&style=flat" alt="ritwikgotbugs" />
      </div>
    </div>
  );
}
