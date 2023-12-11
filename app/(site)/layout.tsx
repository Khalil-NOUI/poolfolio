import type { Metadata } from 'next'
import { body } from '@/app/(site)/ui/fonts';
import '@/app/globals.css'
import Navbar from "./ui/Navbar"



export const metadata: Metadata = {
  
  title: "Khalil, Web Developer and UX/UI Designer",
  description: "a Web Developer blending tech and sustainability. Specializing in Next.js, React, and JavaScript, crafting user-friendly applications. Committed to positive impact through innovative digital solutions",
  keywords: ["Portfolio", "personel", "web", "Developer" ],
  icons: {
    icon: [
      {

        url: '/favicon.ico',
        href: '/favicon.ico',
      },
    ],
  },
};


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${body.className} antialiased bg-slate-300 text-txtColor`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
