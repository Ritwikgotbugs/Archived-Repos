'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isMounted, setIsMounted] = useState(false);

  const stages = [
    { stage: 1, nextRoute: '/feelings' },
    { stage: 2, nextRoute: '/success' },
    { stage: 3, nextRoute: '/perfectionism' },
    { stage: 4, nextRoute: '/let-downs' },
    { stage: 5, nextRoute: '/self-compassion' },
    { stage: 6, nextRoute: '/acceptance' },
    { stage: 7, nextRoute: '/dashboard' },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const currentStageNumber = parseInt(searchParams.get('origin') || '1');
  const currentStage = stages.find((s) => s.stage === currentStageNumber);

  if (!currentStage) {
    router.push('/dashboard');
    return null;
  }

  const nextStage = stages.find((s) => s.stage === currentStageNumber );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Great Test!</h1>
      <p className="text-gray-600 mb-6">lorem ipsum lorem ipsum</p>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
      {nextStage && nextStage.stage !== 7 && (
          <button
            className="flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition"
            onClick={() => router.push(nextStage.nextRoute)}
          >
            Continue to Stage {nextStage.stage + 1} &rarr;
          </button>
        )}
        <button
          className="flex items-center justify-center px-6 py-3 border border-teal-600 text-teal-600 font-medium rounded-lg hover:bg-teal-100 transition"
          onClick={() => router.push('/dashboard')}
        >
          &larr; Back to Navigation
        </button>
      </div>

      <div className="max-w-xl text-center text-gray-600 mb-8">
        <p className="font-bold text-black mb-2">NOTE:</p>
        <p>
          When an individual starts the training, they have 30 days to finish or it resets. Once they finish the program, they have access for 15 days. Then the database is reset.
        </p>
      </div>

      <button className="flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition">
        Download Data &darr;
      </button>
    </div>
  );
}
