'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState('/');

  // Set active state based on the current path
  useEffect(() => {
    if (pathname !== null) {
      setActive(pathname);
    }
  }, [pathname]);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experiences', path: '/experiences' },
  ];

  return (
    <header className="w-full text-white bg-primary bg-opacity-80 flex flex-col md:flex-row justify-between items-center fixed px-4 pt-3 pb-3 top-0 z-10 backdrop-blur-md shadow-lg md:px-10 md:pt-5 md:pb-5">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2e22e0] via-[#cb03f3] to-[#e02aff]"></div>
  
    {/*Mobile View*/}
    <div className="flex justify-center gap-x-5 items-center w-full md:hidden mt-4">
      <div className="flex items-center">
        <img
          src="/assets/avatar.jpg"
          alt="Profile Image"
          className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full transition-shadow duration-300 hover:shadow-2xl hover:shadow-purple-500"
        />
      </div>
      <button
        onClick={() =>
          window.open(
            'https://drive.google.com/file/d/141cl5A_H5nfOw5tIV8Zh9Ec01Yiz7s6e/view?usp=sharing'
          )
        }
        className="relative border-2 border-slate-700 bg-opacity-85 group-hover:border-transparent bg-slate-900 text-white text-lg py-1 px-2 md:py-2 md:px-4 rounded-xl md:text-base z-10 transition-all duration-300
        bg-clip-padding"
      >
        Résumé
      </button>
    </div>
  
    {/*Desktop View*/}
    <div className="hidden md:flex items-center space-x-4">
      <img
        src="/assets/avatar.jpg"
        alt="Profile Image"
        className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full transition-shadow duration-300 hover:shadow-2xl hover:shadow-purple-500"
      />
      <div className="relative group inline-block">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>

      <button
        onClick={() =>
          window.open(
            'https://drive.google.com/file/d/141cl5A_H5nfOw5tIV8Zh9Ec01Yiz7s6e/view?usp=sharing'
          )
        }
        className="relative border-2 border-slate-700 bg-opacity-85 group-hover:border-transparent bg-slate-900 text-white py-1 px-2 md:py-2 md:px-4 rounded-2xl text-sm md:text-base z-10 transition-all duration-300
        bg-clip-padding"
      >
        Résumé
      </button>
    </div>
    </div>
  

      {/* Navbar Links */}
      <div className="flex items-center justify-end flex-grow md:flex-grow-0 mt-3 md:mt-0">
  <nav className="flex gap-x-2 md:gap-x-4 rounded-2xl p-1 md:p-2 border-2 border-slate-700 border-opacity-50 bg-slate-900 bg-opacity-45">
    {navItems.map((item) => (
      <div key={item.name} className="relative">
        <button
          className={`relative text-white p-2 md:p-2 rounded-lg transition-all ease-in-out duration-500 overflow-hidden ${
            active === item.path || (item.path === '#contact' && active === '/')
              ? "bg-slate-700"
              : ''
          }`}
          onClick={() => {
            if (item.path === '#contact') {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            } else {
              router.push(item.path);
            }
          }}
        >
          <span className="relative z-10">{item.name}</span>
          <span className={`absolute inset-0 rounded-lg transition-opacity duration-300 ease-in-out bg-gradient-to-r from-red-400 to-yellow-400 opacity-0 group-hover:opacity-100`} />
        </button>
      </div>
    ))}
  </nav>

      </div>
    </header>
  );
}
