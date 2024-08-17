'use client';

import { Experience } from '@/components/experience';
import { Skeleton } from '@/components/ui/skeleton';
import React, { useEffect, useState } from 'react';

interface ExperienceProps {
    tech: string[];
    organization: string;
    role: string;
    duration: string;
    url: string;
    location: string;
    description: string[];
}

const fetchExperience = async (): Promise<ExperienceProps[]> => {
  const response = await fetch('/experience.json');
  if (!response.ok) {
    throw new Error('Failed to fetch experience data');
  }
  return response.json();
};

export default function ExperiencePage() {
  const [experiences, setExperience] = useState<ExperienceProps[]>([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExperience = async () => {
      try {
        const data = await fetchExperience();
        setExperience(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadExperience();
  }, []);

  return (
    <div className='flex gap-5 mt-20 flex-col w-full justify-center items-center mb-5'>
<h1 className="text-5xl font-bold md:mb-4 leading-tight mt-5">
  <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
    Experiences
  </span>
</h1>
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex flex-col justify-center items-center">
              <Skeleton className="w-[150px] h-[30px] rounded-full mb-3" />
              <div className="flex gap-2">
                <Skeleton className="w-[50px] h-[50px] rounded-full" />
                <Skeleton className="w-[50px] h-[50px] rounded-full" />
                <Skeleton className="w-[50px] h-[50px] rounded-full" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        experiences.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))
      )}
    </div>
  );
}
