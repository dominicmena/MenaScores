// app/biography/page.js
import Image from "next/image";

export default function BiographyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:flex md:gap-10">
        <div className="md:w-2/3 space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Biography
          </h1>
          <p className="text-sm text-neutral-700 leading-relaxed">
            Dominic Mena is a composer and performer based in Austin, writing
            music for film, television, and records. His work draws on psych
            rock, modern classical harmony, and textured sound design, balancing
            strong themes with detailed atmospheres.
          </p>
          <p className="text-sm text-neutral-700 leading-relaxed">
            As a bandleader and studio producer he has recorded and toured
            extensively, bringing that live energy into his scoring work. In
            film, Dominic focuses on character driven cues that stay close to
            the emotional line of a scene, from intimate piano and strings to
            more experimental synth and percussive writing.
          </p>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-neutral-200">
            <Image
              src="/dominic-desk2.jpg"
              alt="Dominic Mena portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
