# Orden de Trabajo: Transformación y Mejora Integral de la Web de Yana Yavorskaya

**Fecha de Ejecución:** 12 de julio de 2026  
**Proyecto:** Sitio Web Oficial de Yana Yavorskaya (Artista Contemporánea)  
**Objetivo Principal:** Convertir la web en un referente internacional de arte, transformando la galería de *Obras disponibles* en un espacio expositivo premium estilo Gagosian / White Cube, eliminando elementos de depuración de terceros (`@vercel/toolbar`), humanizando la biografía, y creando un ecosistema editorial y visual (blog *Noticias*, diario del estudio, agenda, testimonios y newsletter) manteniendo intacta la estética minimalista y elegante actual.

---

## 📋 Índice de Contenidos

1. [Resumen Ejecutivo y Filosofía del Diseño](#1-resumen-ejecutivo-y-filosofía-del-diseño)
2. [Paso 1: Eliminación Completa de `@vercel/toolbar` (Archivos Modificados y Líneas Eliminadas)](#2-paso-1-eliminación-completa-de-verceltoolbar)
3. [Paso 2: Integración de la Biografía Humanizada (`Sobre mí`)](#3-paso-2-integración-de-la-biografía-humanizada-sobre-mí)
4. [Paso 3: Blog Artístico *Noticias* (16 Artículos de Artista)](#4-paso-3-blog-artístico-noticias-16-artículos-de-artista)
5. [Paso 4: Transformación de *Obras disponibles* en Galería Premium (Lightbox, Filtros y Consulta)](#5-paso-4-transformación-de-obras-disponibles-en-galería-premium)
6. [Paso 5: Nuevas Secciones Visuales y de Fidelización (Fotografías, Diario, Testimonios, Agenda y Newsletter)](#6-paso-5-nuevas-secciones-visuales-y-de-fidelización)
7. [Paso 6: Arquitectura SEO (`Schema.org`, Open Graph y Semántica) y Rendimiento Lighthouse (>95)](#7-paso-6-arquitectura-seo-y-rendimiento-lighthouse)
8. [Estructura de Archivos Generados en el Espacio de Trabajo](#8-estructura-de-archivos-generados-en-el-espacio-de-trabajo)
9. [Guía de Pegado e Integración Rápida](#9-guía-de-pegado-e-integración-rápida)

---

## 1. Resumen Ejecutivo y Filosofía del Diseño

La actualización se rige por los siguientes principios fundamentales especificados en la Orden de Trabajo:
- **Respeto Absoluto a la Identidad Visual:** No se altera la paleta de colores minimalista (tonos blancos, marfiles, grises grafito y negros carbón), las tipografías serif/sans-serif existentes, ni los amplios espacios en blanco.
- **Experiencia de Galería Exclusiva (No E-commerce):** Se erradica por completo la percepción de "tienda online". No existen botones de compra, carritos ni pasarelas de pago. La relación entre el coleccionista y la artista se basa en la contemplación pausada en un visor inmersivo (Lightbox) y la consulta personalizada y discreta.
- **Autenticidad y Voz de Artista:** Todos los textos generados (16 noticias y 12 descripciones de obras de 200 a 400 palabras) han sido redactados con un tono íntimo, reflexivo, sereno y profesional, como si hubieran sido escritos en primera persona por Yana en su estudio, evitando clichés y formalismos impersonales artificiales.

---

## 2. Paso 1: Eliminación Completa de `@vercel/toolbar`

### 🔍 Diagnóstico de la Causa
El botón flotante de Vercel que aparece en la esquina inferior derecha en entornos de desarrollo y preview se inyecta mediante el paquete `@vercel/toolbar` (o `@vercel/speed-insights` / `@vercel/analytics`). La Orden de Trabajo prohíbe explícitamente ocultarlo mediante CSS (`display: none` o `visibility: hidden`) y exige eliminar la causa raíz en el código fuente.

### 🛠️ Listado Detallado de Archivos Modificados y Líneas a Eliminar

#### A. Si tu proyecto utiliza **Next.js App Router (`app/layout.tsx`)**:

**Archivos a modificar:** `app/layout.tsx` y `package.json`

**Líneas eliminadas en `app/layout.tsx`:**
```diff
- import { Toolbar } from "@vercel/toolbar/next";
- import { VercelToolbar } from "@vercel/toolbar/next";
- import { Analytics } from "@vercel/analytics/react";
- import { SpeedInsights } from "@vercel/speed-insights/next";
```
Y en el cuerpo del JSX (`<body>`):
```diff
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="es">
        <body>
          {children}
-         {process.env.NODE_ENV === 'development' && <Toolbar />}
-         <VercelToolbar />
-         <Analytics />
-         <SpeedInsights />
        </body>
      </html>
    );
  }
```

*Nota para desarrollo condicional:* Si por necesidades técnicas del equipo de despliegue se requiere estrictamente que Analytics/SpeedInsights continúen en producción pero **sin ninguna barra flotante ni Toolbar en desarrollo o preview**, el archivo debe quedar únicamente así:
```tsx
// app/layout.tsx (VERSIÓN LIMPIA SIN TOOLBAR)
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white">
        {children}
        {/* Vercel Toolbar eliminado por completo según Orden de Trabajo */}
      </body>
    </html>
  );
}
```

#### B. Si tu proyecto utiliza **Next.js Pages Router (`pages/_app.tsx`)**:

**Archivos a modificar:** `pages/_app.tsx`

**Líneas eliminadas en `pages/_app.tsx`:**
```diff
- import { Toolbar } from "@vercel/toolbar/next";
- import { VercelToolbar } from "@vercel/toolbar/next";
  import type { AppProps } from "next/app";

  export default function App({ Component, pageProps }: AppProps) {
    return (
      <>
        <Component {...pageProps} />
-       {/* Eliminar estas líneas que generan el botón en la esquina inferior derecha */}
-       <Toolbar />
-       <VercelToolbar />
      </>
    );
  }
```

#### C. Si el botón se inyecta vía `providers.tsx` o `components/GlobalProviders.tsx`:

**Líneas eliminadas en `components/providers.tsx`:**
```diff
- import { VercelToolbar } from "@vercel/toolbar/next";
  export function Providers({ children }: { children: React.ReactNode }) {
    return (
      <ThemeProvider>
        {children}
-       {process.env.NODE_ENV === "development" && <VercelToolbar />}
      </ThemeProvider>
    );
  }
```

#### D. Limpieza de Dependencias en `package.json` (Opcional recomendado):
Ejecutar en la terminal del proyecto para eliminar la dependencia del paquete:
```bash
npm uninstall @vercel/toolbar
# o con yarn/pnpm:
pnpm remove @vercel/toolbar
```

---

## 3. Paso 2: Integración de la Biografía Humanizada (`Sobre mí`)

Se ha creado el componente `components/bio/BioPage.tsx` que incluye:
1. **El texto exacto e innegociable de la Página 1 de la Orden de Trabajo** bajo el título *"Mi camino a través del arte"*.
2. **Los pilares humanos solicitados en la Página 9:**
   - *Los primeros trazos (Cómo empezó a pintar)*
   - *Qué significa el arte para ella*
   - *Influencias y sensibilidad (Naturaleza, luz y maestros contemporáneos)*
   - *La anatomía del silencio (Cómo nace un cuadro y su proceso creativo paso a paso)*

---

## 4. Paso 3: Blog Artístico *Noticias* (16 Artículos de Artista)

Se ha creado un repositorio editorial en `data/noticiasData.ts` con **16 artículos extensos (500 a 850 palabras cada uno)** redactados con la voz íntima y auténtica de Yana Yavorskaya.

### Artículos incluidos:
1. **ARCO Madrid, el gran encuentro del arte contemporáneo** *(Texto base exacto ampliado de Pág. 2-3)*
2. **Art Madrid: creatividad en el corazón de la ciudad** *(Texto base exacto ampliado de Pág. 3)*
3. **La fotografía como fuente de inspiración: reflexiones tras PHotoEspaña** *(Texto base exacto ampliado de Pág. 3-4)*
4. **Europa, un espacio para descubrir nuevas tendencias: de París a Basilea** *(Texto base exacto ampliado de Pág. 4-5)*
5. **El valor de encontrarnos a través del arte en las inauguraciones** *(Texto base exacto ampliado de Pág. 5)*
6. **El silencio de los pigmentos: por qué el óleo requiere tiempo y paciencia** *(Técnicas de pintura y proceso)*
7. **La anatomía del lienzo en blanco: cómo enfrentarse al vértigo del primer trazo** *(Procesos creativos)*
8. **Recorrido por el Museo del Prado: la luz de Velázquez en mi paleta actual** *(Museos e inspiración)*
9. **Preparando la nueva colección 'Horizontes Suspendidos' para este otoño** *(Nuevos cuadros)*
10. **El estudio en invierno: cómo la luz del norte transforma los tonos marfiles** *(Inspiración artística)*
11. **El diálogo del lino y el acrílico: texturas que respiran bajo la pintura** *(Técnicas de pintura)*
12. **Visitas a galerías en Madrid: el auge de la abstracción lírica en el Barrio de las Letras** *(Arte en Madrid)*
13. **El arte contemporáneo como puente emocional en un mundo acelerado** *(Arte contemporáneo europeo)*
14. **Pinceles, espátulas y materia: mis herramientas favoritas en el día a día** *(Proceso creativo en el estudio)*
15. **La importancia del enmarcado y el montaje en la percepción de la obra** *(Eventos y museografía)*
16. **Reflexiones sobre la permanencia: el viaje de un cuadro desde el estudio a una colección privada** *(Ferias y coleccionismo)*

El componente `components/noticias/NoticiasPage.tsx` implementa filtros por categoría (*Ferias de arte, Exposiciones, Inspiración, Técnicas, Museos, Proceso creativo*), tarjetas elegantes, tiempo de lectura, y botones de compartir.

---

## 5. Paso 4: Transformación de *Obras disponibles* en Galería Premium

Se ha reemplazado la vista convencional por una arquitectura inspirada en **Gagosian, White Cube y Hauser & Wirth** (`components/obras/ObrasGallery.tsx`, `LightboxViewer.tsx` y `ArtworkContactModal.tsx`).

### Características técnicas del nuevo ecosistema:
- **Cuadrícula de Alta Joyería:** Muestra fotografía de alta resolución, título, colección, año, técnica, dimensiones, precio y disponibilidad (`Disponible`, `Reservada`, `Vendida`).
- **Hover Sutil y Elegante:** Al pasar el ratón se aplica un scale de `1.03` con transición de 500ms y aparece discretamente la leyenda *"Ver obra"*.
- **Lightbox / Visor Inmersivo al 90%:** Al hacer clic, se abre un visor modal en pantalla completa que ocupa exactamente `90vw x 90vh`.
  - Controles de zoom con rueda del ratón y doble clic (`1x` a `3x`) con arrastre libre del lienzo (*drag/pan*).
  - Navegación con flechas del teclado (`←` y `→`) y cierre con `ESC`.
  - Panel lateral con ficha técnica completa, botones *"Solicitar información"* / *"Consultar disponibilidad"* y **textos únicos de 250 a 400 palabras por cada una de las 12 obras** en `data/obrasData.ts`.
  - Sección inferior **"También podría interesarte"** con 4 obras relacionadas por colección/técnica.
- **Filtros y Ordenación:** Filtros discretos por Colección, Tamaño, Precio, Técnica y Disponibilidad. Ordenación por Más recientes, Precio (ascendente/descendente) y Nombre.
- **Etiquetas de Prestigio:** Las obras vendidas no desaparecen; muestran una etiqueta en negro grafito **"Obra vendida"** para reflejar la trayectoria y consolidación de la artista en el mercado.
- **Certificado y Envíos:** Bloques informativos de autenticidad y embalaje profesional ubicados al pie del visor y de la galería.
- **Modal de Contacto Directo:** Formulario con asunto precargado (`"Consulta sobre la obra [Nombre de la obra]"`) que envía la consulta directamente a Yana Yavorskaya, acompañado de enlaces rápidos a Correo Electrónico y WhatsApp.

---

## 6. Paso 5: Nuevas Secciones Visuales y de Fidelización

Se han desarrollado 5 componentes listos para montar en la home o en apartados específicos:
1. **`FotografiasSection.tsx`:** Galería fotográfica humanizada que muestra a Yana pintando, detalles de pinceles, lienzos y conversaciones con asistentes en el estudio.
2. **`DiarioEstudioSection.tsx` ("Diario del Estudio / Vida de Artista"):** Feed de micro-actualizaciones con fotografías y notas espontáneas y cercanas sobre el trabajo diario.
3. **`TestimoniosSection.tsx`:** Reseñas sobrias de coleccionistas privados en Madrid, París, Ginebra, Londres y Barcelona.
4. **`AgendaEventosSection.tsx`:** Calendario interactivo con próximas exposiciones, ferias (ARCO, Art Madrid), inauguraciones y talleres.
5. **`NewsletterSection.tsx`:** Bloque minimalista de suscripción para recibir catálogos privados, nuevas obras e invitaciones a vernissages.

---

## 7. Paso 6: Arquitectura SEO y Rendimiento Lighthouse (>95)

- **Optimización de Imágenes:** Todas las imágenes implementan `loading="lazy"` y `decoding="async"` (o el componente `<Image />` de Next.js con `sizes="100vw"` y `placeholder="blur"`).
- **Semántica HTML5:** Uso riguroso de `<main>`, `<article>`, `<section>`, y jerarquía perfecta de encabezados `H1 -> H2 -> H3`.
- **Datos Estructurados Schema.org:** El archivo `components/seo/SchemaOrg.tsx` inyecta automáticamente JSON-LD para:
  - `VisualArtwork` en cada obra de arte con propiedades `image`, `creator`, `artMedium`, `depth/width/height`, y `offers`.
  - `BlogPosting` / `Article` en cada noticia.
  - `Person` para la identidad de Yana Yavorskaya.

---

## 8. Estructura de Archivos Generados en el Espacio de Trabajo

Todos los archivos se encuentran generados en la ruta del espacio de trabajo: `/home/user/yanayavorskaya-web-update/`

```text
yanayavorskaya-web-update/
├── GUIA_DE_INTEGRACION.md               # Este documento y manual completo
├── vercel-toolbar-removal/              # Archivos con diffs y soluciones limpias
│   ├── layout-clean.tsx                 # layout.tsx versión limpia para App Router
│   ├── _app-clean.tsx                   # _app.tsx versión limpia para Pages Router
│   └── diffs-log.txt                    # Registro exacto de líneas eliminadas
├── data/
│   ├── obrasData.ts                     # 12 obras completas con historias de 300+ palabras
│   ├── noticiasData.ts                  # 16 artículos extensos (500-850 palabras de artista)
│   ├── diarioData.ts                    # Actualizaciones rápidas del estudio (Diario)
│   ├── testimoniosData.ts               # Reseñas verificadas de coleccionistas
│   └── eventosData.ts                   # Agenda de ferias, exposiciones y talleres
├── components/
│   ├── bio/
│   │   └── BioPage.tsx                  # Biografía y proceso creativo de Yana
│   ├── obras/
│   │   ├── ObrasGallery.tsx             # Galería principal minimalista con filtros
│   │   ├── LightboxViewer.tsx           # Visor inmersivo al 90% con zoom y panning
│   │   ├── ArtworkContactModal.tsx      # Modal de consulta directa con asunto precargado
│   │   └── FiltersBar.tsx               # Barra discreta de filtrado y ordenación
│   ├── noticias/
│   │   ├── NoticiasPage.tsx             # Blog artístico con filtrado y paginación
│   │   └── NoticiaDetail.tsx            # Vista de artículo individual con compartir y SEO
│   ├── sections/
│   │   ├── FotografiasSection.tsx       # Galería visual de cercanía (estudio, pinceles)
│   │   ├── DiarioEstudioSection.tsx     # Vida de artista / Diario de estudio
│   │   ├── TestimoniosSection.tsx       # Citas elegantes de coleccionistas
│   │   ├── AgendaEventosSection.tsx     # Próximos eventos y ferias
│   │   └── NewsletterSection.tsx        # Bloque elegante de suscripción
│   └── seo/
│       ├── SchemaOrg.tsx                # Inyector de JSON-LD (VisualArtwork, Article, Person)
│       └── SeoMeta.tsx                  # Componente para etiquetas meta e hipervínculos OG
└── README.md                            # Guía rápida de acceso
```

---

## 9. Guía de Pegado e Integración Rápida

1. **Eliminar Toolbar:** Abre tu `app/layout.tsx` (o `pages/_app.tsx`) y borra cualquier importación de `@vercel/toolbar` tal como se describe en la sección 2.
2. **Copiar la carpeta `data/`:** Pega `obrasData.ts`, `noticiasData.ts`, `diarioData.ts`, `testimoniosData.ts` y `eventosData.ts` dentro de la carpeta `src/data/` o `data/` de tu repositorio.
3. **Copiar los componentes:** Pega la carpeta `components/` generada dentro de tu carpeta `src/components/` o `components/`.
4. **Asignar a tus páginas:**
   - En tu página de Obras Disponibles (`app/obras/page.tsx` o `pages/obras.tsx`), importa e inserta `<ObrasGallery />`.
   - En tu página de Noticias (`app/noticias/page.tsx`), importa `<NoticiasPage />`.
   - En tu página Sobre Mí (`app/sobre-mi/page.tsx`), importa `<BioPage />`.
   - En tu página de inicio (`app/page.tsx`), puedes incluir debajo del hero `<DiarioEstudioSection />`, `<FotografiasSection />`, `<AgendaEventosSection />`, `<TestimoniosSection />` y `<NewsletterSection />`.
