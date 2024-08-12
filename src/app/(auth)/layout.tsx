import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';

interface AuthProps {
  children: React.ReactNode;
}

export default function Layout({ children }: AuthProps) {
  return (
    <div className="flex h-screen bg-primary hide-scrollbar">
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
