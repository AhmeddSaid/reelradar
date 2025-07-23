"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Loader from "../components/Loader";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/favorites", label: "Favorites" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center justify-center text-white sm:justify-between sm:px-10 md:flex-row lg:px-20 xl:px-40">
      <Link href="/">
        <div className="relative cursor-pointer">
          <div className="absolute left-0 top-0 hidden h-full w-full items-center justify-center sm:flex">
            <Loader />
          </div>
          <Image
            src="/assets/images/reelradar-logo.png"
            alt="ReelRadar Logo"
            width={150}
            height={50}
            className="pointer-events-none relative z-10 mx-auto my-4 cursor-pointer"
          />
        </div>
      </Link>

      <div className="mx-auto my-4 flex items-center justify-center gap-10 text-center sm:mx-0">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${pathname === link.href ? "active" : ""}`}
          >
            <span data-text={link.label}>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
