'use client';

import React, { useState, useEffect } from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
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
    <header className="w-full text-white bg-primary bg-opacity-80 flex justify-between items-center fixed px-10 pt-5 pb-5 top-0 z-10 backdrop-blur-md shadow-lg">
      {/* Avatar */}
      <div className="flex justify-center items-center">
      <img
        src="/assets/avatar.jpg"
        alt="Profile Image"
        className="w-12 h-12 object-cover rounded-full transition-shadow duration-300 hover:shadow-2xl hover:shadow-purple-500"
      />
    </div>

      {/* Navigation */}
      <div className="flex items-center justify-center flex-grow">
        <nav className="flex gap-x-4 rounded-2xl p-2 border-2 border-purple-700 border-opacity-50 bg-gray-700 bg-opacity-45">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`text-white hover:text-gray-300 p-2 rounded-lg transition-all ease-in-out duration-500 ${
                active === item.path || (item.path === '#contact' && active === '/')
                  ? 'bg-purple-700 bg-opacity-60'
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

      {/* Download Resume */}
      <div className="ml-auto">
        <button  onClick={()=> window.open('https://drive.google.com/file/d/1AKnbTWpjwM3Y-FbzDRQSUNUi2p2eL23R/view?usp=sharing')} className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-full">
        Résumé
        </button>
      </div>
    </header>
  );
}
