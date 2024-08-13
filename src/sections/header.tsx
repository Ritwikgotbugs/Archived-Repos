'use client';

import React from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  const [activeLink, setActiveLink] = React.useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
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
          <a
            href="#"
            className={`text-white hover:text-gray-300 ${activeLink === 'About' ? 'text-purple' : 'text-white'}`}
            onClick={() => handleLinkClick('About')}
          >
            About
          </a>
          <a
            href="#"
            className={`text-white hover:text-gray-300 ${activeLink === 'Projects' ? 'text-purple' : 'text-white'}`}
            onClick={() => handleLinkClick('Projects')}
          >
            Projects
          </a>
          <a
            href="#"
            className={`text-white hover:text-gray-300 ${activeLink === 'Skills' ? 'text-purple' : 'text-white'}`}
            onClick={() => handleLinkClick('Skills')}
          >
            Skills
          </a>
          <a
            href="#"
            className={`text-white hover:text-gray-300 ${activeLink === 'Contact' ? 'text-purple' : 'text-white'}`}
            onClick={() => handleLinkClick('Contact')}
          >
            Contact
          </a>
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
