'use client';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const Contact = () => {
  return (
    <div className='bg-primary flex flex-col justify-between items-center px-5 py-3 gap-y-2 w-full border-t-2 border-neutral-900'>
      <div className="flex gap-x-2">
        <FaGithub 
          size={20} 
          onClick={()=> window.open('https://www.github.com/Ritwikgotbugs')} 
          className='transform transition-transform hover:-translate-y-1 cursor-pointer'
        />
        <FaLinkedin 
          size={20} 
          onClick={()=> window.open('https://www.linkedin.com/in/ritwik-sharma')} 
          className='transform transition-transform hover:-translate-y-1 cursor-pointer'
        />
        <FaInstagram 
          size={20} 
          onClick={()=> window.open('https://www.instagram.com/ritwik.sharma')} 
          className='transform transition-transform hover:-translate-y-1 cursor-pointer'
        />
        <BsTwitterX 
          size={20} 
          onClick={()=> window.open('https://twitter.com/ritwik_sharma')} 
          className='transform transition-transform hover:-translate-y-1 cursor-pointer'
        />
      </div>
      
      <p className='text-center'>Made with ❤️ by Ritwik Sharma</p>
      
      <div className='text-right'>
        <p className="font-semibold">Crafted with <u>Next.Js</u> and <u>TailwindCSS</u></p>
      </div>
    </div>
  );
}
