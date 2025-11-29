import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Timothy Williams - Composer",
  description: "Composer site built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-neutral-100">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <div className="mx-auto max-w-5xl px-4 py-10">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
