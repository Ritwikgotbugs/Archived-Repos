'use client';

import { ProjectsTile } from '@/components/projects';
import { Skeleton } from '@/components/ui/skeleton';
import { Contact } from '@/sections/contact';
import React, { useEffect, useState } from 'react';

interface ProjectsTileProps {
  title: string;
  subtitle: string;
  img: string;
  githubUrl: string;
  url: string;
  stack: string[];
  stackUrl: string[];
}

const fetchProject = async (): Promise<ProjectsTileProps[]> => {
  const response = await fetch('/projects.json');
  if (!response.ok) {
    throw new Error('Failed to fetch projects data');
  }
  return response.json();
};

export default function Projects() {
  const [projects, setProjects] = useState<ProjectsTileProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProject();
        setProjects(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  return (
    <div className='flex gap-5 mt-20 flex-col w-full justify-between mb-10'>
      <div className='w-full flex flex-row gap-x-8 pt-5 flex-wrap gap-y-8 md:gap-y-5 justify-center items-center'>
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex flex-col justify-around items-start bg-[#171717] px-5 pt-5 rounded-xl shadow-lg w-[320px] h-[385px]">
                <div>
                    <Skeleton className="w-[100px] h-[20px] rounded-xl" style={{ backgroundColor: '#292929 !important' }} />
                    <Skeleton className="w-[200px] h-[80px] rounded-xl mt-2" style={{ backgroundColor: '#292929 !important' }} />
                </div>
                <Skeleton className="w-full h-[150px] rounded-xl" style={{ backgroundColor: '#292929 !important' }} />
                
                <div className="flex justify-end w-full gap-x-2">
                  <Skeleton className="w-[30px] h-[30px] rounded-full" style={{ backgroundColor: '#292929 !important' }} />
                  <Skeleton className="w-[30px] h-[30px] rounded-full" style={{ backgroundColor: '#292929 !important' }} />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          projects.map((project, index) => (
            <ProjectsTile key={index} {...project} />
          ))
        )}
      </div>
    </div>
  );
}
