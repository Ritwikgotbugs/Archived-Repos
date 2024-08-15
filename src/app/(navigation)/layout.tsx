'use client';
import { Contact } from '@/sections/contact';
import Header from '@/sections/header';
import React from 'react';

interface DashboardProps {
  children: React.ReactNode;
}

export default function Layout({ children }: DashboardProps) {
  return (
    <div className="flex h-screen bg-primary">
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="flex bg-primary mt-10">
          {children}
        </main>
        <Contact />
      </div>
    </div>
  );
}
