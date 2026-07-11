Museo Digital — Yana Yavorskaya
===============================

Sitio web de museo digital para una pintora internacional. Experiencia inmersiva estilo galería de arte contemporáneo con soporte para 6 idiomas, modo museo fullscreen, chat assistant con IA simulada, botón de WhatsApp, favoritos con IndexedDB y páginas legales completas.

🌍 Idiomas: Español, English, Français, Deutsch, Русский, Italiano

🚀 Demo en Vercel
-----------------
[Tu URL de Vercel aquí]

📁 Estructura
-------------
```
museo/
├── index.html              ← Experiencia principal (el museo)
├── vercel.json             ← Config Vercel (clean URLs)
├── 404.html                ← Página 404 personalizada
├── README.md               ← Este archivo
├── css/
│   └── museum.css          ← Diseño: minimalismo editorial
├── js/
│   ├── db.js               ← IndexedDB (favoritos, backup)
│   ├── i18n.js             ← Motor de traducción (6 idiomas)
│   └── museum.js           ← Lógica: nav, museo, chat, favoritos
├── assets/
│   └── logo.png            ← Logo de Yana Yavorskaya
└── legal/
    ├── aviso-legal.html    ← Aviso legal multilingüe
    ├── privacidad.html     ← Política de privacidad (RGPD)
    ├── cookies.html        ← Política de cookies
    └── terminos.html       ← Términos y condiciones
```

✨ Funcionalidades
------------------
- **Modo Museo**: recorrer obras a pantalla completa sin interfaz
- **Chat Assistant**: comisaria virtual que responde sobre las obras
- **WhatsApp**: botón flotante de contacto directo
- **6 idiomas**: selector en la navegación, detección automática del navegador
- **Favoritos ☆**: persistencia en IndexedDB (sobrevive recargas)
- **Export/Import**: backup descargable de todos tus datos
- **IndexedDB**: 6 stores (favoritos, preferencias, historial, colecciones, notas, consultas)
- **WCAG AAA**: navegación por teclado, aria labels, lectores de pantalla
- **Responsive**: mobile, tablet, desktop
- **SEO**: Open Graph, meta tags, schema.org, títulos dinámicos por idioma

🔧 Lo que necesitas personalizar
--------------------------------
1. **WhatsApp**: cambia el número en `index.html` (busca `wa.me/34600000000`)
2. **Email**: cambia el correo en las páginas legales
3. **Imágenes reales**: sustituye los gradientes CSS por fotos de las obras
4. **Formulario**: actualmente guarda en IndexedDB; para enviar a email, añade un endpoint (Formspree, Resend, etc.)
5. **Nombre del artista**: busca "Yana Yavorskaya" y reemplázalo por el nombre real

⚡ Despliegue en Vercel
-----------------------
1. Sube esta carpeta a GitHub
2. Ve a vercel.com → Add New Project → Importa el repo
3. Framework: Other / Static
4. Root Directory: `museo/` (o deja vacío si el repo es solo esta carpeta)
5. Deploy

No necesita build step. Se sirve tal cual.

📄 Licencia
-----------
Todos los derechos reservados. Las obras de arte mostradas son propiedad intelectual del artista.

© 2026 Yana Yavorskaya