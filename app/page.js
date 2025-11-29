import Image from "next/image";

export default function HomePage() {
  return (
    <section className="space-y-10">
      {/* Hero image */}
      <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
        <Image
          src="/dominic-desk.jpg"
          alt="Timothy Williams at work in the studio"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Optional overlay text at bottom left */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <div className="mx-auto max-w-5xl px-4 pb-6">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
              Dominic Mena
             </h1>
            <p className="text-sm md:text-base text-neutral-200 max-w-xl">
              Composer for film and television.
            </p>
          </div>
        </div>
      </div>

      {/* Intro text under the hero */}
      <div className="space-y-3 max-w-2xl">
        <p className="text-neutral-300">
            TEXT OPTIONAL
        </p>
      </div>
    </section>
  );
}
