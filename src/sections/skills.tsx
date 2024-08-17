'use client';

import React, { useEffect, useState } from 'react';
import { Skills } from '@/components/skills';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

interface Tech {
  name: string;
  iconUrl: string;
}

interface SkillSet {
  category: string;
  tech: Tech[];
}

const fetchSkillsData = async (): Promise<SkillSet[]> => {
  const response = await fetch('/skills.json');
  if (!response.ok) {
    throw new Error('Failed to fetch skills data');
  }
  return response.json();
};

export const SkillsPage = () => {
  const [skillsData, setSkillsData] = useState<SkillSet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSkillsData = async () => {
      try {
        const data = await fetchSkillsData();
        setSkillsData(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadSkillsData();
  }, []);

  return (
    <div className="p-10">
      <div className='flex flex-col items-center justify-center'>
     <h1 className="text-4xl font-bold leading-tight justify-center items-center flex w-full mb-3">
      <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
        Skills
      </span>
    </h1>
    <Separator className=' bg-gradient-to-r from-purple-500 to-blue-400 justify-center items-center flex mb-8 rounded-xl'/>
    </div>
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
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 font-mono justify-center">
          {skillsData.map((skillSet, index) => (
            <div key={index} className="w-full flex flex-col justify-start items-center">
              <h2 className="text-2xl mb-3">{skillSet.category}</h2>
              <Skills  skills={skillSet.tech} />
            </div>
          ))}
          
        </div>
      )}
    </div>
  );
};
