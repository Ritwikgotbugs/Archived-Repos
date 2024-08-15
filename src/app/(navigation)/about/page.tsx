'use client';

import { About } from '@/sections/about';
import { SkillsPage } from '@/sections/skills';
import { Contact } from '@/sections/contact';

export default function CategoriesPage() {
  return (
    <div className='flex flex-wrap gap-5 mt-20 flex-col'>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <SkillsPage />
      </div>
    </div>
  );
}
