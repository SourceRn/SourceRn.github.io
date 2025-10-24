import "prismjs/themes/prism.css";
import "./globals.css";
import Link from "next/link";

export const metadata = { 
  title: {
    default: "Rammses ITIC - Proyectos y blog", 
    template: "%s | Rammses ITIC"
  }, 
  description: "Desarrollo web y de software, arquitectura y nube" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-zinc-900">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <header className="flex items-center justify-between mb-10">
            <Link href="/" className="font-semibold">rammsesitic.dev</Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/projects">Proyectos</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">Sobre mí</Link>
            </nav>
          </header>
          {children}
          <footer className="mt-16 text-sm text-zinc-500">© {new Date().getFullYear()} Rammses ITIC</footer>
        </div>
      </body>
    </html>
  );
}
