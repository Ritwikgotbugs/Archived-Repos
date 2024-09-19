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
      {/* Mobile View - Avatar & Resume Button */}
      <div className="flex justify-center gap-x-5 items-center w-full md:hidden">
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
              'https://drive.google.com/file/d/1vadKYROs_0LvN7R27LxN4NMSUcqlUnSH/view?usp=sharing'
            )
          }
          className="bg-purple-700 hover:bg-purple-600 text-white py-1 px-2 md:py-2 md:px-4 rounded-full text-sm md:text-base"
        >
          Résumé
        </button>
      </div>

      {/* Desktop View - Avatar & Resume Button */}
      <div className="hidden md:flex items-center space-x-4">
        <img
          src="/assets/avatar.jpg"
          alt="Profile Image"
          className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full transition-shadow duration-300 hover:shadow-2xl hover:shadow-purple-500"
        />
        <button
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1vadKYROs_0LvN7R27LxN4NMSUcqlUnSH/view?usp=sharing'
            )
          }
          className="bg-purple-700 hover:bg-purple-600 text-white py-1 px-2 md:py-2 md:px-4 rounded-full text-sm md:text-base"
        >
          Résumé
        </button>
      </div>

      {/* Navbar Links */}
      <div className="flex items-center justify-end flex-grow md:flex-grow-0 mt-3 md:mt-0">
        <nav className="flex gap-x-2 md:gap-x-4 rounded-2xl p-1 md:p-2 border-2 border-slate-700 border-opacity-50 bg-slate-900 bg-opacity-45">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`text-white hover:text-gray-300 p-2 md:p-2 rounded-lg transition-all ease-in-out duration-500 ${
                active === item.path || (item.path === '#contact' && active === '/')
                  ? "bg-purple-700"
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
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
