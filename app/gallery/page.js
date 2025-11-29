import Image from "next/image";

export const metadata = {
  title: "Gallery - Timothy Williams",
};

const galleryImages = [
  {
    src: "/gallery/pearl-session-1.jpg",
    alt: "Scoring session for Pearl",
  },
  {
    src: "/gallery/scoring-mix-01.jpg",
    alt: "Mixing session in the studio",
  },
  {
    src: "/gallery/live-orchestra-01.jpg",
    alt: "Recording with live orchestra",
  },
  // Add more images here as you add files to /public/gallery
];

export default function GalleryPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-wide">Gallery</h1>
        <div className="h-px w-16 bg-neutral-500" />
      </header>

      <p className="text-neutral-300 max-w-2xl">
        These images are served from the public folder and optimized with the
        Next.js Image component.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {galleryImages.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded border border-neutral-700 bg-neutral-900"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="px-3 py-2 text-xs text-neutral-300">
              {image.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
