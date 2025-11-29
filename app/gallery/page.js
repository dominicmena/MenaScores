export const metadata = {
    title: "Gallery - Timothy Williams",
  };
  
  const placeholderImages = Array.from({ length: 24 }).map((_, index) => ({
    id: index + 1,
    label: `Image ${index + 1}`,
  }));
  
  export default function GalleryPage() {
    return (
      <section className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-wide">Gallery</h1>
          <div className="h-px w-16 bg-neutral-500" />
        </header>
  
        <p className="text-neutral-300 max-w-2xl">
          This gallery uses placeholders for images. Replace these boxes with your own
          photos or artwork by updating the image data and using the Next.js Image
          component.
        </p>
  
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {placeholderImages.map((image) => (
            <div
              key={image.id}
              className="flex aspect-[4/3] items-center justify-center rounded bg-neutral-800 text-sm text-neutral-400 border border-neutral-700"
            >
              {image.label}
            </div>
          ))}
        </div>
      </section>
    );
  }
  