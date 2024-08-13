import Footer from '@/sections/footer';
import Header from '@/sections/header';
import React from 'react';

interface DashboardProps {
  children: React.ReactNode;
}

export default function Layout({ children }: DashboardProps) {
  return (
    <div className="flex h-screen bg-primary hide-scrollbar">
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="flex-grow p-5 bg-primary mt-5">
          {children}
        </main>
      </div>
    </div>
  );
}
