// app/page.js
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="border-t border-neutral-200">
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Dominic Mena
            </h1>
            <p className="mt-2 text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-600">
              Composer - Producer - Performer
            </p>
            <p className="mt-6 text-sm md:text-base text-neutral-700 leading-relaxed">
              Music for film, television, and records, with a focus on vivid
              themes, textured harmony, and emotion driven cues.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link
                href="/work"
                className="rounded border border-neutral-900 px-4 py-2 hover:bg-neutral-900 hover:text-white"
              >
                Listen to work
              </Link>
              <Link
                href="/contact"
                className="rounded bg-neutral-900 px-4 py-2 text-white hover:opacity-90"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-neutral-200">
              <Image
                src="/hero1.jpg"
                alt="Dominic Mena in the studio"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>


    
    </div>
  );
}
