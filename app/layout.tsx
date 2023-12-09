import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  
  title: "Khalil NOUI",
  description: "a Web Developer blending tech and sustainability. Specializing in Next.js, React, and JavaScript, crafting user-friendly applications. Committed to positive impact through innovative digital solutions",
  keywords: ["Portfolio", "personel", "web", "Developer" ],
  
};


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-700 text-orange-200`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
