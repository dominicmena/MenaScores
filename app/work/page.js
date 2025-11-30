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
              Selected scores and cues for narrative, documentary, and records.
            </p>
          </header>
  
          <div className="space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-700">
              Reel highlights
            </h2>
            <ul className="space-y-4 text-sm text-neutral-800">
              <li>
                <span className="font-semibold">Death Loom</span> - horror main
                theme that introduces the central character and grows into a
                larger statement.
              </li>
              <li>
                <span className="font-semibold">Action Spy</span> - tense cue for
                surveillance and chase moments with a driving rhythmic core.
              </li>
              <li>
                <span className="font-semibold">Drama</span> - intimate strings
                and piano texture supporting grief, memory, and quiet shifts in a
                scene.
              </li>
            </ul>
          </div>
  
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-700">
              Film and television
            </h2>
            <p className="text-sm text-neutral-700">
              Credits and detailed project notes can live here as you add work
              - festival films, shorts, series, and collaborations.
            </p>
          </div>
  
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-neutral-700">
              Records and performance
            </h2>
            <p className="text-sm text-neutral-700">
              Space for releases, band projects, and live work that informs the
              scoring side.
            </p>
          </div>
        </div>
      </section>
    );
  }
  