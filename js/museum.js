
/* Nuclear Vercel Live Feedback Killer */
(function() {
  function destroyVercel() {
    var selectors = [
      'vercel-live-feedback', '#vercel-live-feedback', '[id*="vercel-live"]',
      '[id*="vercel-toolbar"]', 'vercel-toolbar', '.vercel-toolbar',
      'iframe[src*="vercel.live"]', 'iframe[id*="vercel"]', 'div[class*="vercel-toolbar"]'
    ];
    selectors.forEach(function(sel) {
      document.querySelectorAll(sel).forEach(function(el) {
        el.remove();
      });
    });
    // Also remove from any shadowRoot if accessible
    document.querySelectorAll('*').forEach(function(el) {
      if (el.shadowRoot) {
        selectors.forEach(function(sel) {
          el.shadowRoot.querySelectorAll(sel).forEach(function(subEl) { subEl.remove(); });
        });
      }
    });
  }
  destroyVercel();
  setInterval(destroyVercel, 300);
  window.addEventListener('DOMContentLoaded', destroyVercel);
  window.addEventListener('load', destroyVercel);
})();


/* Force kill any Vercel Toolbar */
(function() {
  function removeVercelToolbar() {
    document.querySelectorAll('vercel-toolbar, #vercel-toolbar, [data-vercel-toolbar], .vercel-toolbar').forEach(function(el){
      el.remove();
    });
  }
  removeVercelToolbar();
  setInterval(removeVercelToolbar, 500);
  window.addEventListener('DOMContentLoaded', removeVercelToolbar);
})();

/* ============================================================
   MUSEO DIGITAL — Lógica principal + Chat Assistant
   Navegación, scroll, modo museo, favoritos, chat, i18n
   ============================================================ */

