"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const galleryImages = [
  { src: "/bio0.jpg", alt: "Dominic portrait 0" },
  { src: "/bio3.jpg", alt: "Dominic portrait 3" },
  { src: "/bio1.jpg", alt: "Dominic portrait 1" },
  { src: "/bio6.png", alt: "Dominic portrait 6" },
];

export default function BiographyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:flex md:gap-10">
        {/* LEFT SIDE TEXT */}
        <div className="md:w-2/3 space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Biography
          </h1>
          <p className="text-sm text-neutral-700 leading-relaxed">
            <strong>Dominic Mena</strong> is a composer and performer based in
            Austin, writing music for film, television, and records. His work
            draws from his studies in film composition at <strong>ASU</strong>,
            jazz composition techniques, modern classical harmony, and textured
            sound design, balancing strong themes with detailed atmosphere.
            Having worked with <strong>Alex Maas</strong> of{" "}
            <strong>The Black Angels</strong>, <strong>Jim Eno</strong> of{" "}
            <strong>Spoon</strong>, and <strong>Dave Fridmann</strong>, and
            mentored by <strong>Timothy Williams</strong> (
            <strong>Get Out</strong>, <strong>Pearl</strong>,{" "}
            <strong>Guardians of the Galaxy</strong>), he brings a professional
            and tasteful approach to every cue.
          </p>
          <p className="text-sm text-neutral-700 leading-relaxed">
            As a bandleader and studio producer, he has recorded and toured
            extensively, carrying that energy into his scoring work. In film,
            Dominic focuses on character driven writing that stays close to the
            emotional core of a scene, moving from intimate piano and strings to
            more experimental synth and percussive textures.
          </p>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className="mt-8 md:mt-0 md:w-1/3 relative overflow-hidden rounded-md bg-neutral-200 aspect-[4/5]">
          <div
            className="flex h-full w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {galleryImages.map((img, i) => (
              <div key={i} className="relative flex-shrink-0 w-full h-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* ARROWS */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-2 py-1 text-xs rounded"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-2 py-1 text-xs rounded"
          >
            ›
          </button>

          {/* DOTS */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {galleryImages.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  currentIndex === i ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
