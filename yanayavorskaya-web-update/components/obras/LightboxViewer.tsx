"use client";
import React, { useState, useEffect, useRef } from 'react';
import type { Artwork } from '../../data/obrasData';

interface LightboxViewerProps {
  artwork: Artwork | null;
  allArtworks: Artwork[];
  isOpen: boolean;
  onClose: () => void;
  onSelectArtwork: (artwork: Artwork) => void;
  onOpenContact: (artwork: Artwork) => void;
}

/**
 * Visor Lightbox / Modal Premium estilo Gagosian / White Cube.
 * Ocupa ~90% de la pantalla y permite una contemplación inmersiva,
 * zoom mecánico/táctil, panning y consulta directa sin e-commerce.
 */
export const LightboxViewer: React.FC<LightboxViewerProps> = ({
  artwork,
  allArtworks,
  isOpen,
  onClose,
  onSelectArtwork,
  onOpenContact,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panPosition, setPanPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const viewerRef = useRef<HTMLDivElement>(null);

  // Reiniciar zoom al cambiar de obra o abrir
  useEffect(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, [artwork?.id, isOpen]);

  // Soporte para teclas del teclado (ESC, Flecha Izquierda, Flecha Derecha)
  useEffect(() => {
    if (!isOpen || !artwork) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, artwork, allArtworks]);

  if (!isOpen || !artwork) return null;

  const currentIndex = allArtworks.findIndex((a) => a.id === artwork.id);
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allArtworks.length;
    onSelectArtwork(allArtworks[nextIndex]);
  };
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + allArtworks.length) % allArtworks.length;
    onSelectArtwork(allArtworks[prevIndex]);
  };

  // Obras relacionadas (4 obras similares por colección o consecutivas)
  const relatedWorks = allArtworks
    .filter((a) => a.id !== artwork.id && (a.collection === artwork.collection || true))
    .slice(0, 4);

  // Zoom con rueda del ratón
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    const newZoom = Math.min(Math.max(1, zoomLevel + delta), 3.5);
    setZoomLevel(newZoom);
    if (newZoom === 1) setPanPosition({ x: 0, y: 0 });
  };

  // Zoom con doble clic
  const handleDoubleClick = () => {
    if (zoomLevel > 1) {
      setZoomLevel(1);
      setPanPosition({ x: 0, y: 0 });
    } else {
      setZoomLevel(2.2);
    }
  };

  // Panning / Arrastre del lienzo
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomLevel <= 1) return;
    setPanPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };
  const handleMouseUp = () => setIsDragging(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      viewerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-2 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Contenedor Principal al 90% de la pantalla */}
      <div
        ref={viewerRef}
        className="bg-[#FCFCFA] text-[#1A1A1A] w-[94vw] md:w-[90vw] h-[94vh] md:h-[90vh] shadow-2xl flex flex-col overflow-hidden relative border border-neutral-300"
      >
        {/* Barra superior del visor */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-white flex-shrink-0 z-10">
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-neutral-500">
            <span>Visor Sala Privada</span>
            <span>•</span>
            <span>{currentIndex + 1} de {allArtworks.length}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleFullscreen}
              className="p-2 text-xs font-mono uppercase hover:bg-neutral-100 border border-neutral-200 transition-colors hidden sm:inline-block"
              title="Pantalla Completa"
            >
              {isFullscreen ? '✕ Salir Pantalla Completa' : '⛶ Pantalla Completa'}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-neutral-900 text-white text-xs font-mono uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              title="Cerrar con ESC"
            >
              Cerrar [ESC]
            </button>
          </div>
        </div>

        {/* Cuerpo del Visor: Imagen grande + Panel lateral de información */}
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 overflow-y-auto lg:overflow-hidden">
          
          {/* Lado izquierdo/central: Contenedor interactivo de Imagen Grande (7 de 12 col en desktop) */}
          <div
            className="lg:col-span-7 bg-[#EFEFEA] relative overflow-hidden flex items-center justify-center select-none min-h-[50vh] lg:min-h-full group"
            onWheel={handleWheel}
            onDoubleClick={handleDoubleClick}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in' }}
          >
            {/* Imagen Principal con transformación reactiva */}
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="max-w-[85%] max-h-[85%] object-contain shadow-2xl transition-transform duration-200 ease-out"
              style={{
                transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
              }}
              draggable={false}
            />

            {/* Controles flotantes de navegación (Flechas Anterior y Siguiente) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-md flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all opacity-80 group-hover:opacity-100"
              title="Obra anterior (←)"
            >
              ←
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-md flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all opacity-80 group-hover:opacity-100"
              title="Siguiente obra (→)"
            >
              →
            </button>

            {/* Indicadores flotantes de zoom e instrucciones breves */}
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm text-[11px] font-mono text-neutral-600 px-3 py-1.5 border border-neutral-300 flex items-center gap-3">
              <span>Zoom: {Math.round(zoomLevel * 100)}%</span>
              <span className="hidden sm:inline">• Doble clic para {zoomLevel > 1 ? 'restablecer' : 'ampliar'}</span>
            </div>
          </div>

          {/* Lado derecho: Panel lateral de Información e Historia (5 de 12 col) */}
          <div className="lg:col-span-5 bg-white p-6 md:p-10 flex flex-col justify-between overflow-y-auto border-l border-neutral-200">
            <div className="space-y-6">
              
              {/* Cabecera Técnica */}
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-neutral-400 block mb-1">
                  {artwork.collection} • {artwork.year}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-light text-neutral-900 leading-tight">
                  {artwork.title}
                </h2>
              </div>

              {/* Ficha de datos y Precio */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-neutral-200 text-xs font-sans text-neutral-700">
                <div>
                  <span className="text-neutral-400 block uppercase font-mono text-[10px] tracking-wider">Técnica</span>
                  <span className="font-medium text-neutral-900">{artwork.medium}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block uppercase font-mono text-[10px] tracking-wider">Dimensiones</span>
                  <span className="font-medium text-neutral-900">{artwork.dimensions}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block uppercase font-mono text-[10px] tracking-wider">Valor / Precio</span>
                  <span className="font-serif text-base font-semibold text-neutral-900">
                    {artwork.price.toLocaleString('es-ES')} €
                  </span>
                </div>
                <div>
                  <span className="text-neutral-400 block uppercase font-mono text-[10px] tracking-wider">Estado</span>
                  <span
                    className={`inline-block px-2 py-0.5 text-[10px] uppercase font-mono font-medium ${
                      artwork.status === 'Disponible'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : artwork.status === 'Reservada'
                        ? 'bg-amber-50 text-amber-800 border border-amber-200'
                        : 'bg-neutral-900 text-white'
                    }`}
                  >
                    {artwork.status}
                  </span>
                </div>
              </div>

              {/* Botón Principal (Pág. 16: ÚNICAMENTE Solicitar información o Consultar disponibilidad) */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenContact(artwork)}
                  className="w-full py-4 bg-neutral-900 text-white font-sans text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Solicitar información</span>
                  <span className="text-neutral-400">/</span>
                  <span>Consultar disponibilidad</span>
                </button>
                <p className="text-[11px] text-neutral-400 text-center font-serif italic mt-2">
                  Atención directa y confidencial con el estudio de Yana Yavorskaya.
                </p>
              </div>

              {/* Descripción Artística Única (200-400 palabras por obra - Pág. 15-16) */}
              <div className="space-y-4 pt-4 border-t border-neutral-100">
                <h3 className="text-xs uppercase font-mono tracking-widest text-neutral-400">
                  Historia & Proceso Creativo de la Obra
                </h3>
                <div className="font-serif text-sm md:text-base text-neutral-700 leading-relaxed space-y-3 whitespace-pre-line">
                  {artwork.description}
                </div>
              </div>

              {/* Detalles técnicos adicionales si existen */}
              {artwork.techniqueDetails && (
                <div className="bg-neutral-50 p-4 border border-neutral-200 text-xs font-sans text-neutral-600">
                  <strong className="text-neutral-800 font-mono block mb-1">Apunte técnico del taller:</strong>
                  {artwork.techniqueDetails}
                </div>
              )}

              {/* Bloques de Certificado de Autenticidad y Envíos (Pág. 18) */}
              <div className="pt-6 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] text-neutral-600 font-sans">
                <div className="bg-neutral-50 p-3.5 border border-neutral-200">
                  <span className="font-mono text-neutral-900 font-bold block mb-1">📜 Certificado de Autenticidad</span>
                  Todas las obras originales incluyen certificado de autenticidad firmado por la artista.
                </div>
                <div className="bg-neutral-50 p-3.5 border border-neutral-200">
                  <span className="font-mono text-neutral-900 font-bold block mb-1">📦 Envíos Asegurados</span>
                  Se realizan envíos nacionales e internacionales con embalaje profesional y seguro. Los gastos de envío se informarán durante el proceso de consulta.
                </div>
              </div>

            </div>

            {/* OBRAS RELACIONADAS en el pie del visor (Pág. 17-18) */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-500 mb-4">
                También podría interesarte
              </h4>
              <div className="grid grid-cols-4 gap-2">
                {relatedWorks.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectArtwork(rel)}
                    className="aspect-square bg-neutral-100 overflow-hidden cursor-pointer border border-neutral-200 relative group"
                    title={`${rel.title} — ${rel.price} €`}
                  >
                    <img
                      src={rel.imageUrl}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    {rel.status === 'Vendida' && (
                      <div className="absolute inset-x-0 bottom-0 bg-neutral-900/90 text-white text-[8px] uppercase text-center py-0.5">
                        Vendida
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
