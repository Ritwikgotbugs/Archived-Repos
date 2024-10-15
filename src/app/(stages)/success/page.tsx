'use client';
import BadgeInput from '@/components/global/badgeInput';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { IoIosArrowRoundBack } from "react-icons/io";
import { toast } from 'sonner';
import { useBadgeStore } from '../../../store';


export default function Success() {
  const router = useRouter();
  const badges = useBadgeStore((state) => state.badges);

  return (
    <>
    <div onClick={()=> router.back()} className='text-4xl cursor-pointer bg-teal-500 rounded-full inline-block p-1 text-white relative mx-4 mt-4'>
      <IoIosArrowRoundBack />
    </div>
    
    <div className="px-8 pb-8 mx-auto max-w-4xl bg-white text-black">
      <h1 className="text-3xl font-semibold mb-4">Success</h1>

      <p className="text-lg mb-6 text-slate-500 font-bold">
        Looking for S .. because it's always there .. just look harder
      </p>
      
      <p className="text-sm mb-6">
        We often forget to celebrate success either because we feel that others have to recognize it to celebrate it, in reality we alone know what's of value to us.
      </p>
      
      <h2 className="text-xl font-semibold mb-4">Methods of Celebrating Success:</h2>
      <ul className="list-decimal list-inside mb-4 space-y-4">
        <li>
          <strong>Victory Ritual</strong> – Making ritual that you carry out every time you feel you have hit a mile stone in your day or week.
        </li>
        <li>
          <strong>Start a Smile Meter</strong> – Rate your smile on a regular basis (need to design one).
        </li>
        <li>
          <strong>Rewarding Self</strong> – It's important to reward yourself even with a little joy once in a while when you have given it your best in things or have completed a task no matter how strong they are.
        </li>
      </ul>

      <h3 className="text-md font-semibold mb-2 text-slate-800 pt-3">Write three ways to reward yourself <span className='text-red-500 font-bold'>*</span></h3>
      <BadgeInput/>

      <div className="bg-teal-700 text-white p-6 rounded-lg">
        <h2 className="text-4xl font-light mb-4">ACTIVITY</h2>
        <p className="mb-4 italic">
          Do one of them on the list and post a picture
        </p>

        <h3 className="text-lg font-semibold mb-2">How to make sure you do this 🙂</h3>
        <li>Step 1 - Your thoughts on success</li>
        <li>Step 2 – Recognize accomplishment and skill in you, however small – challenge anything that says otherwise.</li>

        
        <p className="text-sm mb-4 mt-2">
          Let's try <strong>(Open KD)</strong>:
        </p>

        <ol className="list-decimal list-inside gap-y-1 mb-4">
          <li>Try to write an ability</li>
          <li>Write the negative that you feel about you having the ability</li>
          <li>Now use both and write a statement that challenges statement b using a as the strength.</li>
        </ol>
        <strong>(The task may be silly but it sets a thought practice for bigger obstacles/negative tasks)</strong>

        <p className="text-sm font-semibold mt-5">
          TRY YOUR SMILE METER NOW!
        </p>
      </div>
      <div className='flex items-center justify-center flex-col'>
        {badges.length == 3 ? (
            <Button onClick={()=> router.push('/post-stage?origin=3')} className="bg-teal-900 text-white py-2 rounded-lg flex items-center justify-center hover:bg-teal-700 my-4 px-6 text-lg"> Submit</Button>
        ):(
            <Button onClick={()=> toast.info('Please fill all the fields')} className="bg-teal-900 text-white py-2 rounded-lg flex items-center justify-center hover:bg-teal-700 my-4 px-6 text-lg"> Submit</Button>
        ) }
        
        <p className='font-light text-slate-500 text-sm mt-3 cursor-pointer'>Report a problem?</p>
        <Button onClick={()=> router.push('/')} variant={'outline'} className='border-2 border-teal-900 mt-2'>Back to Home Page</Button>

    </div>
    </div>
    </>
  );
}

