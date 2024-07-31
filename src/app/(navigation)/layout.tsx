import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navigation from '@/components/navigation';

interface DashboardProps {
  children: React.ReactNode;
}

export default function Layout({ children }: DashboardProps) {
  return (
    <div className="flex h-screen bg-primary hide-scrollbar">
      <Navigation />
      <div className="flex flex-col flex-grow">
        <Header page={'Page'} />
        <main className="flex-grow p-5 ml-20 bg-primary">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
