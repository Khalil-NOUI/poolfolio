
import Image from "next/image";
import Link from "next/link";
import NavLinks from '../lib/navLinks';

export default function Navbar() {
  return (
    <header className="py-5 md:px-16 px-6 border-b border-secColor z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
         <Link href="/"
         className="text-lg font-extrabold ">
          <Image 
          src="/logo.png"
          width={50}
          height={50}
          className='hidden md:block'
          alt='Logo'/>
        </Link>
        <nav>
         <NavLinks />
        </nav>
      </div>
    </header>
  );
}