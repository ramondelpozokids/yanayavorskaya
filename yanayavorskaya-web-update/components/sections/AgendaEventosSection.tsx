import React from 'react';
import { EVENTOS_DATA } from '../../data/eventosData';

/**
 * Sección de Agenda y Próximos Eventos (Página 11 de la Orden de Trabajo).
 * Muestra ferias internacionales (ARCO, Art Madrid), exposiciones en solitario y encuentros de taller.
 */
export const AgendaEventosSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FCFCFA] text-[#1A1A1A] px-6 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 border-b border-neutral-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-serif tracking-[0.25em] text-neutral-500 block mb-2">
              Calendario & Presencia Pública
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-neutral-900">
              Próximos Eventos
            </h2>
          </div>
          <p className="text-sm font-serif text-neutral-600 max-w-sm">
            Ferias de arte, exposiciones individuales, inauguraciones e invitaciones a vernissages en Madrid y Europa.
          </p>
        </header>

        <div className="space-y-6">
          {EVENTOS_DATA.map((evento) => (
            <article
              key={evento.id}
              className="bg-white border border-neutral-200 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-neutral-400 transition-colors shadow-sm"
            >
              <div className="space-y-2 md:max-w-2xl">
                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                  <span className="px-2.5 py-0.5 bg-neutral-100 text-neutral-800 uppercase font-sans font-medium">
                    {evento.type}
                  </span>
                  <span>•</span>
                  <span>{evento.dateRange}</span>
                  <span>•</span>
                  <span>{evento.location}</span>
                </div>

                <h3 className="text-2xl font-serif text-neutral-900 leading-snug">
                  {evento.title}
                </h3>

                <p className="text-xs font-mono text-neutral-500 font-semibold">
                  Sede: <span className="font-normal text-neutral-700">{evento.venue}</span>
                </p>

                <p className="text-sm font-serif text-neutral-600 leading-relaxed pt-1">
                  {evento.description}
                </p>
              </div>

              <div className="flex flex-col md:items-end justify-between gap-4 border-t md:border-t-0 pt-4 md:pt-0 border-neutral-100">
                <span
                  className={`text-[10px] font-mono uppercase px-3 py-1 text-center ${
                    evento.status === 'Confirmado'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                  }`}
                >
                  {evento.status}
                </span>

                <a
                  href={`mailto:yana@yanayavorskaya.com?subject=${encodeURIComponent(`Solicitud de invitación para: ${evento.title}`)}`}
                  className="px-6 py-2.5 bg-neutral-900 text-white text-[11px] font-sans uppercase tracking-[0.18em] hover:bg-neutral-800 transition-colors text-center"
                >
                  Solicitar invitación
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
