import React from 'react';

/**
 * Sección Visual de Fotografías y Cercanía (Página 9-10 de la Orden de Trabajo).
 * Muestra el taller por dentro, la artista pintando, herramientas, pinceles y preparación de ferias.
 */

const FOTOGRAFIAS_STUDIO = [
  {
    url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    caption: 'Yana pintando veladuras en el estudio de Madrid',
    category: 'En el caballete'
  },
  {
    url: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800&q=80',
    caption: 'Colección de pinceles y espátulas italianas',
    category: 'Herramientas nobles'
  },
  {
    url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    caption: 'Detalle de empaste al óleo sobre lino belga virgen',
    category: 'Materia & Textura'
  },
  {
    url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    caption: 'Preparando embalajes y bastidores para exposición',
    category: 'Montaje museográfico'
  },
  {
    url: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80',
    caption: 'Conversando con coleccionistas en visita privada al estudio',
    category: 'Diálogo & Cercanía'
  },
  {
    url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    caption: 'La luz difusa del norte iluminando la mesa de mezclas',
    category: 'Luz invernal'
  }
];

export const FotografiasSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-neutral-200 px-6 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* Cabecera minimalista */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-neutral-500 block mb-2">
            Intimidad & Proceso
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-neutral-900 mb-4">
            El Estudio por Dentro
          </h2>
          <p className="text-base md:text-lg font-serif text-neutral-600 leading-relaxed">
            La creación pictórica es un oficio de paciencia, silencio y materia. Un recorrido fotográfico por los instantes cotidianos del taller: los bastidores en preparación, el olor al aceite de linaza y el diálogo cercano con quienes nos visitan.
          </p>
        </div>

        {/* Cuadrícula Asimétrica Elegante */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FOTOGRAFIAS_STUDIO.map((foto, index) => (
            <div
              key={index}
              className="group overflow-hidden bg-neutral-100 border border-neutral-200 flex flex-col justify-between"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={foto.url}
                  alt={foto.caption}
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-neutral-900/80 text-white text-[9px] uppercase tracking-widest px-2.5 py-1 backdrop-blur-sm font-sans">
                  {foto.category}
                </span>
              </div>
              <div className="p-4 bg-white border-t border-neutral-100">
                <p className="text-xs font-serif italic text-neutral-600 text-center leading-relaxed">
                  «{foto.caption}»
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
