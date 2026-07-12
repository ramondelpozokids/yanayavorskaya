import React from 'react';
import Head from 'next/head';

interface SeoMetaProps {
  title: string;
  description: string;
  ogImage?: string;
  url?: string;
  type?: 'website' | 'article';
}

export const SeoMeta: React.FC<SeoMetaProps> = ({
  title,
  description,
  ogImage = 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
  url = 'https://yanayavorskaya.com',
  type = 'website',
}) => {
  const fullTitle = `${title} | Yana Yavorskaya Studio`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta charSet="utf-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Yana Yavorskaya | Artista Contemporánea" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};
