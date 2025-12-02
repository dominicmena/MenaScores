// components/Header.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const STORAGE_KEY = "mena-menu-open";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Load saved state on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "true") {
      setMenuOpen(true);
    }
  }, []);

  // Persist state whenever it changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, menuOpen ? "true" : "false");
  }, [menuOpen]);

  return (
    <header className="border-b border-neutral-200 bg-white">
      {/* CONDITIONAL PADDING: pb-6 only when menuOpen */}
      <div
        className={`relative mx-auto max-w-6xl px-4 pt-3 ${
          menuOpen ? "pb-6" : "pb-0"
        }`}
      >
        {/* DESKTOP: logo + tagline, centered */}
        <div className="hidden lg:flex flex-col items-center">
          <Link href="/" className="hover:opacity-80 transition">
            <div className="relative w-90 h-66 -mt-22 -mb-15">
              <Image
                src="/composer-site-logo2.svg"
                alt="MENA // Scores logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <div className="mt-1 text-[10px] lg:text-xs uppercase tracking-[0.2em] text-neutral-600 text-center">
            Composition & Production for film, TV & Marketing
          </div>
        </div>

        {/* DESKTOP: nav pinned to bottom right */}
        <nav className="hidden lg:flex gap-4 text-xs uppercase tracking-[0.15em] text-neutral-700 absolute right-0 bottom-2">
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

        {/* MOBILE / MID SIZE HEADER ROW (up to < lg) */}
        <div className="lg:hidden flex items-center relative w-full">
          {/* centered mobile logo */}
          <div className="flex-grow flex justify-center">
            <Link href="/" className="hover:opacity-80 transition">
              <div className="relative w-52 h-62 -mt-20 -mb-17">
                <Image
                  src="/composer-site-logo2.svg"
                  alt="MENA // Scores logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* hamburger pinned to far right */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="absolute right-4 top-1.5 flex flex-col items-center justify-center h-9 w-9 rounded border border-neutral-300 bg-white"
          >
            <span className="block h-[2px] w-4 bg-neutral-800" />
            <span className="mt-1.5 block h-[2px] w-4 bg-neutral-800" />
            <span className="mt-1.5 block h-[2px] w-4 bg-neutral-800" />
          </button>
        </div>

        {/* MOBILE HORIZONTAL NAV */}
        {menuOpen && (
          <nav
            className="
              lg:hidden 
              absolute left-1/2 mt-1
              -translate-x-1/2
              flex items-center justify-center gap-7
              text-xs uppercase tracking-[0.15em] text-neutral-700
            "
          >
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
        )}
      </div>
    </header>
  );
}
