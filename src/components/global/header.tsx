'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useAuth } from '@/context/authContext';

const Header: React.FC = () => {
  const { isLoggedIn, username } = useAuth();
  const router = useRouter();

  return (
    <div className="flex justify-between items-center p-4 bg-teal-800">
      <div className="w-12 h-12 bg-teal-500 rounded-full"></div>
      <div className="flex items-center">
        {isLoggedIn ? (
          <div className="flex items-center text-white">
            <span className="mr-2">👤</span>
            <span>Hi, {username}</span>
          </div>
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
