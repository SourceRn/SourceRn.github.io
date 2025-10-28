import "prismjs/themes/prism.css";
import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://rammsesitic.dev"),
  title: {
    default: "Rammses ITIC — Desarrollo web, arquitectura y nube",
    template: "%s · Rammses ITIC",
  },
  description:
    "Portafolio técnico y blog de Rammses ITIC. Desarrollo web, arquitectura de software, análisis de código existente, redes y computación en la nube.",

  keywords: [
    "desarrollador web",
    "desarrollo de software",
    "arquitectura de software",
    "cloud",
    "cloud computing",
    "infraestructura",
    "Next.js",
    "TypeScript",
    "portafolio",
    "blog técnico",
    "Rammses ITIC",
  ],

  authors: [{ name: "Rammses ITIC" }],
  creator: "Rammses ITIC",
  publisher: "Rammses ITIC",

  alternates: {
    canonical: "https://rammsesitic.dev",
  },

  openGraph: {
    type: "website",
    url: "https://rammsesitic.dev",
    title: "Rammses ITIC — Desarrollo web, arquitectura y nube",
    description:
      "Proyectos reales, artículos técnicos y experiencia práctica en software, arquitectura y nube.",
    siteName: "Rammses ITIC",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rammses ITIC — Portafolio y Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@rammsesitic", 
    title: "Rammses ITIC — Desarrollo web, arquitectura y nube",
    description:
      "Portafolio / blog técnico enfocado en desarrollo web, arquitectura de software y nube.",
    images: ["/og-image.png"],
  },

  
  robots: {
    index: true,          
    follow: true,         
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",

  icons: {
    icon: "/favicon.ico",
  },
};

  export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-zinc-900">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <header className="flex items-center justify-between mb-10">
            <Link href="/" className="font-semibold"><img src="/logo.png" width="150px" style={{borderRadius: 5 +'px'}} alt="logo para rammsesitic"/></Link>
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
