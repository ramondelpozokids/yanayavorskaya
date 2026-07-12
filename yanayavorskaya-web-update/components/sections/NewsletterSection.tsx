"use client";
import React, { useState } from 'react';

/**
 * Bloque de Newsletter / Suscripción (Página 11 de la Orden de Trabajo).
 * Diseño minimalista y sereno para que los visitantes reciban catálogos de nuevas obras,
 * convocatorias de exposiciones y cartas íntimas desde el taller.
 */
export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#EFEFEA] text-[#1A1A1A] px-6 border-t border-neutral-300">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <span className="text-xs uppercase font-serif tracking-[0.25em] text-neutral-500 block">
          Correspondencia Privada del Estudio
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-light text-neutral-900 leading-tight">
          El Círculo de Coleccionistas
        </h2>
        <p className="text-sm md:text-base font-serif text-neutral-600 leading-relaxed max-w-xl mx-auto">
          Suscríbete de manera discreta para recibir los avances en primicia de las nuevas colecciones, invitaciones privadas a vernissages en Madrid y reflexiones personales de Yana Yavorskaya.
        </p>

        {subscribed ? (
          <div className="bg-white border border-neutral-300 p-6 animate-fadeIn max-w-md mx-auto shadow-sm">
            <span className="text-xl block mb-2 font-serif">✓ Bienvenida al círculo</span>
            <p className="text-xs font-sans text-neutral-600">
              Hemos registrado su dirección de correo electrónico con éxito. Pronto recibirá nuestra próxima carta de estudio.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto pt-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu-correo@ejemplo.com"
              className="w-full sm:w-auto flex-grow bg-white border border-neutral-300 px-4 py-3.5 text-sm font-sans focus:outline-none focus:border-neutral-900 shadow-sm placeholder-neutral-400"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-white font-sans text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors shadow-sm flex-shrink-0"
            >
              Suscribirse
            </button>
          </form>
        )}

        <p className="text-[11px] font-mono text-neutral-400 pt-2">
          Respetamos su privacidad. Cero correo comercial excesivo ni publicidad. Puede darse de baja en cualquier momento con un solo clic.
        </p>
      </div>
    </section>
  );
};
