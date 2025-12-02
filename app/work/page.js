// app/work/page.js
"use client";

import { useState } from "react";

function VideoCard({ title, subtitle, videoId }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&playsinline=1`;

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-700">
        {title}
      </p>
      <p className="text-sm text-neutral-700">{subtitle}</p>

      <div className="relative aspect-video w-full overflow-hidden rounded-md border border-neutral-200 bg-black">
        {isPlaying ? (
          <iframe
            className="h-full w-full"
            src={iframeSrc}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="group h-full w-full relative"
          >
            <img
              src={thumbnailUrl}
              alt={title}
              className="h-full w-full object-cover"
            />
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition" />
            {/* play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="ml-0.5 h-0 w-0 border-t-[10px] border-b-[10px] border-l-[16px] border-t-transparent border-b-transparent border-l-white drop-shadow-lg" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-10">
        <header>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Work
          </h1>
          <p className="mt-2 text-sm text-neutral-700">
            Selected scores and cues for film, brand content, and records.
          </p>
        </header>

        {/* FILM SECTION */}
        <div className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-700">
            Film
          </h2>
          <p className="text-sm text-neutral-700">
            Original music presented with scene references for demonstration only.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <VideoCard
              title="INTERSTELLAR (Rescored scene)"
              subtitle="Drama, Hope, Emotional Depth"
              videoId="wBkEe18As_s"
            />
            <VideoCard
              title="SINISTER (Rescored scene)"
              subtitle="Horror, Suspense, Character Theme"
              videoId="uSTPTdDHnCU"
            />
          </div>
        </div>

        {/* BRAND / PROMOTIONAL SECTION */}
        <div className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-700">
            Brand / Promotional
          </h2>
          <p className="text-sm text-neutral-700">
            Scoring for fashion, creative direction, and branded visual content.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <VideoCard
              title="Refind Collective"
              subtitle="Music for fashion show reel [Refind Collective]"
              videoId="-FUOQV8eYGk"
            />
            <VideoCard
              title="Stellina Stampouli"
              subtitle="Music for photography promo video."
              videoId="DN9cKxaCYVk"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
