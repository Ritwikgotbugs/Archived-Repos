'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  const stages = [
    { stage: 1, route: '/FactorPage', nextRoute: '/success' },
    { stage: 2, route: '/success', nextRoute: '/stage-3' },
    { stage: 3, route: '/stage-3', nextRoute: '/stage-4' },
    { stage: 4, route: '/stage-4', nextRoute: '/stage-5' },
    { stage: 5, route: '/stage-5', nextRoute: '/stage-6' },
    { stage: 6, route: '/stage-6', nextRoute: '/stage-7' },
    { stage: 7, route: '/stage-7', nextRoute: '/dashboard' },
  ];

  const currentStage = stages.find((s) => s.route === router.pathname);

  useEffect(() => {
    if (currentStage?.route === '/FactorPage') {
      router.push('/success');
    }
  }, [currentStage, router]);

  const nextStageLabel =
    currentStage?.nextRoute === '/dashboard'
      ? 'Dashboard'
      : `Stage ${currentStage ? currentStage.stage + 1 : ''}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Great Test!</h1>
      <p className="text-gray-600 mb-6">lorem ipsum lorem ipsum</p>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <button
          className="flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition"
          onClick={() => currentStage?.nextRoute ? router.push(currentStage.nextRoute) : null}
        >
          Continue to {nextStageLabel} &rarr;
        </button>
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
          When an individual starts the training, he or she has 30 days to finish or it resets. Once someone finishes the program, he or she has access for 15 days. Then the database is reset.
        </p>
      </div>

      <button
        className="flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition"
      >
        Download Data &darr;
      </button>
    </div>
  );
}
