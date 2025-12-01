"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Logo centered */}
        <div className="flex flex-col items-center">
          <Link href="/" className="hover:opacity-80 transition">
            <div className="relative w-68 h-32 -mt-10"> {/* Adjust width/height as needed */}
              <Image
                src="/composer-site-logo2.svg"
                alt="MENA // Scores logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Link>

          <div className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-600 text-center">
            Composition & Production for film, TV & Marketing
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm uppercase tracking-[0.15em] text-neutral-700">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-black transition ${
                  isActive ? "text-black" : "text-neutral-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
