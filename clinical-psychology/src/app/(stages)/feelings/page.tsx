'use client';

import CheckboxGroup from '@/components/global/feelings_checkbox';
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Page() {
  const router = useRouter();
  
  const words = [
    "Insecure",
    "Lacks Self-Belief",
    "Lacking Confidence",
    "Mistrust Ones Ability",
    "Question One Self",
    "Doubting Oneself",
    "Low-Self-Esteem",
  ];
  const fearOfBeingDiscovered = [
    "I Don't Deserve",
    "Lack Of Skills",
    "Ashamed",
    "I'm A Fraud",
    "Incompetent",
    "Pretender",
    "Unqualified"
  ];
  
  const attributingSuccess = [
    "Others Are Doing More",
    "Good Timing",
    "Anyone Could Do It",
    "I Happened By Chance",
    "I Have Luck",
    "It's Part Of The Job",
    "Others Are Doing More"
  ];
  
  const perfectionismOne = [
    "Need To Finish Perfectly",
    "It's Not Enough",
    "Anyone Could Do It",
    "I Should Prove My Worth",
    "I Don't Trust Me",
    "I Can't Afford Mistakes",
    "I Need To Stay Ahead In The Game"
  ];
  

  const decreasedSatisfaction = [
    "Disengaged",
    "Frustrated",
    "Stagnant",
    "Unfulfilled",
    "Unappreciated",
    "Uninspired",
    "Discontent",
    "Demotivated",
    "Disconnected",
    "Unhappy With My Role In Life"
  ];
  
  

  return (
    <>
    <div className='flex items-center justify-center flex-col bg-gray-100'>
    <div className='flex flex-col px-10 pt-10 max-w-3xl rounded-xl'>
      <h1 className="text-3xl font-semibold mb-2">Feelings</h1>
      <h2 className="text-xl font-semibold mb-2 text-slate-500">Feelings - The Lingering F</h2>
      <p className="text-lg mb-4 text-black">
      Now lets do some inward tracking of self – Below are few words kindly self the words that closely relate you or are in reference to you.
      </p>
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen max-w-3xl">
      
      <div className="items-center px-5">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          <CheckboxGroup title="Self Doubt" options={words} />
          <CheckboxGroup title="Fear of Being Discovered" options={fearOfBeingDiscovered} />
          <CheckboxGroup title="Attributing Success" options={attributingSuccess} />
          <CheckboxGroup title="Perfectionism" options={perfectionismOne} />
          <CheckboxGroup title="Decreased Satisfaction" options={decreasedSatisfaction} />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col mb-5">
        <Button
          onClick={()=> router.push(`/post-stage?origin=2`)}
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
    </div>
    </>
  );
}
