'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Page() {
  const router = useRouter();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Self Comparison</h1>
        <h2 className="text-lg text-gray-500 font-semibold">Compassion to self- Because self-love is needed</h2>
        <span className="block font-bold text-gray-800">To show compassion to self is to care for self</span>
        <p className="text-gray-600 italic mb-6 mt-4">
          “the awareness that arises from paying attention, on purpose, in the present moment and non-judgmentally.”
          <span className="block font-bold">- Jon Kabat-Zinn</span>
        </p>
        
        <h3 className="text-xl text-gray-900 font-semibold">Mindfulness</h3>
        <p className="text-gray-700 mb-4">Let's start the 6 task challenge</p>
        <p className="text-gray-600 mb-6">
          We are going to try 6 mindfulness exercises that you may succeed with – 
          the techniques are adopted from 
          <span className="font-semibold text-black"> Lane Pederson, Cortney Sidwell Pederson’s 73 MINDFULNESS EXERCISES FOR CLINICIANS and CLIENTS</span>
        </p>
        
        <div className="flex space-x-4 mb-8">
          <div className="bg-blue-200 rounded-md flex-row flex justify-center items-center p-2 gap-2">
            <img src="./drive.png" className="w-5 h-5"/>
            <p>Name</p>
          </div>
          
          <div className="bg-blue-200 rounded-md flex-row flex justify-center items-center p-2 gap-2">
            <img src="./drive.png" className="w-5 h-5"/>
            <p>Name</p>
          </div>
          
        </div>
        
        <p className="font-semibold text-teal-900 mb-8">Practice stamps to be given on completion</p>

        <p className="font-bold text-xl text-teal-900 mt-8 text-center">Great you have completed the task! Cheers</p>
        <p className="text-gray-600 mt-4 italic text-center">
          Having Compassion for yourself means that you honor and accept your Humanness.
          <span className="block mt-2 text-center font-bold text-black">- Kristen Neff</span>
        </p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <Button
          onClick={()=> router.push(`/post-stage?origin=6`)}
          className="bg-teal-900 text-white py-2 rounded-lg flex items-center justify-center hover:bg-teal-700 my-4 px-6 text-lg"
        >
          Submit
        </Button>
        <p className="font-light text-slate-500 text-sm mt-3 cursor-pointer">Report a problem?</p>
        <Button
          onClick={() => router.push('/dashboard')}
          variant="outline"
          className="border-2 border-teal-900 mt-2"
        >
          Back to Home Page
        </Button>
      </div>
    </div>
  );
}