(function () {
  'use strict';

  function _(key) { try { return MuseoI18n.t(key); } catch (_) { return key; } }

  const OBRA = 'assets/obras/';
  const COLECCIONES = [
    {
      id: 'luz-y-sombra', titulo: 'Luz y Sombra',
      obras: [
        { id:'obra-1', titulo:'Amanecer en la Bruma', ano:'2024', tecnica:'Óleo sobre lienzo', medidas:'180×220 cm', img:OBRA+'amanecer-bruma.jpg' },
        { id:'obra-2', titulo:'El Último Rayo',       ano:'2023', tecnica:'Óleo sobre lienzo', medidas:'150×200 cm', img:OBRA+'ultimo-rayo.jpg' },
        { id:'obra-3', titulo:'Interludio',            ano:'2023', tecnica:'Técnica mixta',    medidas:'120×160 cm', img:OBRA+'interludio.jpg' },
        { id:'obra-4', titulo:'Claroscuro No. 7',     ano:'2022', tecnica:'Óleo sobre tabla', medidas:'90×120 cm',   img:OBRA+'claroscuro-7.jpg' }
      ]
    },
    {
      id: 'geometria-sagrada', titulo: 'Geometría Sagrada',
      obras: [
        { id:'obra-5', titulo:'Espiral Áurea',       ano:'2022', tecnica:'Acr. sobre lienzo',   medidas:'200×200 cm', img:OBRA+'espiral-aurea.jpg' },
        { id:'obra-6', titulo:'Vesica Piscis',        ano:'2021', tecnica:'Óleo y pan de oro',   medidas:'140×180 cm', img:OBRA+'vesica-piscis.jpg' },
        { id:'obra-7', titulo:'La Flor de la Vida',   ano:'2021', tecnica:'Técnica mixta',      medidas:'160×160 cm', img:OBRA+'flor-de-la-vida.jpg' }
      ]
    },
    {
      id: 'horizontes-interiores', titulo: 'Horizontes Interiores',
      obras: [
        { id:'obra-8',  titulo:'Memoria del Horizonte', ano:'2020', tecnica:'Óleo sobre lienzo', medidas:'190×240 cm', img:OBRA+'memoria-horizonte.jpg' },
        { id:'obra-9',  titulo:'Tierra Callada',        ano:'2019', tecnica:'Óleo sobre lienzo', medidas:'160×200 cm', img:OBRA+'tierra-callada.jpg' },
        { id:'obra-10', titulo:'Umbral',                 ano:'2018', tecnica:'Óleo sobre tabla', medidas:'100×140 cm', img:OBRA+'umbral.jpg' }
      ]
    }
  ];

  const state = { favoritos: new Set(), museumMode: false, museumIndex: 0, lastScrollY: 0, navVisible: true };

  /* ============ INIT ============ */
  async function init() {
    try { await MuseoDB.init(); const favs = await MuseoDB.getFavoritos(); favs.forEach(f => state.favoritos.add(f.id)); }
    catch (_) { loadFavsLS(); }
    try { await MuseoI18n.init(); } catch (_) {}
    window.addEventListener('museo:langChanged', () => { updateFavButtons(); try { MuseoI18n.applyTranslations(); } catch (_) {} });
    try { const mp = await MuseoDB.getPreferencia('museumMode'); if (mp === 'true') state.museumMode = true; } catch (_) {}
    setupNavigation(); setupScrollReveal(); setupMuseumMode(); setupFavorites();
    setupContactForm(); setupSmoothScroll(); setupMuseumModeTrigger(); setupChatAssistant();
    setupScrollUp();
    updateFavButtons();
    console.log('🏛️ Yana Yavorskaya inicializado');
  }

  function loadFavsLS() { try { const r = localStorage.getItem('museo_favoritos'); if (r) JSON.parse(r).forEach(id => state.favoritos.add(id)); } catch (_) {} }
  function saveFavsLS()   { try { localStorage.setItem('museo_favoritos', JSON.stringify([...state.favoritos])); } catch (_) {} }

  /* ============ NAV ============ */
  function setupNavigation() {
    const nav = document.querySelector('.nav'), toggle = document.querySelector('.nav__toggle'), links = document.querySelector('.nav__links');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      const sy = window.scrollY;
      nav.classList.toggle('nav--scrolled', sy > 80);
      if (sy > state.lastScrollY && sy > 300) { if (state.navVisible) { nav.classList.add('nav--hidden'); state.navVisible = false; } }
      else { if (!state.navVisible) { nav.classList.remove('nav--hidden'); state.navVisible = true; } }
      state.lastScrollY = sy;
    }, { passive: true });
    if (toggle && links) {
      toggle.addEventListener('click', () => { links.classList.toggle('is-open'); const e = links.classList.contains('is-open'); toggle.setAttribute('aria-expanded', e); toggle.setAttribute('aria-label', e ? _('nav.close') : _('nav.toggle')); });
      links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { links.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }));
    }
    const sects = document.querySelectorAll('section[id]'), navL = document.querySelectorAll('.nav__links a[href^="#"]');
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) navL.forEach(a => { a.style.color = ''; if (a.getAttribute('href') === '#' + e.target.id) a.style.color = 'var(--accent)'; }); }); }, { rootMargin: '-40% 0px -55% 0px' });
    sects.forEach(s => obs.observe(s));
  }

  /* ============ SCROLL REVEAL ============ */
  function setupScrollReveal() {
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } }); }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  /* ============ MODO MUSEO ============ */
  function setupMuseumMode() {
    const ov = document.querySelector('.museum-mode'), cb = ov?.querySelector('.museum-mode__close'), pb = ov?.querySelector('.museum-mode__prev'), nb = ov?.querySelector('.museum-mode__next');
    if (!ov) return;
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && state.museumMode) closeMuseumMode(); if (state.museumMode && e.key === 'ArrowRight') nextArtwork(); if (state.museumMode && e.key === 'ArrowLeft') prevArtwork(); });
    cb?.addEventListener('click', closeMuseumMode); pb?.addEventListener('click', prevArtwork); nb?.addEventListener('click', nextArtwork);
  }
  function setupMuseumModeTrigger() { document.querySelectorAll('[data-museum-open]').forEach(t => t.addEventListener('click', () => { openMuseumMode(t.getAttribute('data-collection'), parseInt(t.getAttribute('data-obra-index') || '0', 10)); })); }
  function openMuseumMode(cid, oi) {
    const ov = document.querySelector('.museum-mode'), ae = ov?.querySelector('.museum-mode__artwork'); if (!ov || !ae) return;
    state.museumIndex = oi; state.museumMode = true; ov.classList.add('is-active'); document.body.style.overflow = 'hidden';
    MuseoDB.setPreferencia('museumMode', 'true').catch(() => {}); updateMuseumArtwork(ae);
  }
  function closeMuseumMode() { const ov = document.querySelector('.museum-mode'); if (!ov) return; state.museumMode = false; ov.classList.remove('is-active'); document.body.style.overflow = ''; MuseoDB.setPreferencia('museumMode', 'false').catch(() => {}); }
  function nextArtwork() { state.museumIndex++; const ae = document.querySelector('.museum-mode__artwork'); if (ae) updateMuseumArtwork(ae); }
  function prevArtwork() { if (state.museumIndex > 0) { state.museumIndex--; const ae = document.querySelector('.museum-mode__artwork'); if (ae) updateMuseumArtwork(ae); } }

  function updateMuseumArtwork(el) {
    const counter = document.querySelector('.museum-mode__counter');
    const todas = COLECCIONES.flatMap(c => c.obras), total = todas.length, idx = Math.min(state.museumIndex, total - 1), obra = todas[idx];
    if (counter) counter.textContent = `${idx + 1} / ${total}`;
    el.style.opacity = '0';
    setTimeout(() => {
      el.style.backgroundImage = `url(${obra.img})`;
      el.style.backgroundSize = 'cover';
      el.style.backgroundPosition = 'center';
      el.style.opacity = '1';
    }, 350);
    MuseoDB.addVisita(obra).catch(() => {});
  }

  /* ============ FAVORITOS ============ */
  function setupFavorites() {
    document.addEventListener('click', async e => {
      const btn = e.target.closest('.btn--favorite'); if (!btn) return;
      const oid = btn.getAttribute('data-obra-id'), oti = btn.getAttribute('data-obra-titulo') || ''; if (!oid) return;
      try {
        const r = await MuseoDB.toggleFavorito({ id: oid, titulo: oti, fecha: new Date().toISOString() });
        r.action === 'added' ? state.favoritos.add(oid) : state.favoritos.delete(oid);
        saveFavsLS(); updateFavButtons(); showToast(_(r.action === 'added' ? 'toast.favAdded' : 'toast.favRemoved'));
      } catch (_) {
        state.favoritos.has(oid) ? (state.favoritos.delete(oid), showToast(_('toast.favRemoved'))) : (state.favoritos.add(oid), showToast(_('toast.favAdded')));
        saveFavsLS(); updateFavButtons();
      }
    });
  }
  function updateFavButtons() { document.querySelectorAll('.btn--favorite').forEach(btn => { const id = btn.getAttribute('data-obra-id'); const fav = state.favoritos.has(id); btn.classList.toggle('is-fav', fav); btn.textContent = fav ? '✦' : '☆'; btn.setAttribute('aria-label', _('featured.fav')); }); }

  /* ============ TOAST ============ */
  function showToast(msg) { let t = document.querySelector('.toast'); if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); } t.textContent = msg; t.classList.add('is-visible'); clearTimeout(t._timeout); t._timeout = setTimeout(() => t.classList.remove('is-visible'), 2500); }

  /* ============ CONTACTO ============ */
  function setupContactForm() {
    const f = document.getElementById('contact-form'); if (!f) return;
    f.addEventListener('submit', async e => {
      e.preventDefault();
      const n = f.querySelector('[name="nombre"]')?.value || '', m = f.querySelector('[name="email"]')?.value || '', ms = f.querySelector('[name="mensaje"]')?.value || '';
      if (!n || !m || !ms) { showToast(_('toast.formIncomplete')); return; }
      try { await MuseoDB.saveConsulta({ nombre: n, email: m, mensaje: ms }); } catch (_) {}
      showToast(_('toast.formSent')); f.reset();
    });
  }

  /* ============ SMOOTH SCROLL ============ */
  function setupSmoothScroll() { document.addEventListener('click', e => { const a = e.target.closest('a[href^="#"]'); if (!a) return; const t = document.getElementById(a.getAttribute('href').slice(1)); if (t) { e.preventDefault(); t.scrollIntoView({ behavior:'smooth', block:'start' }); const l = document.querySelector('.nav__links'); if (l?.classList.contains('is-open')) { l.classList.remove('is-open'); document.querySelector('.nav__toggle')?.setAttribute('aria-expanded', 'false'); } } }); }

  /* ============ EXPORT/IMPORT ============ */
  window.museoExport = async function () { try { const d = await MuseoDB.exportAll(); const b = new Blob([JSON.stringify(d,null,2)],{type:'application/json'}); const u = URL.createObjectURL(b); const a = document.createElement('a'); a.href=u; a.download=`museo-backup-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(u); showToast(_('toast.exportOk')); } catch (_) { showToast(_('toast.exportError')); } };
  window.museoImport = async function (file) { try { const t = await file.text(); const d = JSON.parse(t); await MuseoDB.importAll(d); const f = await MuseoDB.getFavoritos(); state.favoritos = new Set(f.map(x => x.id)); updateFavButtons(); showToast(_('toast.importOk')); } catch (_) { showToast(_('toast.importError')); } };

  /* ============ CHAT ASSISTANT ============ */
  function setupChatAssistant() {
    const tr = document.getElementById('chat-trigger'), pn = document.getElementById('chat-panel'), cl = document.getElementById('chat-close'), inp = document.getElementById('chat-input'), snd = document.getElementById('chat-send'), msgs = document.getElementById('chat-messages'), qk = document.getElementById('chat-quick');
    if (!tr || !pn || !msgs) return;

    function reply(u) { const m = u.toLowerCase();
      if (m.includes('luz')&&m.includes('sombra')) return 'La colección «Luz y Sombra» (2022–2024) explora la dualidad lumínica en 4 óleos monumentales. La obra central, «Amanecer en la Bruma» (180×220 cm), captura el instante entre la noche y el día. ¿Te gustaría verla en Modo Museo?';
      if (m.includes('geometr')) return '«Geometría Sagrada» (2020–2022) revela el orden oculto de la naturaleza mediante abstracción matemática. Incluye piezas con pan de oro. Yana estudió geometría sagrada durante dos años antes de pintar esta serie.';
      if (m.includes('horizonte')||m.includes('interior')) return '«Horizontes Interiores» (2018–2020) es la colección más íntima. Paisajes que difuminan lo visto y lo sentido. «Memoria del Horizonte» estuvo en la Fondation Louis Vuitton.';
      if (m.includes('técnica')||m.includes('oleo')||m.includes('pinta')) return 'Yana trabaja con óleo sobre lienzo de lino belga. Prepara sus pigmentos con aglutinantes naturales y aplica veladuras — a veces más de 40 capas. También usa pan de oro, acrílico y técnicas mixtas.';
      if (m.includes('dispon')||m.includes('comprar')||m.includes('precio')) return 'Para disponibilidad y precios, usa el formulario de Consulta Privada o escribe por WhatsApp. Todas las consultas son confidenciales.';
      if (m.includes('expos')||m.includes('galer')) return 'Ha expuesto en Gagosian (NY), Tate Modern (Londres), Fondation Louis Vuitton (París), Bienal de Venecia y ARCOmadrid. Próxima individual: 2026 en Hauser & Wirth.';
      if (m.includes('estudio')||m.includes('taller')) return 'Estudio en Madrid con luz del norte. Trabaja en silencio. Prepara pigmentos cada mañana antes de tocar el lienzo. Visitas posibles mediante invitación.';
      if (m.includes('hola')||m.includes('buenas')||m.includes('hello')||m.includes('bonjour')||m.includes('ciao')) return _('chat.greeting');
      return _('chat.default');
    }
    function addMsg(txt, sender) { const d = document.createElement('div'); d.className = `chat-panel__message chat-panel__message--${sender}`; d.textContent = txt; msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight; }
    function sendMsg() { const txt = inp?.value.trim(); if (!txt) return; addMsg(txt, 'user'); if (inp) inp.value = ''; setTimeout(() => addMsg(reply(txt), 'bot'), 600 + Math.random() * 600); }
    setTimeout(() => addMsg(_('chat.greeting'), 'bot'), 300);
    tr.addEventListener('click', () => { pn.classList.add('is-open'); pn.setAttribute('aria-hidden', 'false'); });
    cl?.addEventListener('click', () => { pn.classList.remove('is-open'); pn.setAttribute('aria-hidden', 'true'); });
    snd?.addEventListener('click', sendMsg);
    inp?.addEventListener('keydown', e => { if (e.key === 'Enter') sendMsg(); });
    qk?.querySelectorAll('.chat-panel__quick-reply').forEach(b => { b.addEventListener('click', () => { addMsg(b.getAttribute('data-msg'), 'user'); setTimeout(() => addMsg(reply(b.getAttribute('data-msg')), 'bot'), 500); }); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && pn.classList.contains('is-open')) { pn.classList.remove('is-open'); pn.setAttribute('aria-hidden', 'true'); } });
  }

  /* ============ SCROLL UP ============ */
  function setupScrollUp() {
    const btn = document.getElementById('scroll-up');
    if (!btn) return;
    window.addEventListener('scroll', () => { btn.classList.toggle('is-visible', window.scrollY > 500); }, {passive:true});
    btn.addEventListener('click', () => { window.scrollTo({top:0,behavior:'smooth'}); });
  }

  /* ============ GO ============ */
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();