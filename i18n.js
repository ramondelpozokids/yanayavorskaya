/* ============================================================
   MUSEO DIGITAL — Sistema de internacionalización (i18n)
   6 idiomas: ES, EN, FR, DE, RU, IT
   ============================================================ */

const MuseoI18n = (() => {
  const LANGS = {
    es: { name: 'Español', flag: '🇪🇸', code: 'es' },
    en: { name: 'English', flag: '🇬🇧', code: 'en' },
    fr: { name: 'Français', flag: '🇫🇷', code: 'fr' },
    de: { name: 'Deutsch', flag: '🇩🇪', code: 'de' },
    ru: { name: 'Русский', flag: '🇷🇺', code: 'ru' },
    it: { name: 'Italiano', flag: '🇮🇹', code: 'it' }
  };

  const DICT = {

    /* ============ NAVEGACIÓN ============ */
    'nav.brand':           { es:'Yana Yavorskaya', en:'Yana Yavorskaya', fr:'Yana Yavorskaya', de:'Yana Yavorskaya', ru:'Яна Яворская', it:'Yana Yavorskaya' },
    'nav.colecciones':     { es:'Colecciones', en:'Collections', fr:'Collections', de:'Sammlungen', ru:'Коллекции', it:'Collezioni' },
    'nav.estudio':         { es:'Estudio', en:'Studio', fr:'Atelier', de:'Atelier', ru:'Студия', it:'Studio' },
    'nav.exposiciones':    { es:'Exposiciones', en:'Exhibitions', fr:'Expositions', de:'Ausstellungen', ru:'Выставки', it:'Mostre' },
    'nav.contacto':        { es:'Consulta Privada', en:'Private Inquiry', fr:'Consultation Privée', de:'Private Anfrage', ru:'Частный Запрос', it:'Consultazione Privata' },
    'nav.toggle':          { es:'Abrir menú', en:'Open menu', fr:'Ouvrir le menu', de:'Menü öffnen', ru:'Открыть меню', it:'Apri menu' },
    'nav.close':           { es:'Cerrar menú', en:'Close menu', fr:'Fermer le menu', de:'Menü schließen', ru:'Закрыть меню', it:'Chiudi menu' },

    /* ============ HERO ============ */
    'hero.artist':         { es:'Yana Yavorskaya', en:'Yana Yavorskaya', fr:'Yana Yavorskaya', de:'Yana Yavorskaya', ru:'Яна Яворская', it:'Yana Yavorskaya' },
    'hero.title.line1':    { es:'La luz', en:'The light', fr:'La lumière', de:'Das Licht', ru:'Свет', it:'La luce' },
    'hero.title.line2':    { es:'que nos habita', en:'that dwells within', fr:'qui nous habite', de:'das in uns wohnt', ru:'что живёт внутри', it:'che ci abita' },
    'hero.quote':          { es:'«No pinto lo que veo. Pinto lo que siento cuando cierro los ojos.»', en:'«I don\'t paint what I see. I paint what I feel when I close my eyes.»', fr:'«Je ne peins pas ce que je vois. Je peins ce que je ressens quand je ferme les yeux.»', de:'«Ich male nicht, was ich sehe. Ich male, was ich fühle, wenn ich die Augen schließe.»', ru:'«Я не рисую то, что вижу. Я рисую то, что чувствую, когда закрываю глаза.»', it:'«Non dipingo ciò che vedo. Dipingo ciò che sento quando chiudo gli occhi.»' },
    'hero.scroll':         { es:'Descubrir', en:'Discover', fr:'Découvrir', de:'Entdecken', ru:'Открыть', it:'Scoprire' },

    /* ============ COLECCIONES ============ */
    'collections.label':     { es:'Colecciones', en:'Collections', fr:'Collections', de:'Sammlungen', ru:'Коллекции', it:'Collezioni' },
    'collections.title.line1':{ es:'Tres miradas,', en:'Three gazes,', fr:'Trois regards,', de:'Drei Blicke,', ru:'Три взгляда,', it:'Tre sguardi,' },
    'collections.title.line2':{ es:'un universo', en:'one universe', fr:'un univers', de:'ein Universum', ru:'одна вселенная', it:'un universo' },
    'collections.subtitle': { es:'Cada colección es una exposición digital con su propia historia, proceso y emoción.', en:'Each collection is a digital exhibition with its own story, process, and emotion.', fr:'Chaque collection est une exposition numérique avec sa propre histoire, son processus et son émotion.', de:'Jede Sammlung ist eine digitale Ausstellung mit eigener Geschichte, eigenem Prozess und eigener Emotion.', ru:'Каждая коллекция — это цифровая выставка со своей историей, процессом и эмоцией.', it:'Ogni collezione è una mostra digitale con la propria storia, processo ed emozione.' },

    'col1.title': { es:'Luz y Sombra', en:'Light and Shadow', fr:'Lumière et Ombre', de:'Licht und Schatten', ru:'Свет и Тень', it:'Luce e Ombra' },
    'col1.desc':  { es:'2022–2024 · 4 obras', en:'2022–2024 · 4 works', fr:'2022–2024 · 4 œuvres', de:'2022–2024 · 4 Werke', ru:'2022–2024 · 4 работы', it:'2022–2024 · 4 opere' },
    'col2.title': { es:'Geometría Sagrada', en:'Sacred Geometry', fr:'Géométrie Sacrée', de:'Heilige Geometrie', ru:'Священная Геометрия', it:'Geometria Sacra' },
    'col2.desc':  { es:'2020–2022 · 3 obras', en:'2020–2022 · 3 works', fr:'2020–2022 · 3 œuvres', de:'2020–2022 · 3 Werke', ru:'2020–2022 · 3 работы', it:'2020–2022 · 3 opere' },
    'col3.title': { es:'Horizontes Interiores', en:'Inner Horizons', fr:'Horizons Intérieurs', de:'Innere Horizonte', ru:'Внутренние Горизонты', it:'Orizzonti Interiori' },
    'col3.desc':  { es:'2018–2020 · 3 obras', en:'2018–2020 · 3 works', fr:'2018–2020 · 3 œuvres', de:'2018–2020 · 3 Werke', ru:'2018–2020 · 3 работы', it:'2018–2020 · 3 opere' },

    /* ============ OBRA DESTACADA ============ */
    'featured.label':     { es:'Obra destacada', en:'Featured work', fr:'Œuvre phare', de:'Ausgewähltes Werk', ru:'Избранная работа', it:'Opera in evidenza' },
    'featured.title':     { es:'Amanecer en la Bruma', en:'Dawn in the Mist', fr:'Aube dans la Brume', de:'Morgendämmerung im Nebel', ru:'Рассвет в Тумане', it:'Alba nella Bruma' },
    'featured.technique': { es:'Óleo sobre lienzo', en:'Oil on canvas', fr:'Huile sur toile', de:'Öl auf Leinwand', ru:'Масло на холсте', it:'Olio su tela' },
    'featured.desc':      { es:'Una exploración de la luz en su estado más efímero.', en:'An exploration of light in its most ephemeral state.', fr:'Une exploration de la lumière dans son état le plus éphémère.', de:'Eine Erkundung des Lichts in seinem flüchtigsten Zustand.', ru:'Исследование света в его самом эфемерном состоянии.', it:'Un\'esplorazione della luce nel suo stato più effimero.' },
    'featured.museum':    { es:'Ver en Modo Museo', en:'View in Museum Mode', fr:'Voir en Mode Musée', de:'Im Museumsmodus ansehen', ru:'Смотреть в Режиме Музея', it:'Guarda in Modalità Museo' },
    'featured.fav':       { es:'Añadir a favoritos', en:'Add to favorites', fr:'Ajouter aux favoris', de:'Zu Favoriten hinzufügen', ru:'Добавить в избранное', it:'Aggiungi ai preferiti' },

    /* ============ ESTUDIO ============ */
    'studio.label':        { es:'El Estudio', en:'The Studio', fr:'L\'Atelier', de:'Das Atelier', ru:'Студия', it:'Lo Studio' },
    'studio.title.line1':  { es:'Donde nace', en:'Where light', fr:'Où naît', de:'Wo das Licht', ru:'Где рождается', it:'Dove nasce' },
    'studio.title.line2':  { es:'la luz', en:'is born', fr:'la lumière', de:'geboren wird', ru:'свет', it:'la luce' },
    'studio.subtitle':     { es:'Un espacio de silencio, materiales y contemplación. Así trabaja Yana.', en:'A space of silence, materials, and contemplation. This is how Yana works.', fr:'Un espace de silence, de matériaux et de contemplation.', de:'Ein Raum der Stille, der Materialien und der Kontemplation.', ru:'Пространство тишины, материалов и созерцания.', it:'Uno spazio di silenzio, materiali e contemplazione.' },
    'studio.quote':        { es:'«Cada mañana entro al estudio sin expectativas. El lienzo me dice lo que necesita. Yo solo escucho.»', en:'«Every morning I enter the studio without expectations. The canvas tells me what it needs. I just listen.»', fr:'«Chaque matin, j\'entre dans l\'atelier sans attentes. La toile me dit ce dont elle a besoin.»', de:'«Jeden Morgen betrete ich das Atelier ohne Erwartungen. Die Leinwand sagt mir, was sie braucht.»', ru:'«Каждое утро я вхожу в студию без ожиданий. Холст говорит мне, что ему нужно.»', it:'«Ogni mattina entro nello studio senza aspettative. La tela mi dice ciò di cui ha bisogno.»' },
    'studio.easel':        { es:'El caballete', en:'The easel', fr:'Le chevalet', de:'Die Staffelei', ru:'Мольберт', it:'Il cavalletto' },
    'studio.pigments':     { es:'Los pigmentos', en:'The pigments', fr:'Les pigments', de:'Die Pigmente', ru:'Пигменты', it:'I pigmenti' },
    'studio.library':      { es:'La biblioteca', en:'The library', fr:'La bibliothèque', de:'Die Bibliothek', ru:'Библиотека', it:'La biblioteca' },
    'studio.light':        { es:'Luz del norte', en:'Northern light', fr:'Lumière du nord', de:'Nordlicht', ru:'Северный свет', it:'Luce del nord' },

    /* ============ EXPOSICIONES ============ */
    'exhibitions.label':      { es:'Exposiciones', en:'Exhibitions', fr:'Expositions', de:'Ausstellungen', ru:'Выставки', it:'Mostre' },
    'exhibitions.title.line1':{ es:'Un recorrido', en:'An international', fr:'Un parcours', de:'Eine internationale', ru:'Международное', it:'Un percorso' },
    'exhibitions.title.line2':{ es:'internacional', en:'journey', fr:'international', de:'Reise', ru:'путешествие', it:'internazionale' },

    'exh1.title': { es:'Luz y Sombra', en:'Light and Shadow', fr:'Lumière et Ombre', de:'Licht und Schatten', ru:'Свет и Тень', it:'Luce e Ombra' },
    'exh1.place': { es:'Gagosian Gallery, Nueva York — Individual', en:'Gagosian Gallery, New York — Solo', fr:'Gagosian Gallery, New York — Solo', de:'Gagosian Gallery, New York — Einzelausstellung', ru:'Gagosian Gallery, Нью-Йорк — Персональная', it:'Gagosian Gallery, New York — Personale' },
    'exh2.title': { es:'Art Basel Miami', en:'Art Basel Miami', fr:'Art Basel Miami', de:'Art Basel Miami', ru:'Art Basel Miami', it:'Art Basel Miami' },
    'exh2.place': { es:'Miami Beach Convention Center — Feria', en:'Miami Beach Convention Center — Fair', fr:'Miami Beach Convention Center — Foire', de:'Miami Beach Convention Center — Messe', ru:'Miami Beach Convention Center — Ярмарка', it:'Miami Beach Convention Center — Fiera' },
    'exh3.title': { es:'Geometría Sagrada', en:'Sacred Geometry', fr:'Géométrie Sacrée', de:'Heilige Geometrie', ru:'Священная Геометрия', it:'Geometria Sacra' },
    'exh3.place': { es:'Tate Modern, Londres — Individual', en:'Tate Modern, London — Solo', fr:'Tate Modern, Londres — Solo', de:'Tate Modern, London — Einzelausstellung', ru:'Tate Modern, Лондон — Персональная', it:'Tate Modern, Londra — Personale' },
    'exh4.title': { es:'Horizontes Interiores', en:'Inner Horizons', fr:'Horizons Intérieurs', de:'Innere Horizonte', ru:'Внутренние Горизонты', it:'Orizzonti Interiori' },
    'exh4.place': { es:'Fondation Louis Vuitton, París — Individual', en:'Fondation Louis Vuitton, Paris — Solo', fr:'Fondation Louis Vuitton, Paris — Solo', de:'Fondation Louis Vuitton, Paris — Einzelausstellung', ru:'Фонд Louis Vuitton, Париж — Персональная', it:'Fondation Louis Vuitton, Parigi — Personale' },
    'exh5.title': { es:'Bienal de Venecia', en:'Venice Biennale', fr:'Biennale de Venise', de:'Biennale von Venedig', ru:'Венецианская биеннале', it:'Biennale di Venezia' },
    'exh5.place': { es:'Giardini, Venecia — Bienal', en:'Giardini, Venice — Biennale', fr:'Giardini, Venise — Biennale', de:'Giardini, Venedig — Biennale', ru:'Джардини, Венеция — Биеннале', it:'Giardini, Venezia — Biennale' },
    'exh6.title': { es:'ARCOmadrid', en:'ARCOmadrid', fr:'ARCOmadrid', de:'ARCOmadrid', ru:'ARCOmadrid', it:'ARCOmadrid' },
    'exh6.place': { es:'IFEMA, Madrid — Feria', en:'IFEMA, Madrid — Fair', fr:'IFEMA, Madrid — Foire', de:'IFEMA, Madrid — Messe', ru:'IFEMA, Мадрид — Ярмарка', it:'IFEMA, Madrid — Fiera' },
    'exh7.title': { es:'Nuevas Voces', en:'New Voices', fr:'Nouvelles Voix', de:'Neue Stimmen', ru:'Новые Голоса', it:'Nuove Voci' },
    'exh7.place': { es:'Pace Gallery, Londres — Colectiva', en:'Pace Gallery, London — Group', fr:'Pace Gallery, Londres — Collective', de:'Pace Gallery, London — Gruppenausstellung', ru:'Pace Gallery, Лондон — Групповая', it:'Pace Gallery, Londra — Collettiva' },

    /* ============ CONTACTO ============ */
    'contact.title':        { es:'Consulta Privada', en:'Private Inquiry', fr:'Consultation Privée', de:'Private Anfrage', ru:'Частный Запрос', it:'Consultazione Privata' },
    'contact.text':         { es:'Para información sobre obras disponibles, precios, encargos personalizados o visitas al estudio.', en:'For information on available works, prices, custom commissions, or studio visits.', fr:'Pour des informations sur les œuvres disponibles, les prix, les commandes personnalisées.', de:'Für Informationen zu verfügbaren Werken, Preisen, Aufträgen oder Atelierbesuchen.', ru:'Для получения информации о доступных работах, ценах, заказах или посещениях студии.', it:'Per informazioni su opere disponibili, prezzi, commissioni o visite allo studio.' },
    'contact.name':         { es:'Su nombre completo', en:'Your full name', fr:'Votre nom complet', de:'Ihr vollständiger Name', ru:'Ваше полное имя', it:'Il suo nome completo' },
    'contact.email':        { es:'Su correo electrónico', en:'Your email address', fr:'Votre adresse e-mail', de:'Ihre E-Mail-Adresse', ru:'Ваш адрес эл. почты', it:'Il suo indirizzo email' },
    'contact.message':      { es:'¿Sobre qué obra o colección desea consultar?', en:'Which work or collection would you like to inquire about?', fr:'Sur quelle œuvre souhaitez-vous vous renseigner ?', de:'Über welches Werk möchten Sie sich erkundigen?', ru:'О какой работе вы хотите узнать?', it:'Su quale opera desidera informarsi?' },
    'contact.send':         { es:'Enviar consulta', en:'Send inquiry', fr:'Envoyer la demande', de:'Anfrage senden', ru:'Отправить запрос', it:'Invia richiesta' },
    'contact.confidential': { es:'Todas las consultas son confidenciales. Respondemos en 24–48 horas.', en:'All inquiries are confidential. We respond within 24–48 hours.', fr:'Toutes les demandes sont confidentielles. Réponse sous 24–48h.', de:'Alle Anfragen sind vertraulich. Antwort innerhalb 24–48h.', ru:'Все запросы конфиденциальны. Отвечаем в течение 24–48 часов.', it:'Tutte le richieste sono confidenziali. Rispondiamo entro 24–48 ore.' },

    /* ============ TOASTS ============ */
    'toast.favAdded':        { es:'Añadido a favoritos ✦', en:'Added to favorites ✦', fr:'Ajouté aux favoris ✦', de:'Zu Favoriten hinzugefügt ✦', ru:'Добавлено в избранное ✦', it:'Aggiunto ai preferiti ✦' },
    'toast.favRemoved':      { es:'Eliminado de favoritos', en:'Removed from favorites', fr:'Retiré des favoris', de:'Aus Favoriten entfernt', ru:'Удалено из избранного', it:'Rimosso dai preferiti' },
    'toast.formSent':        { es:'Tu consulta ha sido enviada.', en:'Your inquiry has been sent.', fr:'Votre demande a été envoyée.', de:'Ihre Anfrage wurde gesendet.', ru:'Ваш запрос отправлен.', it:'La richiesta è stata inviata.' },
    'toast.formIncomplete':  { es:'Por favor, completa todos los campos.', en:'Please fill in all fields.', fr:'Veuillez remplir tous les champs.', de:'Bitte füllen Sie alle Felder aus.', ru:'Заполните все поля.', it:'Compila tutti i campi.' },
    'toast.exportOk':        { es:'Copia de seguridad descargada.', en:'Backup downloaded.', fr:'Sauvegarde téléchargée.', de:'Sicherung heruntergeladen.', ru:'Резервная копия загружена.', it:'Backup scaricato.' },
    'toast.importOk':        { es:'Datos restaurados.', en:'Data restored.', fr:'Données restaurées.', de:'Daten wiederhergestellt.', ru:'Данные восстановлены.', it:'Dati ripristinati.' },
    'toast.exportError':     { es:'Error al exportar.', en:'Export error.', fr:'Erreur d\'exportation.', de:'Exportfehler.', ru:'Ошибка экспорта.', it:'Errore di esportazione.' },
    'toast.importError':     { es:'Error al importar.', en:'Import error.', fr:'Erreur d\'importation.', de:'Importfehler.', ru:'Ошибка импорта.', it:'Errore di importazione.' },

    /* ============ FOOTER ============ */
    'footer.copy':    { es:'© 2026 Yana Yavorskaya. Todos los derechos reservados.', en:'© 2026 Yana Yavorskaya. All rights reserved.', fr:'© 2026 Yana Yavorskaya. Tous droits réservés.', de:'© 2026 Yana Yavorskaya. Alle Rechte vorbehalten.', ru:'© 2026 Яна Яворская. Все права защищены.', it:'© 2026 Yana Yavorskaya. Tutti i diritti riservati.' },
    'footer.legal':   { es:'Aviso Legal', en:'Legal Notice', fr:'Mentions Légales', de:'Impressum', ru:'Правовая информация', it:'Note Legali' },
    'footer.privacy': { es:'Privacidad', en:'Privacy', fr:'Confidentialité', de:'Datenschutz', ru:'Конфиденциальность', it:'Privacy' },
    'footer.cookies': { es:'Cookies', en:'Cookies', fr:'Cookies', de:'Cookies', ru:'Куки', it:'Cookies' },
    'footer.terms':   { es:'Términos', en:'Terms', fr:'Conditions', de:'Bedingungen', ru:'Условия', it:'Termini' },
    'footer.export':  { es:'Exportar datos', en:'Export data', fr:'Exporter données', de:'Daten exportieren', ru:'Экспорт данных', it:'Esporta dati' },

    /* ============ MODO MUSEO ============ */
    'museum.close': { es:'Cerrar modo museo', en:'Close museum mode', fr:'Fermer mode musée', de:'Museumsmodus schließen', ru:'Закрыть режим музея', it:'Chiudi modalità museo' },
    'museum.prev':  { es:'Obra anterior', en:'Previous work', fr:'Œuvre précédente', de:'Vorheriges Werk', ru:'Предыдущая работа', it:'Opera precedente' },
    'museum.next':  { es:'Obra siguiente', en:'Next work', fr:'Œuvre suivante', de:'Nächstes Werk', ru:'Следующая работа', it:'Opera successiva' },

    /* ============ OBRAS ============ */
    'obra.1.title':  { es:'Amanecer en la Bruma', en:'Dawn in the Mist', fr:'Aube dans la Brume', de:'Morgendämmerung im Nebel', ru:'Рассвет в Тумане', it:'Alba nella Bruma' },
    'obra.2.title':  { es:'El Último Rayo', en:'The Last Ray', fr:'Le Dernier Rayon', de:'Der letzte Strahl', ru:'Последний Луч', it:'L\'Ultimo Raggio' },
    'obra.3.title':  { es:'Interludio', en:'Interlude', fr:'Interlude', de:'Zwischenspiel', ru:'Интерлюдия', it:'Interludio' },
    'obra.4.title':  { es:'Claroscuro No. 7', en:'Chiaroscuro No. 7', fr:'Clair-obscur n° 7', de:'Chiaroscuro Nr. 7', ru:'Кьяроскуро № 7', it:'Chiaroscuro N. 7' },
    'obra.5.title':  { es:'Espiral Áurea', en:'Golden Spiral', fr:'Spirale Dorée', de:'Goldene Spirale', ru:'Золотая Спираль', it:'Spirale Aurea' },
    'obra.6.title':  { es:'Vesica Piscis', en:'Vesica Piscis', fr:'Vesica Piscis', de:'Vesica Piscis', ru:'Vesica Piscis', it:'Vesica Piscis' },
    'obra.7.title':  { es:'La Flor de la Vida', en:'The Flower of Life', fr:'La Fleur de Vie', de:'Die Blume des Lebens', ru:'Цветок Жизни', it:'Il Fiore della Vita' },
    'obra.8.title':  { es:'Memoria del Horizonte', en:'Memory of the Horizon', fr:'Mémoire de l\'Horizon', de:'Erinnerung an den Horizont', ru:'Память Горизонта', it:'Memoria dell\'Orizzonte' },
    'obra.9.title':  { es:'Tierra Callada', en:'Silent Earth', fr:'Terre Silencieuse', de:'Stille Erde', ru:'Тихая Земля', it:'Terra Silenziosa' },
    'obra.10.title': { es:'Umbral', en:'Threshold', fr:'Seuil', de:'Schwelle', ru:'Порог', it:'Soglia' },

    /* ============ PÁGINA (meta) ============ */
    'page.title':       { es:'Yana Yavorskaya — Colección de Arte', en:'Yana Yavorskaya — Art Collection', fr:'Yana Yavorskaya — Collection d\'Art', de:'Yana Yavorskaya — Kunstsammlung', ru:'Яна Яворская — Коллекция Искусства', it:'Yana Yavorskaya — Collezione d\'Arte' },
    'page.description': { es:'Yana Yavorskaya — Colección de arte contemporáneo. Obra original, exposiciones, galería virtual.', en:'Yana Yavorskaya — Contemporary art collection.', fr:'Yana Yavorskaya — Collection d\'art contemporain.', de:'Yana Yavorskaya — Zeitgenössische Kunstsammlung.', ru:'Яна Яворская — Коллекция современного искусства.', it:'Yana Yavorskaya — Collezione d\'arte contemporanea.' },

    /* ============ LEGALES ============ */
    'legal.back':           { es:'← Volver al inicio', en:'← Back', fr:'← Retour', de:'← Zurück', ru:'← Назад', it:'← Indietro' },
    'legal.update':         { es:'Última actualización', en:'Last updated', fr:'Dernière mise à jour', de:'Zuletzt aktualisiert', ru:'Последнее обновление', it:'Ultimo aggiornamento' },
    'legal.copyright':      { es:'© 2026 Yana Yavorskaya. Todos los derechos reservados.', en:'© 2026 Yana Yavorskaya. All rights reserved.', fr:'© 2026 Yana Yavorskaya. Tous droits réservés.', de:'© 2026 Yana Yavorskaya. Alle Rechte vorbehalten.', ru:'© 2026 Яна Яворская. Все права защищены.', it:'© 2026 Yana Yavorskaya. Tutti i diritti riservati.' },
    'legal.aviso.title':    { es:'Aviso Legal', en:'Legal Notice', fr:'Mentions Légales', de:'Impressum', ru:'Правовая информация', it:'Note Legali' },
    'legal.privacy.title':  { es:'Política de Privacidad', en:'Privacy Policy', fr:'Politique de Confidentialité', de:'Datenschutzerklärung', ru:'Политика конфиденциальности', it:'Informativa sulla Privacy' },
    'legal.cookies.title':  { es:'Política de Cookies', en:'Cookie Policy', fr:'Politique de Cookies', de:'Cookie-Richtlinie', ru:'Политика куки', it:'Politica sui Cookie' },
    'legal.terms.title':    { es:'Términos y Condiciones', en:'Terms and Conditions', fr:'Conditions Générales', de:'AGB', ru:'Условия и положения', it:'Termini e Condizioni' },

    /* ============ CHAT ASSISTANT ============ */
    'chat.tooltip':     { es:'Hablar con la comisaria', en:'Talk to the curator', fr:'Parler à la commissaire', de:'Mit der Kuratorin sprechen', ru:'Поговорить с куратором', it:'Parla con la curatrice' },
    'chat.name':        { es:'Comisaria Digital', en:'Digital Curator', fr:'Commissaire Numérique', de:'Digitale Kuratorin', ru:'Цифровой Куратор', it:'Curatrice Digitale' },
    'chat.status':      { es:'Disponible', en:'Available', fr:'Disponible', de:'Verfügbar', ru:'Доступен', it:'Disponibile' },
    'chat.placeholder': { es:'Escribe tu pregunta…', en:'Type your question…', fr:'Écrivez votre question…', de:'Schreiben Sie Ihre Frage…', ru:'Напишите вопрос…', it:'Scrivi la tua domanda…' },
    'chat.send':        { es:'Enviar', en:'Send', fr:'Envoyer', de:'Senden', ru:'Отправить', it:'Invia' },
    'chat.q1':          { es:'Luz y Sombra', en:'Light & Shadow', fr:'Lumière et Ombre', de:'Licht & Schatten', ru:'Свет и Тень', it:'Luce e Ombra' },
    'chat.q2':          { es:'Técnica', en:'Technique', fr:'Technique', de:'Technik', ru:'Техника', it:'Tecnica' },
    'chat.q3':          { es:'Disponibilidad', en:'Availability', fr:'Disponibilité', de:'Verfügbarkeit', ru:'Доступность', it:'Disponibilità' },
    'chat.q4':          { es:'Exposiciones', en:'Exhibitions', fr:'Expositions', de:'Ausstellungen', ru:'Выставки', it:'Mostre' },
    'chat.greeting':    { es:'Bienvenida al estudio. Soy la comisaria virtual de Yana Yavorskaya. ¿En qué puedo ayudarte?', en:'Welcome. I\'m the virtual curator. How may I help you?', fr:'Bienvenue. Je suis la commissaire virtuelle. Puis-je vous aider ?', de:'Willkommen im Digitalen Museum. Ich bin die virtuelle Kuratorin. Wie kann ich helfen?', ru:'Добро пожаловать. Я виртуальный куратор. Чем могу помочь?', it:'Benvenuta. Sono la curatrice virtuale. Come posso aiutarti?' },

    /* ============ WHATSAPP ============ */
    'whatsapp.tooltip': { es:'Consultar por WhatsApp', en:'Inquire via WhatsApp', fr:'Consulter par WhatsApp', de:'Per WhatsApp anfragen', ru:'Связаться через WhatsApp', it:'Consulta via WhatsApp' }
  };

  /* ============ LÓGICA i18n ============ */
  let currentLang = 'es';

  async function init() {
    try {
      if (window.MuseoDB) { await MuseoDB.init(); const s = await MuseoDB.getPreferencia('lang'); if (s && LANGS[s]) currentLang = s; else currentLang = detectBrowserLang(); }
    } catch (_) { currentLang = detectBrowserLang(); }
    applyTranslations();
    buildLangSwitcher();
    persistLang();
    return currentLang;
  }

  function detectBrowserLang() {
    const nl = (navigator.language || 'es').slice(0,2).toLowerCase();
    return LANGS[nl] ? nl : 'es';
  }

  function t(key) { return DICT[key] ? (DICT[key][currentLang] || DICT[key]['es'] || key) : key; }

  async function setLang(lang) {
    if (!LANGS[lang]) return;
    currentLang = lang;
    applyTranslations();
    buildLangSwitcher();
    await persistLang();
    window.dispatchEvent(new CustomEvent('museo:langChanged', { detail: { lang } }));
  }

  async function persistLang() {
    try { if (window.MuseoDB) await MuseoDB.setPreferencia('lang', currentLang); } catch (_) { try { localStorage.setItem('museo_lang', currentLang); } catch (_) {} }
  }

  function getLang() { return currentLang; }
  function getLangs() { return LANGS; }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n'), tr = t(k);
      if (!tr) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.setAttribute('placeholder', tr);
      else el.textContent = tr;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const [attr, key] = el.getAttribute('data-i18n-attr').split(':');
      if (attr && key) el.setAttribute(attr.trim(), t(key.trim()));
    });
    document.title = t('page.title');
    const md = document.querySelector('meta[name="description"]'); if (md) md.content = t('page.description');
    const ogt = document.querySelector('meta[property="og:title"]'); if (ogt) ogt.content = t('page.title');
    const ogd = document.querySelector('meta[property="og:description"]'); if (ogd) ogd.content = t('page.description');
    document.documentElement.lang = currentLang;
  }

  function buildLangSwitcher() {
    var c = document.getElementById('lang-switcher');
    if (!c) {
      var navInner = document.querySelector('.nav__inner');
      if (!navInner) return;
      c = document.createElement('div'); c.id = 'lang-switcher'; c.className = 'lang-switcher';
      var toggle = navInner.querySelector('.nav__toggle');
      if (toggle) { navInner.insertBefore(c, toggle); }
      else { navInner.appendChild(c); }
    }
    c.innerHTML = '';
    var cd = LANGS[currentLang];
    var btn = document.createElement('button'); btn.className = 'lang-switcher__current';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Cambiar idioma');
    btn.innerHTML = '&#127760; ' + cd.code.toUpperCase() + ' <span class="lang-switcher__arrow">&#9662;</span>';
    var dd = document.createElement('div'); dd.className = 'lang-switcher__dropdown'; dd.style.display = 'none';
    btn.addEventListener('click', function(e) { e.stopPropagation(); var ex = btn.getAttribute('aria-expanded') === 'true'; btn.setAttribute('aria-expanded', !ex); dd.style.display = ex ? 'none' : 'flex'; });
    Object.values(LANGS).forEach(function(l) {
      var b = document.createElement('button');
      if (l.code === currentLang) { b.style.fontWeight = '600'; b.style.color = 'var(--accent)'; }
      b.innerHTML = '<span>' + l.flag + '</span> ' + l.name;
      b.addEventListener('click', function(e) { e.stopPropagation(); setLang(l.code); dd.style.display = 'none'; btn.setAttribute('aria-expanded', 'false'); });
      dd.appendChild(b);
    });
    c.appendChild(btn); c.appendChild(dd);
    document.addEventListener('click', function(e) { if (!c.contains(e.target)) { dd.style.display = 'none'; btn.setAttribute('aria-expanded', 'false'); } });
  }

  return { init, t, setLang, getLang, getLangs, LANGS, applyTranslations };
})();

if (typeof window !== 'undefined') window.MuseoI18n = MuseoI18n;