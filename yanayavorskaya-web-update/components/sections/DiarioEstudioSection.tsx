"use client";
import React from 'react';
import { DIARIO_DATA } from '../../data/diarioData';

/**
 * Sección "Diario del Estudio" / "Vida de artista" (Página 10 de la Orden de Trabajo).
 * Feed breve con micro-actualizaciones frecuentes, notas e imágenes del día a día en el taller.
 */
export const DiarioEstudioSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FCFCFA] text-[#1A1A1A] px-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-neutral-200 pb-8 gap-4">
          <div>
            <span className="text-xs uppercase font-serif tracking-[0.25em] text-neutral-500 block mb-2">
              Bitácora & Vida de Artista
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-neutral-900">
              Diario del Estudio
            </h2>
          </div>
          <p className="text-sm font-serif text-neutral-600 max-w-md">
            Pequeñas impresiones, mezclas en la paleta y notas espontáneas desde la mesa de trabajo en Madrid.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {DIARIO_DATA.map((entrada) => (
            <article
              key={entrada.id}
              className="bg-white border border-neutral-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4 pb-3 border-b border-neutral-100">
                  <span>{entrada.date}</span>
                  <div className="flex gap-1.5">
                    {entrada.tags.map((tag, i) => (
                      <span key={i} className="bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-600 font-sans">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-serif text-neutral-900 mb-3 leading-snug">
                  {entrada.title}
                </h3>

                <p className="text-sm font-serif text-neutral-600 leading-relaxed mb-6 whitespace-pre-line">
                  {entrada.note}
                </p>
              </div>

              <div className="aspect-[16/9] bg-neutral-100 overflow-hidden border border-neutral-100">
                <img
                  src={entrada.imageUrl}
                  alt={entrada.title}
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
