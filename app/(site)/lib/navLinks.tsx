"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {clsx} from "clsx"
export default function NavLinks() {
    const pathName = usePathname()
    const links = [
        {
            "name":"< Home />",
            "href":"/",
        },
        {
            "name":"< Projects />",
            "href":"/projects",
        },
        {
            "name":"< About />",
            "href":"/about",
        },]
    return (
      <>
      <ul className = "flex items-center gap-x-8">
        {links.map((link) => {
 
          return (
            <Link
              key={link.name}
              href={link.href}
              className = {clsx(" hover:text-hghColor font-bold duration-300", {
                "text-hghColor" : pathName === link.href})
              }
            >
            {link.name}
            </Link>
            
          );
        })}
        </ul>
      </>
    );
  }