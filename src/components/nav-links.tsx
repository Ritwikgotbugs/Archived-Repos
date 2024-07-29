import React from 'react';


interface NavProps {
    children: React.ReactNode;
    name: string;
    onClick?: () => void;
}
export default function NavigationLinks({children,name,onClick} : NavProps) {
  return (
    <a onClick={onClick}
    className='flex p-2 rounded-full cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-500 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100 shrink-0'>
        {children}
        <p className='text-inherit font-poppins group-data-[collapsed=false]:hidden overflow-clip whitespace-nowrap tracking-wide'>
            {name}
        </p>
    </a>
  )
}
