'use client';

import React, { useEffect, useState } from 'react'
import {motion, useAnimation} from 'framer-motion'
import NavigationLinks from './nav-links';
import { ChartBarIcon } from '@heroicons/react/20/solid';


const NavVariants = {
    open: {
        width: '16rem',
        transition: {
            type: 'spring',
            damping: 15,
            duration: 0.1,
        }
    },
    close: {
        width: '5rem',
        transition: {
            type: 'spring',
            damping: 15,
        }
    }

}

const closeVariants = {
    open: {
        rotate:180
    },
    close: {
        rotate:360
    }
}
export default function Navigation() {
  const [isOpen, Setisopen]= useState(false)

  const controls = useAnimation()
  const svgControls = useAnimation()
  useEffect(()=>{
        if(isOpen){
            controls.start('open')
            svgControls.start('open')
        }else{
            controls.start('close')
            svgControls.start('close')
        }
  }, [isOpen])


  const handleOpen = () => {
    Setisopen(!isOpen)
  }

  return (
    <motion.nav 
    variants={NavVariants}
    animate={controls}
    initial='close'
    className='bg-neutral-900 flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600'>
        <div className='flex flex-row w-full justify-between place-items-center'>
            <div className='w-10 h-10 bg-orange-200 rounded-full'/>
            <button className='p-1 rounded-full flex' onClick={()=> handleOpen()}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w=8 h-8 stroke-neutral-200">
                <motion.path strokeLinecap="round" 
                strokeLinejoin="round" 
                variants={closeVariants}
                animate={svgControls}
                transition={{
                    duration:0.1,
                    ease: 'easeInOut'
                }
                
                }
                d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </button>
        </div>
        <div className='flex flex-col gap-3'>
            <NavigationLinks name='Dashboard'>
                <ChartBarIcon className='stroke-inherit stroke-[0.75] min-w-6 w-6'/>
            </NavigationLinks>
        </div>
    </motion.nav>
  )
}
