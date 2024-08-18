import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ritwik - Software Developer",
  description: "Ritwik Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/avatar-2.jpg"/>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        </body>
    </html>
  );
}
