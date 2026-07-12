"use client";
import React, { useState, useMemo } from 'react';
import { NOTICIAS_DATA, CATEGORIAS_NOTICIAS, Noticia } from '../../data/noticiasData';
import { SchemaOrg } from '../seo/SchemaOrg';
import { SeoMeta } from '../seo/SeoMeta';

/**
 * Componente principal para el blog "Noticias" de Yana Yavorskaya.
 * Cumple con los requisitos de Pág. 8 de la Orden de Trabajo:
 * - 16 artículos auténticos de artista (no IA).
 * - Filtros por categoría y barra de búsqueda.
 * - Imagen destacada grande, fecha, categoría, título atractivo y resumen.
 * - Diseño elegante minimalista que transmite que es una artista activa y consolidada.
 */
export const NoticiasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filtrado reactivo de noticias por categoría y búsqueda
  const filteredNoticias = useMemo(() => {
    return NOTICIAS_DATA.filter((noticia) => {
      const matchesCategory =
        selectedCategory === 'Todas' || noticia.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        noticia.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        noticia.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        noticia.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Artículo destacado (el primero del resultado o el primero general)
  const featuredArticle = filteredNoticias.length > 0 ? filteredNoticias[0] : NOTICIAS_DATA[0];
  const gridArticles = filteredNoticias.length > 0 ? filteredNoticias.slice(1) : [];

  return (
    <>
      <SeoMeta
        title="Noticias y Reflexiones de Arte | Blog de Estudio"
        description="Explora artículos, crónicas de ferias (ARCO, Art Madrid), técnicas pictóricas e intimidades de taller de la artista contemporánea Yana Yavorskaya."
        url="https://yanayavorskaya.com/noticias"
      />
      {filteredNoticias.map((noti) => (
        <SchemaOrg key={noti.id} type="Article" data={noti} />
      ))}

      <div className="min-h-screen bg-[#FCFCFA] text-[#1A1A1A] py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Cabecera Editorial */}
          <header className="border-b border-neutral-200 pb-12 mb-12">
            <span className="text-xs uppercase font-serif tracking-[0.25em] text-neutral-500 block mb-3">
              Publicaciones & Ensayos del Taller
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-serif font-light tracking-tight text-neutral-900 mb-4">
                  Noticias del Estudio
                </h1>
                <p className="text-lg md:text-xl font-serif font-light text-neutral-600 max-w-2xl">
                  Reflexiones sobre ferias europeas, visitas a museos, técnicas al óleo y el pulso diario de la creación pictórica contemporánea en Madrid.
                </p>
              </div>

              {/* Barra de Búsqueda Discreta */}
              <div className="w-full md:w-80">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar artículo o tema..."
                    className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm font-sans placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-900"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Filtros por Categoría */}
            <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-neutral-100">
              {CATEGORIAS_NOTICIAS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-sans transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-neutral-900 text-white font-medium shadow-sm'
                      : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </header>

          {filteredNoticias.length === 0 ? (
            <div className="py-24 text-center border border-dashed border-neutral-300 bg-neutral-50 p-12">
              <h3 className="text-xl font-serif text-neutral-800 mb-2">No se encontraron artículos</h3>
              <p className="text-sm text-neutral-500 font-sans mb-6">
                Intenta con otra categoría o término de búsqueda.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('Todas');
                  setSearchQuery('');
                }}
                className="px-6 py-2 bg-neutral-900 text-white text-xs uppercase tracking-wider"
              >
                Ver todas las publicaciones
              </button>
            </div>
          ) : (
            <>
              {/* Artículo Destacado Grande (Hero) */}
              {featuredArticle && (
                <article className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-neutral-200 p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-500">
                  <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-neutral-100 relative group">
                    <img
                      src={featuredArticle.imageUrl}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="eager"
                    />
                    <div className="absolute top-4 left-4 bg-neutral-900 text-white text-[10px] uppercase tracking-widest px-3 py-1 font-sans">
                      {featuredArticle.category}
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                      <span>{featuredArticle.date}</span>
                      <span>•</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 leading-tight hover:text-neutral-600 transition-colors">
                      <a href={`/noticias/${featuredArticle.slug}`}>
                        {featuredArticle.title}
                      </a>
                    </h2>

                    <p className="text-sm md:text-base text-neutral-600 font-serif leading-relaxed">
                      {featuredArticle.summary}
                    </p>

                    <div className="pt-4">
                      <a
                        href={`/noticias/${featuredArticle.slug}`}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-medium text-neutral-900 border-b border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-all"
                      >
                        Leer artículo completo →
                      </a>
                    </div>
                  </div>
                </article>
              )}

              {/* Cuadrícula del Resto de Artículos */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {gridArticles.map((noticia) => (
                  <article
                    key={noticia.id}
                    className="bg-white border border-neutral-200 flex flex-col justify-between group hover:shadow-md transition-all duration-500 overflow-hidden"
                  >
                    <div>
                      {/* Contenedor de Imagen */}
                      <div className="aspect-[16/10] overflow-hidden bg-neutral-100 relative">
                        <img
                          src={noticia.imageUrl}
                          alt={noticia.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-neutral-900 text-[10px] uppercase tracking-widest px-2.5 py-1 font-sans border border-neutral-200">
                          {noticia.category}
                        </div>
                      </div>

                      {/* Contenido del Artículo */}
                      <div className="p-6 space-y-3">
                        <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                          <span>{noticia.date}</span>
                          <span>{noticia.readTime}</span>
                        </div>

                        <h3 className="text-lg md:text-xl font-serif text-neutral-900 leading-snug group-hover:text-neutral-600 transition-colors">
                          <a href={`/noticias/${noticia.slug}`}>
                            {noticia.title}
                          </a>
                        </h3>

                        <p className="text-xs md:text-sm text-neutral-600 font-serif line-clamp-3 leading-relaxed">
                          {noticia.summary}
                        </p>
                      </div>
                    </div>

                    {/* Botón de Acción inferior */}
                    <div className="px-6 pb-6 pt-2 border-t border-neutral-100 flex items-center justify-between">
                      <a
                        href={`/noticias/${noticia.slug}`}
                        className="text-[11px] uppercase tracking-[0.18em] font-sans font-medium text-neutral-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                      >
                        Leer más <span>→</span>
                      </a>
                      <span className="text-xs text-neutral-300 group-hover:text-neutral-500 transition-colors">
                        ↗
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
