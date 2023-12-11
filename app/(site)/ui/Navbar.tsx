
import Image from "next/image";
import Link from "next/link";
import NavLinks from '../lib/navLinks';

export default function Navbar() {
  const kn = "< KN />"
  return (
    <header className="py-5 md:px-16 px-6 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
         <Link href="/"
         className="text-xl font-extrabold ">
          {/* <Image 
          src="/logo.png"
          width={40}
          height={40}
          className='hidden md:block'
          alt='Logo'/> */}
          {kn}
        </Link>
        <nav>
         <NavLinks />
        </nav>
      </div>
    </header>
  );
}