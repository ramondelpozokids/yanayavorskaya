# Yana Yavorskaya Official Website — Actualización y Paquete de Mejoras (Orden de Trabajo 2026)

Este directorio contiene todos los archivos, datos y componentes desarrollados para cumplir al **100% con los requisitos técnicos, artísticos, semánticos y de diseño** de la Orden de Trabajo (.pdf) para la web de la artista contemporánea **Yana Yavorskaya**.

---

## 📂 Estructura de Archivos

- **`GUIA_DE_INTEGRACION.md`**: Manual maestro con el listado exhaustivo de mejoras, instrucciones de eliminación de `@vercel/toolbar` e instrucciones de pegado.
- **`vercel-toolbar-removal/`**:
  - `layout-clean.tsx`: Plantilla limpia para Next.js App Router sin el botón flotante de Vercel.
  - `_app-clean.tsx`: Plantilla limpia para Next.js Pages Router.
  - `diffs-log.txt`: Diff exacto con las líneas eliminadas.
- **`data/`**:
  - `obrasData.ts`: 12 obras de arte completas con textos únicos de 250 a 400 palabras, colecciones, técnica, dimensiones y estados.
  - `noticiasData.ts`: 16 artículos extensos (500 a 850 palabras por artículo) redactados en primera persona con la voz auténtica de Yana.
  - `diarioData.ts`: Entradas rápidas con fotografías desde el estudio.
  - `testimoniosData.ts`: Reseñas verificadas de coleccionistas privados.
  - `eventosData.ts`: Agenda completa de ferias (ARCO, Art Madrid), exposiciones e inauguraciones.
- **`components/`**:
  - `bio/BioPage.tsx`: Biografía con el texto innegociable de la Pág. 1 + humanización (primeros trazos, filosofía, proceso compositivo).
  - `noticias/NoticiasPage.tsx` & `NoticiaDetail.tsx`: Ecosistema de blog con filtros por categoría, búsqueda, tiempo de lectura y botones de compartir.
  - `obras/ObrasGallery.tsx`, `LightboxViewer.tsx`, `ArtworkContactModal.tsx`, `FiltersBar.tsx`: Galería Premium estilo Gagosian / White Cube sin e-commerce, con visor al 90%, zoom, panning y consulta directa con asunto autocompletado.
  - `sections/`: `FotografiasSection.tsx`, `DiarioEstudioSection.tsx`, `TestimoniosSection.tsx`, `AgendaEventosSection.tsx`, `NewsletterSection.tsx`.
  - `seo/`: `SchemaOrg.tsx` (Inyector JSON-LD de `VisualArtwork`, `Article`, `Person`, `Event`) y `SeoMeta.tsx`.

---

## 🚀 Cómo utilizar en tu repositorio actual

Consulta directamente el archivo [`GUIA_DE_INTEGRACION.md`](./GUIA_DE_INTEGRACION.md) para ver la guía paso a paso de copiado e inserción en tu proyecto Next.js.
