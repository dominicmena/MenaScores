// app/gallery/page.js
import Image from "next/image";

const images = [
  { src: "/hero1.jpg", alt: "Studio performance" },
  { src: "/dominic-desk2.jpg", alt: "Writing session" },
  { src: "/strange-lot-stellinaStampouli-.jpg", alt: "On set" },
];

export default function GalleryPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Gallery
        </h1>
        <p className="mt-2 text-sm text-neutral-700">
          Stills from recording sessions, live shows, and collaborations.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-md bg-neutral-200"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
