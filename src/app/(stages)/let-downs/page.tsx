'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';

export default function LetDowns() {
  const Router = useRouter();
  return (
    <>
      <div onClick={() => Router.back()} className=''>
        <IoIosArrowRoundBack className='text-4xl cursor-pointer bg-teal-500 rounded-full inline-block p-1 text-white relative mx-4 mt-4' />
      </div>
      <div className="max-w-4xl w-full px-10 pb-10 justify-center items-center md:items-start flex flex-col mx-auto">
        <h1 className="text-3xl font-bold mb-4 mt-5 md:mt-0">Failure</h1>
        <h2 className="text-xl font-semibold text-slate-500 mb-2">The let downs - gives us steps to stand on</h2>
        <p className="text-gray-800 mb-6 text-left">
          Failure is defined as the gap between what is expected or desired and what is actually
          experienced - Henry et al 2019.
          <br />
          So today we are learning on the go so let's learn a few definitions.
        </p>
        <h3 className="text-lg font-semibold text-gray-700 mb-2 text-left">Based on mindset theory:</h3>
        <ul className="list-disc list-inside text-gray-800 mb-6 text-left md:px-5">
          <li><strong>Individuals have a fixed mindset</strong> - they believe that intelligence and capacity for specific abilities are unchangeable traits. (Dweck, 2000, 2006)</li>
          <li><strong>Those with growth mindset</strong> - believing that these qualities are malleable and that the brain and our abilities can grow over time and through effort. (Dweck, 2000, 2006)</li>
          <li><strong>Performance</strong> - Individuals with those with a performance goal orientation, appearing competent to those around them is the central motivating factor. - (Henry et al 2019)</li>
          <li><strong>Mastery</strong> - Individuals with mastery goal orientations are motivated by a desire to achieve competence in a task.(Henry et al 2019)</li>
        </ul>
        <p className="text-gray-800 text-left">
          Let's start the journey of self-discovery: the following is adapted from (Henry, M. A., Shorter, S., Charkoudian, L., Heemstra, J. M., & Corwin, L. A. (2019). FAIL is not a four-letter word: A theoretical framework for exploring undergraduate students' approaches to academic challenge and responses to failure in STEM learning environments. CBE—Life Sciences Education, 18(1), ar11.)
        </p>
        
      </div>
      <div className='flex items-center justify-center flex-col mt-10 mb-10'>
          <Button onClick={() => Router.push('/post-stage?origin=5')} className="bg-teal-900 text-white py-2 rounded-lg flex items-center justify-center hover:bg-teal-700 my-4 px-6 text-lg"> Submit</Button>
          <p className='font-light text-slate-500 text-sm mt-3 cursor-pointer'>Report a problem?</p>
          <Button onClick={() => Router.push('/')} variant={'outline'} className='border-2 border-teal-900 mt-2'>Back to Home Page</Button>
        </div>
    </>
  );
}
