'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";




export default function HomeSkeleton() {
  const router = useRouter();

  useEffect(() => {
    router.push('/about');
  }, [router]);
  return (
    <div className="bg-primary h-full w-full"/>
      
  );
}
