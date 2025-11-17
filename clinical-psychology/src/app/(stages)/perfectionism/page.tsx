'use client';

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function page() {
  const router = useRouter();
  
  const checklistItems = [
    'Unrealistic goal',
    'Self-critic',
    'Results matter no matter what',
    'Fear of failure',
    'Overwhelm',
    'Procrastination',
    'Worry',
    'Disappointment',
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center justify-center">
      <div className="w-full p-6">
        <h1 className="text-3xl font-bold mb-2">Perfectionism</h1>
        <h3 className="text-gray-600 mb-2 font-semibold">
          The P Effect - it does tire us at times.
        </h3>
        <p className="">
          Let's play a game:
        </p>
        <p className="mb-4">
        Time-based game – create something like Pac-Man, but time-limited.
        </p>
        <h3 className="mb-2 font-semibold text-xl">
          Score
        </h3>
        <p className="mb-4">
        Perfectionism is a personality characteristic, which is defined as “striving for flawlessness and setting exceedingly high standards for performance, accompanied by tendencies for overly critical evaluations” (Stoeber, 2011).
        </p>
        
        <h2 className="text-xl font-semibold mb-3">So Let’s Begin</h2>
        
        <div className="mb-8">
      <h3 className="font-bold mb-2">STEP-1: Identifying P in you</h3>
      <p className="mb-2">Kindly check what applies to you:</p>
      <div className="ml-4 mb-4">
        {checklistItems.map((item, index) => (
          <label key={index} className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            {item}
          </label>
        ))}
      </div>
      </div>

        <div className="mb-8">
          <h3 className="font-bold mb-2">STEP-2: We also have an E</h3>
          <p className="mb-2">
            Expectations are the strong belief that something will happen or be the case. More than anything else, our expectations determine our reality. And our expectations also impact those around us. Harutyunyan, N. (2022)
          </p>
          <p className="italic mb-4">“Your attitude is an expression of your values, beliefs, and expectations” – Brain Tracy</p>
          <p className="mb-2">
             Now let's play word finder – below are a list of stems or words as E and P 
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="bg-teal-100 p-3 rounded-md shadow-sm w-full sm:w-1/2">
              <h4 className="font-semibold">P</h4>
              <p>Extrinsically motivated, Want to please others, Anxiety, Low self-esteem, Stress, Overly Cautious, Negative self-talk</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-md shadow-sm w-full sm:w-1/2">
              <h4 className="font-semibold">E</h4>
              <p>Intrinsic motivation, self-satisfaction, Autonomy, Accountability, Personal Growth, High self-esteem</p>
            </div>
          </div>
          <p className="mb-2">
             Hmm did you get it all right !!!
             Let's give us a cheer 👏
          </p>
        </div>

        <div className="mb-8">
          <h3 className="font-bold mb-2">STEP-3: Open KD</h3>
          <p className="mb-2 font-bold">Think of any recent task you have done:</p>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Listen to self – when thinking of getting tasks done right</li>
            <li>Set small realistic goals – measure the distance from starting a task to ending one.
            (you can also do this with other completed tasks to practice effort and appreciation in you- practice     makes perfect)</li>
            <li>Don’t be afraid of failure – Failures are stepping stones to success -Arianna Huffington. Define your failure enhances your ability to build on success. Its easier to face them when writing them.</li>
            <li>Relax and go with the follow – pick a time later to work out the doubts it better recognized and solves. Till then go with it</li>
          </ul>
          <p className="italic text-center mt-10">“The goal is progress not perfection” – <b>Kathy Freston</b></p>
        </div>

        <div className="bg-teal-700 p-6 rounded-lg shadow-inner mb-2 text-white">
          <h2 className="text-lg font-bold mb-2">ACTIVITY</h2>
          <p className="mb-4">Express in words or pics in your celebration of self in perfection with progress. Let's try a bit of relaxation.</p>
          <p className="mb-4">Practice Set – 10 times (Twice a day)</p>
          <textarea className="w-full p-3 border rounded-lg mb-4" placeholder="Write your thoughts here..."></textarea>
        </div>

      </div>
      <div className="flex items-center justify-center flex-col">
        <Button
          onClick={()=> router.push(`/post-stage?origin=4`)}
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
  )
}
