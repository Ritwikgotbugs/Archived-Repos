import React from 'react';
import { Badge } from "@/components/ui/badge"
import { FaGithub } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";



interface ProjectsTileProps {
  title: string;
  subtitle: string;
  img: string;
  githubUrl: string;
  url: string;
  stack: string[];
}

export const  ProjectsTile = ({ title, subtitle, img, githubUrl, url, stack }: ProjectsTileProps) => {

  return (
    <div className="bg-secondary cursor-pointer rounded-xl w-80 h-96 flex flex-col justify-between border-transparent border-2 hover:border-blue-500 transition-all transform hover:scale-105 hover:shadow-lg">
      <div className='px-6 pt-6 flex-grow'>
        <h1 className='text-xl font-bold text-white font-mono'>{title}</h1>
        <h2 className='text-sm pb-2 text-white font-mono'>{subtitle}</h2>
        <div className='bg-primary flex justify-center items-center p-3 rounded-lg my-2 h-36'>
          <img src={img} alt="Project" className="object-contain h-full rounded-lg" />
        </div>
        
        <div className="flex flex-wrap gap-1 font-mono ">
          {stack.map((tech, index) => (
            <Badge variant="blue" key={index} className='rounded-3xl px-3 py-1'>{tech}</Badge>

          ))}
        </div>
          
      </div>
      <div className='flex justify-end gap-2 p-3 cursor-pointer'>
      <FaGithub size={25} onClick={()=> window.open(githubUrl)} className='transform transition-transform hover:-translate-y-1'/>
      <IoGlobeOutline size={25} onClick={()=> window.open(url)}  className='transform transition-transform hover:-translate-y-1'/>
      </div>

    </div>
  );
}
