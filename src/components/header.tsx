import React from 'react';

interface HeaderProps {
  page: string;
}

export default function Header({ page }: HeaderProps) {
  return (
    <header className="w-full bg-primary text-white flex justify-between items-center pl-20 fixed top-0 z-10 shadow shadow-neutral-800">
      <div className='w-full px-3 py-3 justify-end place-content-end flex gap-x-3'>
        <div className='w-10 h-10 bg-orange-200 rounded-full'/>
        <div className='w-10 h-10 bg-orange-200 rounded-full'/>
      </div>
    </header>
  );
};
