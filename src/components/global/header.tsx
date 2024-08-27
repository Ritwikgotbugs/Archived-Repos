'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { useAuth } from '@/context/authContext';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Header: React.FC = () => {
  const { isLoggedIn, username, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <div className="flex justify-between items-center p-4 bg-teal-800">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {isLoggedIn && (
          <span className='text-xl text-white'>Welcome, {username}</span>
        )}
      </div>
      <div className="flex items-center">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => router.push('/signup')}
              className="bg-teal-700 text-white py-2 px-4 rounded"
            >
              Sign Up
            </button>
            <button
              onClick={() => router.push('/login')}
              className="bg-white text-black py-2 px-4 rounded"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
