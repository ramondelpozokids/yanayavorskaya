import React from 'react';
import type { Artwork } from '../../data/obrasData';
import type { Noticia } from '../../data/noticiasData';

/**
 * Componente que inyecta metadatos estructurados de Schema.org en formato JSON-LD.
 * Optimizado para motores de búsqueda (Google, Bing) y estándares semánticos de arte y museografía.
 */

interface SchemaOrgProps {
  type: 'Person' | 'VisualArtwork' | 'Article' | 'Event';
  data?: any;
}

export const SchemaOrg: React.FC<SchemaOrgProps> = ({ type, data }) => {
  let schemaContent: Record<string, any> = {};

  if (type === 'Person') {
    schemaContent = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Yana Yavorskaya',
      jobTitle: 'Artista Contemporánea y Pintora',
      url: 'https://yanayavorskaya.com',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Madrid',
        addressRegion: 'Comunidad de Madrid',
        addressCountry: 'ES'
      },
      description:
        'Artista contemporánea especializada en pintura al óleo, acrílico y abstracción lírica. Sus obras exploran el silencio, la luz y la memoria a través de texturas nobles sobre lino.',
      knowsAbout: [
        'Pintura contemporánea',
        'Abstracción lírica',
        'Óleo sobre lienzo de lino',
        'Veladuras y técnicas minerales',
        'Arte contemporáneo europeo'
      ]
    };
  } else if (type === 'VisualArtwork' && data) {
    const artwork = data as Artwork;
    schemaContent = {
      '@context': 'https://schema.org',
      '@type': 'VisualArtwork',
      name: artwork.title,
      image: artwork.imageUrl,
      description: artwork.description,
      creator: {
        '@type': 'Person',
        name: 'Yana Yavorskaya',
        url: 'https://yanayavorskaya.com/sobre-mi'
      },
      artMedium: artwork.medium,
      artform: 'Pintura Contemporánea / Abstracción',
      dateCreated: `${artwork.year}`,
      width: artwork.dimensions.split('×')[0]?.trim() || '',
      height: artwork.dimensions.split('×')[1]?.replace('cm', '').trim() || '',
      offers: {
        '@type': 'Offer',
        price: artwork.price,
        priceCurrency: 'EUR',
        availability:
          artwork.status === 'Disponible'
            ? 'https://schema.org/InStock'
            : artwork.status === 'Reservada'
            ? 'https://schema.org/LimitedAvailability'
            : 'https://schema.org/SoldOut'
      }
    };
  } else if (type === 'Article' && data) {
    const noti = data as Noticia;
    schemaContent = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: noti.title,
      image: [noti.imageUrl],
      datePublished: noti.date,
      author: {
        '@type': 'Person',
        name: 'Yana Yavorskaya',
        url: 'https://yanayavorskaya.com/sobre-mi'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Yana Yavorskaya Studio',
        logo: {
          '@type': 'ImageObject',
          url: 'https://yanayavorskaya.com/logo.png'
        }
      },
      description: noti.summary,
      articleSection: noti.category
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaContent, null, 2) }}
    />
  );
};
