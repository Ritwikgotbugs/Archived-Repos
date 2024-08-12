'use client';

import { Outfit } from "next/font/google";
import { useRouter } from "next/navigation";
const font = Outfit({
  weight: ["400"],
  subsets: ["latin"],

});
export default function Home() {
  const router = useRouter();
  
  return (
    <main className="flex h-full flex-col items-center justify-center bg-primary">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl text-white font-bold">Auth</h1>
        <p className="font-medium text-white text-xl">Robust Authentication system</p>
        <button onClick={()=> router.push('/login')} className="bg-white text-primary text-lg font-medium px-6 py-2 rounded-lg">Get Started</button>
        <div>
        </div>
      </div>
    </main>
  );
}
