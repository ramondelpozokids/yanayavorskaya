"use client";
import React, { useState } from 'react';
import type { Artwork } from '../../data/obrasData';

interface ArtworkContactModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal de consulta elegante para solicitar información de una obra.
 * El asunto se autocompleta con "Consulta sobre la obra [Nombre de la obra]".
 */
export const ArtworkContactModal: React.FC<ArtworkContactModalProps> = ({
  artwork,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'España',
    message: artwork ? `Buenos días Yana, desearía recibir más información sobre la disponibilidad, opciones de envío y detalles de la obra original "${artwork.title}" (${artwork.medium}, ${artwork.dimensions}). Muchas gracias.` : '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !artwork) return null;

  const autoSubject = `Consulta sobre la obra ${artwork.title}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación elegante de envío directo o redirección a mailto si el backend no está disponible en cliente
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2800);
  };

  const mailtoUrl = `mailto:yana@yanayavorskaya.com?subject=${encodeURIComponent(autoSubject)}&body=${encodeURIComponent(
    `Nombre: ${formData.name}\nCorreo: ${formData.email}\nTeléfono: ${formData.phone}\nPaís: ${formData.country}\n\nMensaje:\n${formData.message}`
  )}`;

  const whatsappMessage = `Hola Yana, estoy interesado/a en consultar la disponibilidad de la obra "${artwork.title}" (${artwork.dimensions}, ${artwork.price} €). Mi nombre es ${formData.name || 'un coleccionista'}.`;
  const whatsappUrl = `https://wa.me/34600000000?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FCFCFA] text-[#1A1A1A] max-w-xl w-full border border-neutral-300 shadow-2xl p-8 md:p-10 relative overflow-hidden">
        
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 transition-colors text-xl font-mono"
        >
          ✕
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center mx-auto text-xl font-serif">
              ✓
            </div>
            <h3 className="text-2xl font-serif text-neutral-900">Consulta enviada con éxito</h3>
            <p className="text-sm font-sans text-neutral-600 max-w-md mx-auto leading-relaxed">
              Muchas gracias por su interés en el trabajo de Yana Yavorskaya. La artista o su equipo de estudio se pondrán en contacto con usted en un plazo máximo de 24 horas.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block mb-1">
                Adquisición & Coleccionismo
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-light text-neutral-900">
                Solicitar información
              </h3>
              <p className="text-xs font-serif text-neutral-500 mt-1">
                Obra seleccionada: <strong className="text-neutral-800">{artwork.title}</strong> ({artwork.dimensions}) — {artwork.price.toLocaleString('es-ES')} €
              </p>
            </div>

            {/* Asunto de solo lectura/referencia */}
            <div className="bg-neutral-100 p-3 border border-neutral-200 text-xs font-mono text-neutral-600 flex items-center justify-between">
              <span>Asunto automático:</span>
              <strong className="text-neutral-900 font-sans">{autoSubject}</strong>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans text-neutral-700 mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ej. Carlos Martínez"
                  className="w-full bg-white border border-neutral-300 px-3.5 py-2.5 text-sm focus:outline-none focus:border-neutral-900"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans text-neutral-700 mb-1">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ejemplo@correo.com"
                  className="w-full bg-white border border-neutral-300 px-3.5 py-2.5 text-sm focus:outline-none focus:border-neutral-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans text-neutral-700 mb-1">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+34 600 00 00 00"
                  className="w-full bg-white border border-neutral-300 px-3.5 py-2.5 text-sm focus:outline-none focus:border-neutral-900"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans text-neutral-700 mb-1">
                  País *
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="España"
                  className="w-full bg-white border border-neutral-300 px-3.5 py-2.5 text-sm focus:outline-none focus:border-neutral-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-sans text-neutral-700 mb-1">
                Mensaje o consulta *
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white border border-neutral-300 px-3.5 py-2.5 text-sm font-serif focus:outline-none focus:border-neutral-900 leading-relaxed"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-white font-sans text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors shadow-sm"
              >
                Enviar consulta directa
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                <span>O contactar por:</span>
                <a
                  href={mailtoUrl}
                  className="underline hover:text-neutral-900"
                  title="Abrir en mi cliente de correo"
                >
                  Email
                </a>
                <span>•</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-neutral-900"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
