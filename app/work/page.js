// app/work/page.js
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
            Original music composed to picture for demonstration only.

            </p>
  
            <div className="grid gap-6 md:grid-cols-2">
              {/* NEW FIRST VIDEO */}
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-700">
                INTERSTELLAR (Rescored scene)
                </p>
                <p className="text-sm text-neutral-700">
                Drama - Hope - Emotional Depth
                </p>
                <div className="relative aspect-video w-full overflow-hidden rounded-md border border-neutral-200 bg-black">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/wBkEe18As_s?si=Yv4ImACAUl40xNf4"
                    title="Scene example | Music by Dominic Mena"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
  
              {/* EXISTING SINISTER VIDEO */}
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-700">
                  SINISTER (Rescored scene)
                </p>
                <p className="text-sm text-neutral-700">
Horror - Suspense - Character Theme                </p>
                <div className="relative aspect-video w-full overflow-hidden rounded-md border border-neutral-200 bg-black">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/uSTPTdDHnCU?si=9aFhm0ozRmQFwwOk"
                    title="Rescored Scene – Sinister | Music by Dominic Mena"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
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
              {/* Refind Collective */}
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-700">
                  Refind Collective
                </p>
                <p className="text-sm text-neutral-700">
                  Music for fashion show reel{" "}
                  <a
                    href="https://www.refind.shopping/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-black transition"
                  >
                    (Refind Collective)
                  </a>
                </p>
                <div className="relative aspect-video w-full overflow-hidden rounded-md border border-neutral-200 bg-black">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/-FUOQV8eYGk?si=eyemF2dSN2Tf0nz4"
                    title="Refind Collective Fashion Reel | Music by Dominic Mena"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
  
              {/* Stellina Stampouli */}
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-700">
                  Stellina Stampouli
                </p>
                <p className="text-sm text-neutral-700">
                  Music for photography promo video.
                </p>
                <div className="relative aspect-video w-full overflow-hidden rounded-md border border-neutral-200 bg-black">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/DN9cKxaCYVk?si=Y99f87a8mmBk7mPk"
                    title="Stellina Stampouli Promo | Music by Dominic Mena"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  