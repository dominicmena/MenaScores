import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-12">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-neutral-400">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {/* Left side: copyright and credit */}
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Beach House Music</p>
            <p>
              Website by{"Dominic Mena"}
              <a
                href="https://warmbutter.com"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-white"
              >
                Warm Butter Design
              </a>
            </p>
          </div>

          {/* Right side: repeated nav items */}
          <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.15em]">
            <Link href="/biography" className="hover:text-white">
              Biography
            </Link>
            <Link href="/projects" className="hover:text-white">
              Projects
            </Link>
            <Link href="/gallery" className="hover:text-white">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
