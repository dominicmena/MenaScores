export const metadata = {
    title: "Contact - Timothy Williams",
  };
  
  export default function ContactPage() {
    return (
      <section className="space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-wide">Contact</h1>
          <div className="h-px w-16 bg-neutral-500" />
        </header>
  
        {/* Representation */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide">Representation</h2>
          <div className="h-px w-10 bg-neutral-700" />
          {/* Image placeholder */}
          <div className="mb-3 flex aspect-[4/1] items-center justify-center rounded bg-neutral-800 text-xs text-neutral-400 border border-neutral-700">
            Representation logo placeholder
          </div>
          <div className="space-y-1 text-neutral-200">
            <p className="font-medium">Agent Name</p>
            <p>Agency Name</p>
            <p>agent@example.com</p>
            <p>(000) 000 0000</p>
          </div>
        </div>
  
        {/* Publicity */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide">Publicity</h2>
          <div className="h-px w-10 bg-neutral-700" />
          {/* Image placeholder */}
          <div className="mb-3 flex aspect-[4/1] items-center justify-center rounded bg-neutral-800 text-xs text-neutral-400 border border-neutral-700">
            Publicity logo placeholder
          </div>
          <div className="space-y-1 text-neutral-200">
            <p className="font-medium">Publicist Name</p>
            <p>Publicity Company</p>
            <p>publicity@example.com</p>
            <p>(000) 000 0000</p>
          </div>
        </div>
  
        {/* Contact form */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide">Email Timothy</h2>
          <div className="h-px w-10 bg-neutral-700" />
  
          <form
            className="space-y-4 max-w-xl"
            onSubmit={(event) => {
              event.preventDefault();
              alert("This is a placeholder form. Connect it to your backend or email service.");
            }}
          >
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium text-neutral-200">
                Your name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-500"
                required
              />
            </div>
  
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-neutral-200">
                Your email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-500"
                required
              />
            </div>
  
            <div className="space-y-1">
              <label htmlFor="subject" className="text-sm font-medium text-neutral-200">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-500"
              />
            </div>
  
            <div className="space-y-1">
              <label htmlFor="message" className="text-sm font-medium text-neutral-200">
                Your message (optional)
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-500"
              />
            </div>
  
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white transition"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    );
  }
  