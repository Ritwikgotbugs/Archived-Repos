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
    { name: 'Experience', path: '/experiences' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header className="w-full text-white bg-primary bg-opacity-80 flex justify-between items-center fixed px-10 pt-5 pb-5 top-0 z-10 backdrop-blur-md shadow-lg">
      {/* Avatar */}
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Profile Image" />
      </Avatar>

      {/* Navigation */}
      <div className="flex items-center justify-center flex-grow">
        <nav className="flex gap-x-4 rounded-2xl p-2 border-2 border-purple-700 bg-gray-700 bg-opacity-45">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`text-white hover:text-gray-300 p-2 rounded-lg ${
                active === item.path || (item.path === '#contact' && active === '/')
                  ? 'bg-purple-700'
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
        <button className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-full">
          Resume
        </button>
      </div>
    </header>
  );
}
