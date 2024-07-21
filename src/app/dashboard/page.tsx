import React from 'react'
import Navigation from '../../components/navigation'
export default function Dashboard() {
  return (
    <main className='w-full h-screen flex flex-row relative'>
        <Navigation/>
        <section className='flex flex-col p-10 ml-20 w-full gap-5 bg-primary'>
            <h1 className='text-4xl font-bold text-neutral-200'>Dashboard</h1>
            <div className='w-full h-80 border border-neutral-500/50 bg-neutral-800/20 rounded'/>
            <div className='w-full flex flex-row gap-5'>
                <div className='w-1/2 h-80 border border-neutral-500/50 bg-neutral-800/20 rounded'/>
                <div className='w-1/2 h-80 border border-neutral-500/50 bg-neutral-800/20 rounded'/>
            </div>
        </section>
    </main>
  )
}
