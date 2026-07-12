import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

/**
 * Versión limpia de _app.tsx para proyectos en Pages Router.
 * Se han eliminado las dependencias e inyecciones de @vercel/toolbar.
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#FCFCFA] text-[#1A1A1A] antialiased selection:bg-[#1A1A1A] selection:text-[#FCFCFA] min-h-screen font-sans">
      <Component {...pageProps} />
    </div>
  );
}
