import React from 'react';

export default function Footer(){
  return (
    <footer className="w-full bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
};

