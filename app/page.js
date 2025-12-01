// app/page.js
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-black">
      {/* Full screen hero */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero5.jpg"
          alt="Dominic Mena in the studio"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text and buttons over image */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col px-4 pb-16 pt-28">
          {/* You can leave some top space so the header can sit over this */}

          <div className="mt-auto space-y-4">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-200">
              Film and television  •  Production  •  Mixing
            </p>

            <h1 className="text-3xl md:text-5xl font-semibold tracking-[0.18em] text-white uppercase">
              Composer, Producer, Mixing Engineer.
            </h1>

            <p className="max-w-xl text-sm md:text-base text-neutral-200 leading-relaxed">
              Music for film, television, and records, focused on vivid themes,
              textured harmony, and character driven cues.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <Link
                href="/work"
                className="rounded-full border border-white px-5 py-2 text-white uppercase tracking-[0.18em] text-xs hover:bg-white hover:text-black transition"
              >
                Listen to work
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-white px-5 py-2 text-black uppercase tracking-[0.18em] text-xs hover:bg-neutral-200 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
