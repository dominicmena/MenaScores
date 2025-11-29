"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/biography", label: "Biography" },
  { href: "/work", label: "Work" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-800">
      <div className="mx-auto max-w-5xl px-4 py-6">
        {/* Site title */}
        <div className="mb-4">
          <Link href="/" className="text-2xl font-semibold tracking-wide hover:opacity-80 transition">
            Dominic Mena          
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.15em] text-neutral-300">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-white transition ${
                  isActive ? "text-white" : "text-neutral-400"
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
