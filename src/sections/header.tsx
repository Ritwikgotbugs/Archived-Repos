'use client';

import React from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {useRouter} from 'next/navigation';


export default function Header() {

  const router = useRouter();

  const toSection = (path: string) => {
    document.getElementById(path.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="w-full text-white bg-primary flex justify-between items-center px-10 py-8 fixed top-0 z-10">
      {/* Avatar */}
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Profile Image" />
      </Avatar>

      {/*Navigation*/}
      <div className="flex items-center justify-center flex-grow">
        <nav className="flex gap-x-8 py-3 px-5 rounded-2xl border-2 border-purple-700 bg-gray-700 bg-opacity-45">
          <button
            className={`text-white hover:text-gray-300`}
            onClick={() => toSection('/about')}
          >
            About
          </button>
          <button
            className={`text-white hover:text-gray-300 `}
            onClick={() => toSection('/projects')}
          >
            Projects
          </button>
          <button
            className={`text-white hover:text-gray-300 `}
            onClick={() => toSection('/skills')}
          >
            Skills
          </button>
          <button
            className={`text-white hover:text-gray-300`}
            onClick={() => toSection('/contact')}
          >
            Contact
          </button>
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
