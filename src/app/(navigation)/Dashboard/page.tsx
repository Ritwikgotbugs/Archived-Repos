'use client';
import { About } from '@/sections/about';
import { ProjectsTile } from '../../../components/projects';
import { Projects } from '@/sections/projects';
import { Contact } from '@/sections/contact';
import { SkillsPage } from '@/sections/skills';
import { useState, useEffect } from 'react';

interface ProjectsTileProps {
  title: string;
  subtitle: string;
  img: string;
  githubUrl: string;
  demoUrl: string;
}


export default function CategoriesPage() {
  const [projects, setProjects] = useState<ProjectsTileProps[]>([]);

  useEffect(() => {
    fetch('/projects.json')
    .then(response => response.json())
    .then(data => setProjects(data))
    .finally(() => console.log('Projects fetched'));
  }, []);

  return (
    <div className='flex flex-wrap gap-5 mt-20 flex-col'>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div className='w-full flex flex-row gap-x-10 flex-wrap gap-y-10 justify-center items-center'>
      {projects.map((project, index) => (
        <ProjectsTile key={index} {...project} />
      ))}
    </div>
      <div id="skills">
        <SkillsPage />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
