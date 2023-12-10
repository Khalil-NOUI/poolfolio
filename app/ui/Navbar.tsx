"use client"


import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import Logo from "../../public/images/Logo.png";

export default function Navbar() {
  const pathName = usePathname();

  const about = "< About />"
  const projects = "< Projects />"
  const home = "< Home />"
  return (
    <header className="py-6 md:px-16 px-6 border-b border-secColor z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
         <Link href="/"
         className=" text-lg font-extrabold hover:text-hghColor">
         Khalil Noui
        </Link> 
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
            <Link
                href="/"
                className=" hover:text-hghColor duration-300"
              >
                {home}
              </Link>
              </li>
              <li>
              <Link
                href="./ui/projects"
                className="hover:text-hghColor duration-300"
              >
                {projects}
              </Link>
            </li>
              <li>
              <Link
                href="./ui/about"
                className=" hover:text-hghColor duration-300"
              >
                {about}
              </Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}