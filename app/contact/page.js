// app/contact/page.js
export default function ContactPage() {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 space-y-6">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Contact
          </h1>
          <p className="text-sm text-neutral-700">
            For scoring, collaboration, or licensing inquiries, please use the
            form below or reach out through your preferred contact.
          </p>
  
          <form className="space-y-4 text-sm">
            <div>
              <label className="block text-neutral-700 mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>
  
            <div>
              <label className="block text-neutral-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>
  
            <div>
              <label className="block text-neutral-700 mb-1" htmlFor="message">
                Project details
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>
  
            <button
              type="button"
              className="rounded bg-neutral-900 px-4 py-2 text-sm text-white hover:opacity-90"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    );
  }
  