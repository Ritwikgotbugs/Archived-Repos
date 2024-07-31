import React from 'react';

export default function Dashboard() {
  return (
    <div className='flex flex-col w-full h-full pt-10 pb-20 p-4 overflow-y-auto'>
      <div className='w-full h-60  my-10 rounded-xl bg-slate-800'></div>
      <div className='flex flex-wrap gap-5 place-content-evenly'>
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className='w-40 h-40  rounded-xl bg-slate-900'
          ></div>
        ))}
      </div>
    </div>
  );
}
