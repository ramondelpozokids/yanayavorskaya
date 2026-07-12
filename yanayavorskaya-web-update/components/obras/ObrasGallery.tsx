"use client";
import React, { useState, useMemo } from 'react';
import { OBRAS_DATA, Artwork } from '../../data/obrasData';
import { FiltersBar } from './FiltersBar';
import { LightboxViewer } from './LightboxViewer';
import { ArtworkContactModal } from './ArtworkContactModal';
import { SchemaOrg } from '../seo/SchemaOrg';
import { SeoMeta } from '../seo/SeoMeta';

/**
 * Galería de Arte Premium para la página "Obras disponibles".
 * Inspirada en Gagosian, Hauser & Wirth y White Cube.
 * Implementa filtrado discreto, visor Lightbox inmersivo al 90% y consulta directa.
 */
export const ObrasGallery: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<string>('Todos');
  const [selectedStatus, setSelectedStatus] = useState<string>('Todos');
  const [sortBy, setSortBy] = useState<'recent' | 'price-asc' | 'price-desc' | 'name'>('recent');

  // Obra seleccionada en el visor modal (Lightbox)
  const [activeArtwork, setActiveArtwork] = useState<Artwork | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // Obra seleccionada para el modal de contacto
  const [contactArtwork, setContactArtwork] = useState<Artwork | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  // Filtrado y Ordenación
  const filteredAndSortedWorks = useMemo(() => {
    let works = OBRAS_DATA.filter((work) => {
      const matchesCol = selectedCollection === 'Todos' || work.collection === selectedCollection;
      const matchesStatus = selectedStatus === 'Todos' || work.status === selectedStatus;
      return matchesCol && matchesStatus;
    });

    return works.sort((a, b) => {
      if (sortBy === 'recent') return b.year - a.year;
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [selectedCollection, selectedStatus, sortBy]);

  const handleOpenLightbox = (work: Artwork) => {
    setActiveArtwork(work);
    setIsLightboxOpen(true);
  };

  const handleOpenContact = (work: Artwork) => {
    setContactArtwork(work);
    setIsContactModalOpen(true);
  };

  return (
    <>
      <SeoMeta
        title="Obras Disponibles | Galería de Arte Premium"
        description="Explora la colección original de lienzos al óleo y acrílico de Yana Yavorskaya. Visita virtual en sala privada, ficha técnica y consulta directa con la artista."
        url="https://yanayavorskaya.com/obras"
      />
      {filteredAndSortedWorks.map((work) => (
        <SchemaOrg key={work.id} type="VisualArtwork" data={work} />
      ))}

      <div className="min-h-screen bg-[#FCFCFA] text-[#1A1A1A] py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Cabecera / Explicación de Galería Privada */}
          <header className="mb-12 border-b border-neutral-200 pb-10">
            <span className="text-xs font-serif uppercase tracking-[0.25em] text-neutral-500 block mb-3">
              Catálogo Razonado & Obras Originales
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-serif font-light tracking-tight text-neutral-900 mb-4">
                  Obras Disponibles
                </h1>
                <p className="text-lg md:text-xl font-serif font-light text-neutral-600 max-w-2xl leading-relaxed">
                  Contempla cada pieza con tranquilidad en nuestro visor inmersivo de alta resolución. Para adquirir una obra o solicitar una visita privada al estudio, pulsa en el botón de consulta.
                </p>
              </div>
              <div className="text-xs font-mono text-neutral-400 bg-neutral-100 px-4 py-2 border border-neutral-200 self-start md:self-auto">
                ATENCIÓN DIRECTA SIN PASARELA DE PAGO
              </div>
            </div>
          </header>

          {/* Barra de Filtros Discreta */}
          <FiltersBar
            selectedCollection={selectedCollection}
            onSelectCollection={setSelectedCollection}
            selectedStatus={selectedStatus}
            onSelectStatus={setSelectedStatus}
            sortBy={sortBy}
            onSelectSortBy={setSortBy}
            totalWorks={filteredAndSortedWorks.length}
          />

          {/* Cuadrícula Elegante de Obras */}
          {filteredAndSortedWorks.length === 0 ? (
            <div className="py-24 text-center bg-neutral-50 border border-neutral-200 p-12">
              <h3 className="text-xl font-serif text-neutral-800 mb-2">No hay obras en esta selección</h3>
              <p className="text-sm text-neutral-500 font-sans mb-6">
                Por favor, cambia el filtro de colección o estado para ver más piezas del catálogo.
              </p>
              <button
                onClick={() => {
                  setSelectedCollection('Todos');
                  setSelectedStatus('Todos');
                }}
                className="px-6 py-2 bg-neutral-900 text-white text-xs uppercase tracking-widest font-sans"
              >
                Restablecer todos los filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 items-start">
              {filteredAndSortedWorks.map((work) => (
                <div
                  key={work.id}
                  onClick={() => handleOpenLightbox(work)}
                  className="group cursor-pointer flex flex-col justify-between bg-white border border-neutral-200 hover:border-neutral-400 transition-all duration-500 hover:shadow-xl overflow-hidden"
                >
                  {/* Contenedor de Fotografía de Alta Resolución con HOVER PREMIUM */}
                  <div className="aspect-[4/5] bg-[#EFEFEA] overflow-hidden relative flex items-center justify-center p-4 md:p-6">
                    <img
                      src={work.imageUrl}
                      alt={work.title}
                      className="max-w-full max-h-full object-contain shadow-md group-hover:scale-103 transition-transform duration-700 ease-out"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Overlay al pasar el ratón ("Ver obra") */}
                    <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="px-6 py-3 bg-white text-neutral-900 font-sans text-xs uppercase tracking-[0.25em] font-medium shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        Ver obra +
                      </span>
                    </div>

                    {/* Indicadores de Estado: Disponible, Reservada o Obra Vendida (Prestigio) */}
                    <div className="absolute top-4 right-4 z-10">
                      {work.status === 'Vendida' ? (
                        <span className="px-3 py-1 bg-neutral-900 text-white text-[10px] font-mono uppercase tracking-widest border border-neutral-800 shadow-sm">
                          Obra vendida
                        </span>
                      ) : work.status === 'Reservada' ? (
                        <span className="px-3 py-1 bg-amber-100 text-amber-900 text-[10px] font-mono uppercase tracking-widest border border-amber-300">
                          Reservada
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-white/95 text-neutral-900 text-[10px] font-mono uppercase tracking-widest border border-neutral-200 shadow-sm">
                          Disponible
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Datos y Ficha Técnica en el Pie de la Tarjeta */}
                  <div className="p-6 space-y-3 bg-white">
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                      <span>{work.collection}</span>
                      <span>{work.year}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif text-neutral-900 leading-snug group-hover:text-neutral-600 transition-colors">
                      {work.title}
                    </h3>

                    <p className="text-xs text-neutral-600 font-serif leading-relaxed line-clamp-2">
                      {work.medium} • {work.dimensions}
                    </p>

                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <span className="font-serif text-lg font-medium text-neutral-900">
                        {work.price.toLocaleString('es-ES')} €
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenContact(work);
                        }}
                        className="text-[11px] uppercase tracking-widest font-sans font-medium text-neutral-900 hover:text-neutral-600 underline"
                      >
                        Solicitar información →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bloques de Autenticidad y Envíos en el pie de la galería (Pág. 18) */}
          <footer className="mt-24 border-t border-neutral-200 pt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-700">
            <div className="bg-white p-8 border border-neutral-200 shadow-sm flex items-start gap-4">
              <span className="text-3xl">📜</span>
              <div>
                <h4 className="font-serif text-lg text-neutral-900 mb-1">Certificado de Autenticidad</h4>
                <p className="text-sm font-sans text-neutral-600 leading-relaxed">
                  Todas las obras originales adquieren valor y seguridad registral mediante un certificado de autenticidad formal redactado en papel de lino algodonado, fechado, sellado y firmado por la artista Yana Yavorskaya.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 border border-neutral-200 shadow-sm flex items-start gap-4">
              <span className="text-3xl">📦</span>
              <div>
                <h4 className="font-serif text-lg text-neutral-900 mb-1">Envíos y Embalaje Profesional</h4>
                <p className="text-sm font-sans text-neutral-600 leading-relaxed">
                  Se realizan envíos nacionales e internacionales puerta a puerta con embalaje profesional de madera tratada y seguro a todo riesgo. Los gastos de envío se informarán de forma transparente durante el proceso de consulta.
                </p>
              </div>
            </div>
          </footer>

        </div>

        {/* Visor Lightbox Modal */}
        <LightboxViewer
          artwork={activeArtwork}
          allArtworks={filteredAndSortedWorks.length > 0 ? filteredAndSortedWorks : OBRAS_DATA}
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          onSelectArtwork={(work) => setActiveArtwork(work)}
          onOpenContact={(work) => {
            setIsLightboxOpen(false);
            handleOpenContact(work);
          }}
        />

        {/* Modal de Contacto Directo */}
        <ArtworkContactModal
          artwork={contactArtwork}
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </div>
    </>
  );
};
