'use client';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


export const Contact = () => {
  return (
    <div className='bg-primary flex flex-col justify-between items-center px-5 py-3 gap-y-2 w-full border-t-2 border-neutral-900'>
      <div className="flex gap-x-2">
         <FaGithub size={25} onClick={()=> window.open('https://www.github.com/Ritwikgotbugs')} className='transform transition-transform hover:-translate-y-1 cursor-pointer'/>
          <FaLinkedin size={25} onClick={()=> window.open('https://www.linkedin.com/in/ritwik-sharma-8714b4221/')} className='transform transition-transform hover:-translate-y-1 cursor-pointer'/>
          <FaInstagram size={25} onClick={()=> window.open('https://www.instagram.com/ritwikksharma_/')} className='transform transition-transform hover:-translate-y-1 cursor-pointer'/>
          <BsTwitterX size={25} onClick={()=> window.open('https://x.com/Ritwikshar')} className='transform transition-transform hover:-translate-y-1 cursor-pointer'/>
      </div>
      <p className='underline cursor-pointer' onClick={() => window.location.href = 'mailto:shritwik04@gmail.com'}>shritwik04@gmail.com</p>
      <p className='text-center font-mono'>Made with ❤️ by Ritwik Sharma</p>
      <div className='text-right'>
        <p className="font-semibold items-center justify-center">Crafted with <u onClick={()=> window.open('https://nextjs.org/')} className='cursor-pointer'>Next.Js</u> and <u onClick={()=> window.open('https://tailwindcss.com/')} className='cursor-pointer'>TailwindCSS</u></p>
      </div>
    </div>
  );
}
