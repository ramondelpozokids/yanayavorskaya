"use client";
import React from 'react';
import { NOTICIAS_DATA, Noticia } from '../../data/noticiasData';
import { SchemaOrg } from '../seo/SchemaOrg';
import { SeoMeta } from '../seo/SeoMeta';

interface NoticiaDetailProps {
  slug: string;
}

export const NoticiaDetail: React.FC<NoticiaDetailProps> = ({ slug }) => {
  const noticia = NOTICIAS_DATA.find((n) => n.slug === slug) || NOTICIAS_DATA[0];

  // Artículos relacionados (misma categoría o siguientes en el array)
  const relatedArticles = NOTICIAS_DATA.filter(
    (n) => n.id !== noticia.id && (n.category === noticia.category || true)
  ).slice(0, 3);

  const handleShare = (platform: 'twitter' | 'facebook' | 'linkedin' | 'copy') => {
    const url = typeof window !== 'undefined' ? window.location.href : `https://yanayavorskaya.com/noticias/${noticia.slug}`;
    if (platform === 'copy') {
      navigator.clipboard?.writeText(url);
      alert('Enlace copiado al portapapeles.');
      return;
    }
    let shareUrl = '';
    if (platform === 'twitter') shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(noticia.title)}`;
    if (platform === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    if (platform === 'linkedin') shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <>
      <SeoMeta
        title={noticia.title}
        description={noticia.summary}
        ogImage={noticia.imageUrl}
        url={`https://yanayavorskaya.com/noticias/${noticia.slug}`}
        type="article"
      />
      <SchemaOrg type="Article" data={noticia} />

      <article className="min-h-screen bg-[#FCFCFA] text-[#1A1A1A] py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Navegación y migas de pan */}
          <div className="mb-8 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-400">
            <a href="/noticias" className="hover:text-neutral-900 transition-colors">
              ← Volver al Diario de Noticias
            </a>
            <span>{noticia.category}</span>
          </div>

          {/* Cabecera del Artículo */}
          <header className="space-y-6 mb-12">
            <h1 className="text-3xl md:text-5xl font-serif font-light text-neutral-900 leading-tight">
              {noticia.title}
            </h1>
            <div className="flex items-center justify-between py-4 border-y border-neutral-200 text-xs font-sans text-neutral-500">
              <div className="flex items-center gap-4">
                <span>Por <strong>Yana Yavorskaya</strong></span>
                <span>•</span>
                <span>{noticia.date}</span>
                <span>•</span>
                <span>{noticia.readTime}</span>
              </div>

              {/* Botones de Compartir */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 mr-1">Compartir:</span>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-1.5 border border-neutral-200 hover:border-neutral-900 text-neutral-600 hover:text-neutral-900 transition-colors"
                  title="Compartir en X (Twitter)"
                >
                  𝕏
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-1.5 border border-neutral-200 hover:border-neutral-900 text-neutral-600 hover:text-neutral-900 transition-colors"
                  title="Compartir en Facebook"
                >
                  FB
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="p-1.5 border border-neutral-200 hover:border-neutral-900 text-neutral-600 hover:text-neutral-900 transition-colors"
                  title="Copiar enlace"
                >
                  🔗
                </button>
              </div>
            </div>
          </header>

          {/* Imagen Destacada Grande (Hero) */}
          <div className="aspect-[16/9] w-full mb-14 overflow-hidden bg-neutral-100 border border-neutral-200 shadow-sm">
            <img
              src={noticia.imageUrl}
              alt={noticia.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Cuerpo del Artículo (Textos de Artista) */}
          <div className="space-y-6 font-serif text-lg md:text-xl text-neutral-800 leading-relaxed max-w-3xl mx-auto mb-16">
            <div className="text-xl md:text-2xl font-serif italic text-neutral-600 border-l-2 border-neutral-900 pl-6 py-2 my-8">
              {noticia.summary}
            </div>

            {noticia.content.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-neutral-900'
                    : ''
                }
              >
                {para}
              </p>
            ))}
          </div>

          {/* Bio corta de la autora en el pie del artículo */}
          <div className="bg-neutral-50 border border-neutral-200 p-8 my-16 flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
              alt="Yana Yavorskaya"
              className="w-20 h-20 rounded-full object-cover grayscale border border-neutral-300"
            />
            <div className="space-y-2 text-center md:text-left">
              <h4 className="font-serif text-lg text-neutral-900">Sobre Yana Yavorskaya</h4>
              <p className="text-xs font-sans text-neutral-600 leading-relaxed">
                Artista contemporánea y pintora afincada en Madrid. Su obra indaga en las veladuras, el silencio del lino virgen y la captación de la luz en transiciones estacionales y espaciales.
              </p>
              <a
                href="/sobre-mi"
                className="inline-block text-[11px] uppercase tracking-widest font-mono text-neutral-900 underline mt-1 hover:text-neutral-600"
              >
                Leer biografía completa →
              </a>
            </div>
          </div>

          {/* Artículos Relacionados */}
          <section className="border-t border-neutral-200 pt-16">
            <h3 className="text-xs uppercase font-serif tracking-[0.25em] text-neutral-500 mb-8">
              Otros artículos recomendados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((rel) => (
                <div key={rel.id} className="group border border-neutral-200 bg-white p-5 flex flex-col justify-between">
                  <div>
                    <div className="aspect-[16/10] overflow-hidden mb-4 bg-neutral-100">
                      <img
                        src={rel.imageUrl}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono block mb-2">
                      {rel.category}
                    </span>
                    <h4 className="font-serif text-base text-neutral-900 leading-snug group-hover:text-neutral-600 transition-colors mb-3">
                      <a href={`/noticias/${rel.slug}`}>{rel.title}</a>
                    </h4>
                  </div>
                  <a
                    href={`/noticias/${rel.slug}`}
                    className="text-[11px] uppercase tracking-wider font-sans text-neutral-900 pt-3 border-t border-neutral-100 inline-block"
                  >
                    Leer artículo →
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
};
