import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Yana Yavorskaya | Artista Contemporánea",
  description:
    "Web oficial de Yana Yavorskaya. Pintura contemporánea, exposiciones, diario de estudio y galería de obras disponibles.",
  openGraph: {
    title: "Yana Yavorskaya | Artista Contemporánea",
    description:
      "Web oficial de Yana Yavorskaya. Pintura contemporánea, exposiciones, diario de estudio y galería de obras disponibles.",
    url: "https://yanayavorskaya.com",
    siteName: "Yana Yavorskaya Studio",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-[#FCFCFA] text-[#1A1A1A] antialiased selection:bg-[#1A1A1A] selection:text-[#FCFCFA] min-h-screen flex flex-col font-sans">
        {/*
          NOTA: Se ha eliminado por completo cualquier importación o inicialización
          de @vercel/toolbar, <Toolbar />, <VercelToolbar />, <Analytics /> o <SpeedInsights />
          cumpliendo estrictamente con los requisitos de la Orden de Trabajo.
        */}
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
