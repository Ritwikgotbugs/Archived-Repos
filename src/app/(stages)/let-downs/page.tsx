 'use client';
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

  return (
    <div className="min-h-screen py-10 px-4 bg-white mx-40">
      {/* Main header section */}
      <div className="p-6 mb-8  bg-white text-justify">
        <h1 className="text-5xl font-bold text-black mb-2">Failure</h1>
        <p className="text-3xl font-semibold text-gray-600 ">
          The let downs - gives us step to stand on
        </p>
        <p className="text-black ">
          Failure is defined as the gap between what is expected or desired and what is actually experienced – Henry et al 2019.
        </p>
        <p className="text-black mb-4">
          So today we are learning on the go, so let’s learn a few definitions:
        </p>
        
        <div className="space-y-4">
          <p className="font-bold">Based on mindset theory:</p>
          
          <p className="text-black">
            Fixed Mindset- Individuals have a fixed mindset—they believe that intelligence and capacity for specific abilities are unchangeable traits. (Dweck, 2000, 2006)



            Growth Mindset - Those with a growth mindset believe that these qualities are malleable and that the brain and our abilities can grow over time and through effort. (Dweck, 2000, 2006)


            Performance - Individuals with a performance goal orientation, appearing competent to those around them is the central motivating factor. (Henry et al 2019)
          

          
            Mastery - Individuals with mastery goal orientations are motivated by a desire to achieve competence in a task. (Henry et al 2019)
          </p>
        </div>

        <p className="text-black mt-6">
          Let’s start the journey of self-discovery. The following is adapted from: Henry, M. A., Shorter, S., Charkoudian, L., Heemstra, J. M., & Corwin, L. A. (2019). FALL is not a four-letter word: A theoretical framework for exploring undergraduate students’ approaches to academic challenge and responses to failure in STEM learning environments. CBE—Life Sciences Education, 18(1), ar11.
        </p>
      </div>

      {/* Word selection with multiple lists */}
      <WordSelection
        lists={[wordsList1, wordsList2]}  
        maxSelection={9}                 
        userName="defaultUser"            
      />
      <div className='flex items-center justify-center flex-col'>
<Button  className="bg-teal-900 text-white py-2 rounded-lg flex items-center justify-center hover:bg-teal-700 my-4 px-6 text-lg"> Submit</Button>
<p className='font-light text-slate-500 text-sm mt-3 cursor-pointer'>Report a problem?</p>

</div>
    </div>
  );
}
