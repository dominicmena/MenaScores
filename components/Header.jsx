// components/Header.jsx
"use client";

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
        <div className="text-center">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight hover:opacity-80"
          >
            MENA // Scores
          </Link>
          <div className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-600">
            Composition & Production for film, TV & MARKETING
          </div>
        </div>

        <nav className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm uppercase tracking-[0.15em] text-neutral-700">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-black ${
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
