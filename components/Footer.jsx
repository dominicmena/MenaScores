// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-700">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Mena Scores Music</p>
            <p>
              Site by{" "}
              <span className="font-medium">Dominic Mena</span>{" "}
              
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.15em]">
            <Link href="/biography" className="hover:text-black">
              Bio
            </Link>
            <Link href="/work" className="hover:text-black">
              Work
            </Link>
            <Link href="/gallery" className="hover:text-black">
              Photos
            </Link>
            <Link href="/contact" className="hover:text-black">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
