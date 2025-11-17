// layout.tsx
import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/authContext";
import type { Metadata } from "next";
import {
  Montserrat
} from "next/font/google";
import "./globals.css";

const inter = 
Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinical Psychology Assessment",
  description: "A test designed to identify and tackle the imposter syndrome.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
          <Toaster />
      </body>
    </html>
  );
}
