
// components/Navbar.tsx
import React from 'react';

interface NavbarProps {
  isLoggedIn: boolean;
  username?: string;
}

const header: React.FC<NavbarProps> = ({ isLoggedIn, username }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-teal-800 rounded-lg mx-2">
      <div className="w-12 h-12 bg-[brown]"></div> {/* Logo Placeholder */}
      <div className="flex items-center">
        {isLoggedIn ? (
          <div className="flex items-center text-white">
            <span className="mr-2">👤</span>
            <span>Hi, {username}</span>
          </div>
        ) : (
          <div className="flex gap-2">
            <button className="bg-teal-700 text-white py-2 px-4 rounded">
              Sign Up
            </button>
            <button className="bg-white text-black py-2 px-4 rounded">
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default header;


