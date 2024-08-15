'use client';

import { ProjectsTile } from '@/components/projects';
import { Contact } from '@/sections/contact';
import React, { useEffect, useState } from 'react'

interface ProjectsTileProps {
    title: string;
    subtitle: string;
    img: string;
    githubUrl: string;
    url: string;
    stack: string[];
    stackUrl: string[];
}

export default function Projects() {
    const [projects, setProjects] = useState<ProjectsTileProps[]>([]);

    useEffect(() => {
        fetch('/projects.json')
        .then(response => response.json())
        .then(data => setProjects(data))
        .finally(() => console.log('Projects fetched'));
    }, []);

    return (
        <div className='flex gap-5 mt-20 flex-col w-full justify-between mb-10'>
        <div className='w-full flex flex-row gap-x-10 pt-20 flex-wrap gap-y-10 justify-center items-center'>
            {projects.map((project, index) => (
                <ProjectsTile key={index} {...project} />
            ))}
        </div>
        </div>
    );
}
