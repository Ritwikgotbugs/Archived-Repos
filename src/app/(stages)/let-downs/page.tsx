'use client';
import { useEffect, useState } from 'react';
import WordSelection from '@/components/global/WordSelection';
import { Button } from '@/components/ui/button';

export default function Home() {
  const wordsList1 = [
    'Pessimistic', 'Depressed', 'Reduced Effort', 'Gloomy', 'Doubtful',
    'Confident', 'Bright', 'Encouraging', 'Lead', 'Motivation', 'Driven',
    'Reassuring', 'Lethargy', 'Optimistic', 'Prompt'
  ];

  const wordsList2 = [
    'Escape', 'Resistance', 'Defiance', 'Problem Solving', 'Helpless',
    'Vulnerable', 'Sensitive', 'Feeble', 'Opposition', 'Perceptive',
    'Reframing Your Thoughts', 'Convincing Support Seeking'
  ];

  const [attendance, setAttendance] = useState<string[]>([]);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  // Load attendance from localStorage
  useEffect(() => {
    const storedAttendance = JSON.parse(localStorage.getItem('attendance') || '[]') || [];
    setAttendance(storedAttendance);
    if (storedAttendance.length >= 7) {
      setIsSubmitEnabled(true);
    }
  }, []);

  // Mark attendance for the day
  const markAttendance = () => {
    if (attendance.length < 7) {
      const newAttendance = [...attendance, new Date().toISOString().split('T')[0]];
      setAttendance(newAttendance);
      localStorage.setItem('attendance', JSON.stringify(newAttendance));
      if (newAttendance.length >= 7) {
        setIsSubmitEnabled(true);
      }
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 md:px-10 bg-white max-w-screen-lg mx-auto">
      <div className="p-6 mb-8 bg-white text-justify">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">Failure</h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 mb-4">
          The let downs - gives us step to stand on
        </p>
        <p className="text-base sm:text-lg md:text-xl text-black mb-4">
          Failure is defined as the gap between what is expected or desired and what is actually experienced – Henry et al 2019.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-black mb-4">
          So today we are learning on the go, so let’s learn a few definitions:
        </p>

        <div className="space-y-4">
          <p className="font-bold text-base sm:text-lg md:text-xl">Based on mindset theory:</p>
          <p className="text-black text-base sm:text-lg md:text-xl">
            Fixed Mindset - Individuals have a fixed mindset—they believe that intelligence and capacity for specific abilities are unchangeable traits. (Dweck, 2000, 2006)
          </p>
          <p className="text-black text-base sm:text-lg md:text-xl">
            Growth Mindset - Those with a growth mindset believe that these qualities are malleable and that the brain and our abilities can grow over time and through effort. (Dweck, 2000, 2006)
          </p>
          <p className="text-black text-base sm:text-lg md:text-xl">
            Performance - Individuals with a performance goal orientation, appearing competent to those around them is the central motivating factor. (Henry et al 2019)
          </p>
          <p className="text-black text-base sm:text-lg md:text-xl">
            Mastery - Individuals with mastery goal orientations are motivated by a desire to achieve competence in a task. (Henry et al 2019)
          </p>
        </div>

        <p className="text-black text-base sm:text-lg md:text-xl mt-6">
          Let’s start the journey of self-discovery. The following is adapted from: Henry, M. A., Shorter, S., Charkoudian, L., Heemstra, J. M., & Corwin, L. A. (2019). FALL is not a four-letter word: A theoretical framework for exploring undergraduate students’ approaches to academic challenge and responses to failure in STEM learning environments. CBE—Life Sciences Education, 18(1), ar11.
        </p>
      </div>

      <WordSelection lists={[wordsList1, wordsList2]} maxSelection={9} userName="defaultUser" />

      <div className="flex items-center justify-center flex-col mt-8">
        <Button
          onClick={markAttendance}
          className="bg-teal-900 text-white py-2 rounded-lg flex items-center justify-center hover:bg-teal-700 my-4 px-6 text-lg w-full sm:w-auto"
          disabled={attendance.includes(new Date().toISOString().split('T')[0]) || isSubmitEnabled}
        >
          Mark Attendance
        </Button>
         <p className="text-gray-700 text-sm mt-2">
          You need to complete this activity for 7 days to move forward.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Current Progress: {attendance.length} / 7 days
        </p>
        <Button
          className={`bg-teal-900 text-white py-2 rounded-lg flex items-center justify-center hover:bg-teal-700 my-4 px-6 text-lg w-full sm:w-auto ${isSubmitEnabled ? '' : 'opacity-50 cursor-not-allowed'}`}
          disabled={!isSubmitEnabled}
        >
          Submit
        </Button>
        <p className="font-light text-slate-500 text-sm mt-3 cursor-pointer">
          Report a problem?
        </p>
      </div>
    </div>
  );
}
