import React from 'react';
import { TESTIMONIOS_DATA } from '../../data/testimoniosData';

/**
 * Sección de Testimonios de Coleccionistas (Página 10-11 de la Orden de Trabajo).
 * Diseño sobrio y elegante que transmite confianza, prestigio y satisfacción de compra.
 */
export const TestimoniosSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#1A1A1A] text-[#FCFCFA] px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-neutral-400 block mb-2">
            Voces & Coleccionismo
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-4">
            La Experiencia del Coleccionista
          </h2>
          <p className="text-sm md:text-base font-serif text-neutral-400 leading-relaxed">
            Opiniones y reflexiones de personas e instituciones que han adquirido obras originales de Yana Yavorskaya para sus hogares, colecciones y espacios de trabajo.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIOS_DATA.map((testi) => (
            <div
              key={testi.id}
              className="bg-neutral-900/60 border border-neutral-800 p-8 flex flex-col justify-between relative group hover:border-neutral-700 transition-colors"
            >
              <div className="text-4xl font-serif text-neutral-600 mb-4 select-none">“</div>
              <p className="font-serif text-base md:text-lg text-neutral-200 leading-relaxed italic mb-8 flex-grow">
                {testi.quote}
              </p>
              <div className="pt-6 border-t border-neutral-800/80">
                <h3 className="font-sans font-medium text-sm text-white">{testi.author}</h3>
                <p className="text-xs font-serif text-neutral-400 mt-0.5">{testi.role}</p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-2 border-t border-neutral-800/40">
                  <span>📍 {testi.location}</span>
                  <span className="text-neutral-300">Obra: {testi.artworkTitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
