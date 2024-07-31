import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white p-4 text-center pl-20 fixed bottom-0 shadow shadow-neutral-600">
      <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
};
