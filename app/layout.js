// app/layout.js
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Dominic Mena - Composer",
  description: "The official site of composer Dominic Mena.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
