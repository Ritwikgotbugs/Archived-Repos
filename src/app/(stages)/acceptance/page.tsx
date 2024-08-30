'use client';

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
 const router = useRouter();
  return (
    <Button onClick={()=> router.push('/post-stage?origin=7')} className="bg-teal-900 text-white py-2 rounded-lg flex items-center justify-center hover:bg-teal-700 my-4 px-6 text-lg"> Submit</Button>
  )
}
