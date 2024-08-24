import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/authContext";

const inter = Inter({ subsets: ["latin"] });

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
        <Header/>
        {children}
        <Footer />
        </AuthProvider>
        </body>
    </html>
  );
}
