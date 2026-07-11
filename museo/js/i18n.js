/* ============================================================
   YANA YAVORSKAYA — i18n (6 idiomas)
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
  const _0={es:'Yana Yavorskaya',en:'Yana Yavorskaya',fr:'Yana Yavorskaya',de:'Yana Yavorskaya',ru:'Яна Яворская',it:'Yana Yavorskaya'};
  const _1={es:'Colecciones',en:'Collections',fr:'Collections',de:'Sammlungen',ru:'Коллекции',it:'Collezioni'};
  const _2={es:'Estudio',en:'Studio',fr:'Atelier',de:'Atelier',ru:'Студия',it:'Studio'};
  const _3={es:'Exposiciones',en:'Exhibitions',fr:'Expositions',de:'Ausstellungen',ru:'Выставки',it:'Mostre'};
  const DICT = {
    'nav.brand':_0, 'nav.colecciones':_1, 'nav.estudio':_2, 'nav.exposiciones':_3,
    'nav.contacto':{es:'Consulta',en:'Inquiry',fr:'Consultation',de:'Anfrage',ru:'Запрос',it:'Consultazione'},
    'nav.toggle':{es:'Abrir menú',en:'Open menu',fr:'Ouvrir le menu',de:'Menü öffnen',ru:'Открыть меню',it:'Apri menu'},
    'nav.close':{es:'Cerrar menú',en:'Close menu',fr:'Fermer le menu',de:'Menü schließen',ru:'Закрыть меню',it:'Chiudi menu'},
    'hero.artist':_0,
    'hero.title.line1':{es:'La luz',en:'The light',fr:'La lumière',de:'Das Licht',ru:'Свет',it:'La luce'},
    'hero.title.line2':{es:'que nos habita',en:'that dwells within',fr:'qui nous habite',de:'das in uns wohnt',ru:'что живёт внутри',it:'che ci abita'},
    'hero.quote':{es:'«No pinto lo que veo. Pinto lo que siento cuando cierro los ojos.»',en:'«I don\'t paint what I see. I paint what I feel when I close my eyes.»',fr:'«Je ne peins pas ce que je vois. Je peins ce que je ressens quand je ferme les yeux.»',de:'«Ich male nicht, was ich sehe. Ich male, was ich fühle, wenn ich die Augen schließe.»',ru:'«Я не рисую то, что вижу. Я рисую то, что чувствую, когда закрываю глаза.»',it:'«Non dipingo ciò che vedo. Dipingo ciò che sento quando chiudo gli occhi.»'},
    'hero.scroll':{es:'Descubrir',en:'Discover',fr:'Découvrir',de:'Entdecken',ru:'Открыть',it:'Scoprire'},
    'collections.label':_1,
    'collections.title.line1':{es:'Tres miradas,',en:'Three gazes,',fr:'Trois regards,',de:'Drei Blicke,',ru:'Три взгляда,',it:'Tre sguardi,'},
    'collections.title.line2':{es:'un universo',en:'one universe',fr:'un univers',de:'ein Universum',ru:'одна вселенная',it:'un universo'},
    'collections.subtitle':{es:'Cada serie es una historia.',en:'Each series is a story.',fr:'Chaque série est une histoire.',de:'Jede Serie ist eine Geschichte.',ru:'Каждая серия — это история.',it:'Ogni serie è una storia.'},
    'col1.title':{es:'Luz y Sombra',en:'Light and Shadow',fr:'Lumière et Ombre',de:'Licht und Schatten',ru:'Свет и Тень',it:'Luce e Ombra'},
    'col1.desc':{es:'2022–2024 · 4 obras',en:'2022–2024 · 4 works',fr:'2022–2024 · 4 œuvres',de:'2022–2024 · 4 Werke',ru:'2022–2024 · 4 работы',it:'2022–2024 · 4 opere'},
    'col2.title':{es:'Geometría Sagrada',en:'Sacred Geometry',fr:'Géométrie Sacrée',de:'Heilige Geometrie',ru:'Священная Геометрия',it:'Geometria Sacra'},
    'col2.desc':{es:'2020–2022 · 3 obras',en:'2020–2022 · 3 works',fr:'2020–2022 · 3 œuvres',de:'2020–2022 · 3 Werke',ru:'2020–2022 · 3 работы',it:'2020–2022 · 3 opere'},
    'col3.title':{es:'Horizontes Interiores',en:'Inner Horizons',fr:'Horizons Intérieurs',de:'Innere Horizonte',ru:'Внутренние Горизонты',it:'Orizzonti Interiori'},
    'col3.desc':{es:'2018–2020 · 3 obras',en:'2018–2020 · 3 works',fr:'2018–2020 · 3 œuvres',de:'2018–2020 · 3 Werke',ru:'2018–2020 · 3 работы',it:'2018–2020 · 3 opere'},
    'featured.label':{es:'Obra destacada',en:'Featured work',fr:'Œuvre phare',de:'Ausgewähltes Werk',ru:'Избранная работа',it:'Opera in evidenza'},
    'featured.title':{es:'Amanecer en la Bruma',en:'Dawn in the Mist',fr:'Aube dans la Brume',de:'Morgendämmerung im Nebel',ru:'Рассвет в Тумане',it:'Alba nella Bruma'},
    'featured.technique':{es:'Óleo sobre lienzo',en:'Oil on canvas',fr:'Huile sur toile',de:'Öl auf Leinwand',ru:'Масло на холсте',it:'Olio su tela'},
    'featured.desc':{es:'Colección Luz y Sombra. Veladuras de luz.',en:'Light and Shadow collection. Glazes of light.',fr:'Collection Lumière et Ombre. Glacis de lumière.',de:'Sammlung Licht und Schatten. Lichtlasuren.',ru:'Коллекция Свет и Тень. Лёгкие лессировки.',it:'Collezione Luce e Ombra. Velature di luce.'},
    'featured.museum':{es:'Ver en modo inmersivo',en:'View immersive mode',fr:'Voir en mode immersif',de:'Immersiver Modus',ru:'Иммерсивный режим',it:'Modalità immersiva'},
    'featured.fav':{es:'Añadir a favoritos',en:'Add to favorites',fr:'Ajouter aux favoris',de:'Zu Favoriten',ru:'В избранное',it:'Aggiungi ai preferiti'},
    'studio.label':_2,
    'studio.title.line1':{es:'Donde nace',en:'Where light',fr:'Où naît',de:'Wo das Licht',ru:'Где рождается',it:'Dove nasce'},
    'studio.title.line2':{es:'la luz',en:'is born',fr:'la lumière',de:'geboren wird',ru:'свет',it:'la luce'},
    'studio.subtitle':{es:'Un espacio de silencio, materiales y contemplación.',en:'A space of silence, materials, and contemplation.',fr:'Un espace de silence et de contemplation.',de:'Ein Raum der Stille und Kontemplation.',ru:'Пространство тишины и созерцания.',it:'Uno spazio di silenzio e contemplazione.'},
    'studio.quote':{es:'«Cada mañana entro al estudio sin expectativas.»',en:'«Every morning I enter the studio without expectations.»',fr:'«Chaque matin j\'entre dans l\'atelier sans attentes.»',de:'«Jeden Morgen betrete ich das Atelier ohne Erwartungen.»',ru:'«Каждое утро я вхожу в студию без ожиданий.»',it:'«Ogni mattina entro nello studio senza aspettative.»'},
    'studio.easel':{es:'El caballete',en:'The easel',fr:'Le chevalet',de:'Die Staffelei',ru:'Мольберт',it:'Il cavalletto'},
    'studio.pigments':{es:'Los pigmentos',en:'The pigments',fr:'Les pigments',de:'Die Pigmente',ru:'Пигменты',it:'I pigmenti'},
    'studio.mixed':{es:'Técnica mixta',en:'Mixed media',fr:'Technique mixte',de:'Mischtechnik',ru:'Смешанная техника',it:'Tecnica mista'},
    'studio.light':{es:'Luz del norte',en:'Northern light',fr:'Lumière du nord',de:'Nordlicht',ru:'Северный свет',it:'Luce del nord'},
    'exhibitions.label':_3,
    'exhibitions.title.line1':{es:'Más de 40 exposiciones',en:'Over 40 exhibitions',fr:'Plus de 40 expositions',de:'Über 40 Ausstellungen',ru:'Более 40 выставок',it:'Oltre 40 mostre'},
    'exhibitions.title.line2':{es:'en 15 países',en:'in 15 countries',fr:'dans 15 pays',de:'in 15 Ländern',ru:'в 15 странах',it:'in 15 paesi'},
    'exh1.title':{es:'Hauser & Wirth',en:'Hauser & Wirth',fr:'Hauser & Wirth',de:'Hauser & Wirth',ru:'Hauser & Wirth',it:'Hauser & Wirth'},
    'exh1.place':{es:'Londres — Individual',en:'London — Solo',fr:'Londres — Solo',de:'London — Einzel',ru:'Лондон — Персональная',it:'Londra — Personale'},
    'exh2.title':{es:'Luz y Sombra',en:'Light and Shadow',fr:'Lumière et Ombre',de:'Licht und Schatten',ru:'Свет и Тень',it:'Luce e Ombra'},
    'exh2.place':{es:'Gagosian Gallery, Nueva York',en:'Gagosian Gallery, New York',fr:'Gagosian Gallery, New York',de:'Gagosian Gallery, New York',ru:'Gagosian Gallery, Нью-Йорк',it:'Gagosian Gallery, New York'},
    'exh3.title':{es:'Art Basel Miami',en:'Art Basel Miami',fr:'Art Basel Miami',de:'Art Basel Miami',ru:'Art Basel Miami',it:'Art Basel Miami'},
    'exh3.place':{es:'Miami Beach — Feria',en:'Miami Beach — Fair',fr:'Miami Beach — Foire',de:'Miami Beach — Messe',ru:'Майами-Бич — Ярмарка',it:'Miami Beach — Fiera'},
    'exh4.title':{es:'Geometría Sagrada',en:'Sacred Geometry',fr:'Géométrie Sacrée',de:'Heilige Geometrie',ru:'Священная Геометрия',it:'Geometria Sacra'},
    'exh4.place':{es:'Tate Modern, Londres',en:'Tate Modern, London',fr:'Tate Modern, Londres',de:'Tate Modern, London',ru:'Tate Modern, Лондон',it:'Tate Modern, Londra'},
    'exh5.title':{es:'Horizontes Interiores',en:'Inner Horizons',fr:'Horizons Intérieurs',de:'Innere Horizonte',ru:'Внутренние Горизонты',it:'Orizzonti Interiori'},
    'exh5.place':{es:'Fondation Louis Vuitton, París',en:'Fondation Louis Vuitton, Paris',fr:'Fondation Louis Vuitton, Paris',de:'Fondation Louis Vuitton, Paris',ru:'Фонд Louis Vuitton, Париж',it:'Fondation Louis Vuitton, Parigi'},
    'exh6.title':{es:'Bienal de Venecia',en:'Venice Biennale',fr:'Biennale de Venise',de:'Biennale Venedig',ru:'Венецианская биеннале',it:'Biennale di Venezia'},
    'exh6.place':{es:'Giardini, Venecia',en:'Giardini, Venice',fr:'Giardini, Venise',de:'Giardini, Venedig',ru:'Джардини, Венеция',it:'Giardini, Venezia'},
    'exh7.title':{es:'ARCOmadrid',en:'ARCOmadrid',fr:'ARCOmadrid',de:'ARCOmadrid',ru:'ARCOmadrid',it:'ARCOmadrid'},
    'exh7.place':{es:'IFEMA, Madrid',en:'IFEMA, Madrid',fr:'IFEMA, Madrid',de:'IFEMA, Madrid',ru:'IFEMA, Мадрид',it:'IFEMA, Madrid'},
    'contact.title':{es:'Consulta Privada',en:'Private Inquiry',fr:'Consultation Privée',de:'Private Anfrage',ru:'Частный Запрос',it:'Consultazione Privata'},
    'contact.text':{es:'Para información sobre obras disponibles, precios, encargos.',en:'For information on available works, prices, commissions.',fr:'Pour des informations sur les œuvres disponibles.',de:'Für Informationen zu Werken und Preisen.',ru:'Информация о работах, ценах, заказах.',it:'Per informazioni su opere, prezzi, commissioni.'},
    'contact.name':{es:'Su nombre completo',en:'Your full name',fr:'Votre nom complet',de:'Ihr vollständiger Name',ru:'Ваше полное имя',it:'Il suo nome completo'},
    'contact.email':{es:'Su correo electrónico',en:'Your email address',fr:'Votre adresse e-mail',de:'Ihre E-Mail',ru:'Ваш email',it:'Il suo indirizzo email'},
    'contact.message':{es:'¿Sobre qué obra desea consultar?',en:'Which work would you like to inquire about?',fr:'Sur quelle œuvre souhaitez-vous vous renseigner ?',de:'Über welches Werk möchten Sie sich erkundigen?',ru:'О какой работе хотите узнать?',it:'Su quale opera desidera informarsi?'},
    'contact.send':{es:'Enviar consulta',en:'Send inquiry',fr:'Envoyer',de:'Anfrage senden',ru:'Отправить',it:'Invia richiesta'},
    'contact.conf':{es:'Consultas confidenciales. Respuesta en 24–48 horas.',en:'Confidential. Response within 24–48 hours.',fr:'Confidentiel. Réponse sous 24–48h.',de:'Vertraulich. Antwort in 24–48h.',ru:'Конфиденциально. Ответ в течение 24–48ч.',it:'Confidenziale. Risposta entro 24–48h.'},
    'toast.favAdded':{es:'Añadido a favoritos ✦',en:'Added to favorites ✦',fr:'Ajouté aux favoris ✦',de:'Zu Favoriten ✦',ru:'В избранном ✦',it:'Aggiunto ai preferiti ✦'},
    'toast.favRemoved':{es:'Eliminado de favoritos',en:'Removed from favorites',fr:'Retiré des favoris',de:'Aus Favoriten entfernt',ru:'Удалено из избранного',it:'Rimosso dai preferiti'},
    'toast.formSent':{es:'Tu consulta ha sido enviada.',en:'Your inquiry has been sent.',fr:'Votre demande a été envoyée.',de:'Anfrage gesendet.',ru:'Запрос отправлен.',it:'Richiesta inviata.'},
    'toast.formIncomplete':{es:'Por favor, completa todos los campos.',en:'Please fill in all fields.',fr:'Veuillez remplir tous les champs.',de:'Bitte alle Felder ausfüllen.',ru:'Заполните все поля.',it:'Compila tutti i campi.'},
    'toast.exportOk':{es:'Copia de seguridad descargada.',en:'Backup downloaded.',fr:'Sauvegarde téléchargée.',de:'Sicherung heruntergeladen.',ru:'Бэкап загружен.',it:'Backup scaricato.'},
    'toast.exportError':{es:'Error al exportar.',en:'Export error.',fr:'Erreur export.',de:'Exportfehler.',ru:'Ошибка экспорта.',it:'Errore export.'},
    'footer.copy':{es:'© 2026 Yana Yavorskaya. Todos los derechos reservados.',en:'© 2026 Yana Yavorskaya. All rights reserved.',fr:'© 2026 Yana Yavorskaya. Tous droits réservés.',de:'© 2026 Yana Yavorskaya. Alle Rechte vorbehalten.',ru:'© 2026 Яна Яворская. Все права защищены.',it:'© 2026 Yana Yavorskaya. Tutti i diritti riservati.'},
    'footer.legal':{es:'Aviso Legal',en:'Legal Notice',fr:'Mentions Légales',de:'Impressum',ru:'Правовая информация',it:'Note Legali'},
    'footer.privacy':{es:'Privacidad',en:'Privacy',fr:'Confidentialité',de:'Datenschutz',ru:'Конфиденциальность',it:'Privacy'},
    'footer.cookies':{es:'Cookies',en:'Cookies',fr:'Cookies',de:'Cookies',ru:'Куки',it:'Cookies'},
    'footer.terms':{es:'Términos',en:'Terms',fr:'Conditions',de:'Bedingungen',ru:'Условия',it:'Termini'},
    'page.title':_0,
    'page.description':{es:'Yana Yavorskaya — Pintora contemporánea. Obra original, exposiciones, galería privada.',en:'Yana Yavorskaya — Contemporary painter. Original works, exhibitions, private gallery.',fr:'Yana Yavorskaya — Peintre contemporaine.',de:'Yana Yavorskaya — Zeitgenössische Malerin.',ru:'Яна Яворская — Современная художница.',it:'Yana Yavorskaya — Pittrice contemporanea.'},
    'legal.back':{es:'← Volver al inicio',en:'← Back',fr:'← Retour',de:'← Zurück',ru:'← Назад',it:'← Indietro'},
    'legal.update':{es:'Última actualización: 11 de julio de 2026',en:'Last updated: July 11, 2026',fr:'Dernière mise à jour : 11 juillet 2026',de:'Zuletzt aktualisiert: 11. Juli 2026',ru:'Обновлено: 11 июля 2026',it:'Ultimo aggiornamento: 11 luglio 2026'},
    'legal.copyright':{es:'© 2026 Yana Yavorskaya. Todos los derechos reservados.',en:'© 2026 Yana Yavorskaya. All rights reserved.',fr:'© 2026 Yana Yavorskaya. Tous droits réservés.',de:'© 2026 Yana Yavorskaya. Alle Rechte vorbehalten.',ru:'© 2026 Яна Яворская. Все права защищены.',it:'© 2026 Yana Yavorskaya. Tutti i diritti riservati.'},
    'legal.aviso.title':{es:'Aviso Legal',en:'Legal Notice',fr:'Mentions Légales',de:'Impressum',ru:'Правовая информация',it:'Note Legali'},
    'legal.privacy.title':{es:'Política de Privacidad',en:'Privacy Policy',fr:'Politique de Confidentialité',de:'Datenschutzerklärung',ru:'Политика конфиденциальности',it:'Informativa Privacy'},
    'legal.cookies.title':{es:'Política de Cookies',en:'Cookie Policy',fr:'Politique de Cookies',de:'Cookie-Richtlinie',ru:'Политика куки',it:'Politica Cookie'},
    'legal.terms.title':{es:'Términos y Condiciones',en:'Terms and Conditions',fr:'Conditions Générales',de:'AGB',ru:'Условия',it:'Termini e Condizioni'},
    'chat.tooltip':{es:'Hablar con la comisaria',en:'Talk to the curator',fr:'Parler à la commissaire',de:'Mit der Kuratorin sprechen',ru:'Поговорить с куратором',it:'Parla con la curatrice'},
    'chat.name':{es:'Comisaria Digital',en:'Digital Curator',fr:'Commissaire Numérique',de:'Digitale Kuratorin',ru:'Цифровой Куратор',it:'Curatrice Digitale'},
    'chat.status':{es:'Disponible',en:'Available',fr:'Disponible',de:'Verfügbar',ru:'Доступен',it:'Disponibile'},
    'chat.placeholder':{es:'Escribe tu pregunta…',en:'Type your question…',fr:'Écrivez votre question…',de:'Schreiben Sie…',ru:'Напишите вопрос…',it:'Scrivi la tua domanda…'},
    'chat.send':{es:'Enviar',en:'Send',fr:'Envoyer',de:'Senden',ru:'Отправить',it:'Invia'},
    'chat.q1':{es:'Luz y Sombra',en:'Light & Shadow',fr:'Lumière et Ombre',de:'Licht & Schatten',ru:'Свет и Тень',it:'Luce e Ombra'},
    'chat.q2':{es:'Técnica',en:'Technique',fr:'Technique',de:'Technik',ru:'Техника',it:'Tecnica'},
    'chat.q3':{es:'Disponibilidad',en:'Availability',fr:'Disponibilité',de:'Verfügbarkeit',ru:'Доступность',it:'Disponibilità'},
    'chat.q4':{es:'Exposiciones',en:'Exhibitions',fr:'Expositions',de:'Ausstellungen',ru:'Выставки',it:'Mostre'},
    'chat.greeting':{es:'Bienvenida al estudio. Soy la comisaria virtual. ¿En qué puedo ayudarte?',en:'Welcome to the studio. I\'m the virtual curator. How may I help you?',fr:'Bienvenue au studio. Je suis la commissaire virtuelle.',de:'Willkommen im Studio. Ich bin die virtuelle Kuratorin.',ru:'Добро пожаловать в студию. Я виртуальный куратор.',it:'Benvenuta allo studio. Sono la curatrice virtuale.'},
    'whatsapp.tooltip':{es:'Consultar por WhatsApp',en:'Inquire via WhatsApp',fr:'Consulter par WhatsApp',de:'Per WhatsApp anfragen',ru:'Связаться через WhatsApp',it:'Consulta via WhatsApp'},
    /* OBRAS DISPONIBLES */
    'shop.title':{es:'Obras disponibles',en:'Available works',fr:'Œuvres disponibles',de:'Verfügbare Werke',ru:'Доступные работы',it:'Opere disponibili'},
    'shop.galeria':{es:'Galería privada',en:'Private gallery',fr:'Galerie privée',de:'Private Galerie',ru:'Частная галерея',it:'Galleria privata'},
    'shop.intro':{es:'Cada obra incluye certificado de autenticidad firmado por la artista. Para adquirir cualquiera de estas piezas, contacta directamente con Yana.',en:'Each work includes a certificate of authenticity signed by the artist. Contact Yana directly.',fr:'Chaque œuvre inclut un certificat d\'authenticité. Contactez Yana.',de:'Jedes Werk enthält ein Echtheitszertifikat. Kontaktieren Sie Yana.',ru:'Сертификат подлинности на каждую работу. Свяжитесь с Яной.',it:'Ogni opera ha certificato di autenticità. Contatta Yana.'},
    'shop.howto':{es:'✦ Cómo comprar: pulsa «Consulta» en la obra que te interese. Sin intermediarios. Directamente desde el estudio.',en:'✦ How to buy: click «Inquire» on the piece you like. No intermediaries. Directly from the studio.',fr:'✦ Comment acheter : cliquez sur « Consulter ». Sans intermédiaires.',de:'✦ So kaufen Sie: Klicken Sie auf «Anfrage». Direkt aus dem Atelier.',ru:'✦ Как купить: нажмите «Запрос». Без посредников.',it:'✦ Come acquistare: clicca «Consulta». Senza intermediari.'},
    'shop.filterAll':{es:'Todas',en:'All',fr:'Toutes',de:'Alle',ru:'Все',it:'Tutte'},
    'shop.filterAvail':{es:'Disponibles',en:'Available',fr:'Disponibles',de:'Verfügbar',ru:'Доступные',it:'Disponibili'},
    'shop.filterReserv':{es:'Reservadas',en:'Reserved',fr:'Réservées',de:'Reserviert',ru:'Резерв',it:'Riservate'},
    'shop.consulta':{es:'Consulta',en:'Inquire',fr:'Consulter',de:'Anfrage',ru:'Запрос',it:'Consulta'},
    'shop.consultar':{es:'Consultar',en:'Inquire',fr:'Consulter',de:'Anfragen',ru:'Спросить',it:'Consultare'},
    'shop.disponible':{es:'Disponible',en:'Available',fr:'Disponible',de:'Verfügbar',ru:'Доступно',it:'Disponibile'},
    'shop.reservada':{es:'Reservada',en:'Reserved',fr:'Réservée',de:'Reserviert',ru:'Резерв',it:'Riservata'},
    'shop.certificado':{es:'Certificado incluido',en:'Certificate included',fr:'Certificat inclus',de:'Zertifikat',ru:'Сертификат',it:'Certificato'},
    'shop.edUnica':{es:'Edición única',en:'Unique edition',fr:'Édition unique',de:'Einzelstück',ru:'Уник. экз.',it:'Edizione unica'},
    'shop.oro24k':{es:'Pan de oro 24K',en:'24K gold leaf',fr:'Feuille d\'or 24K',de:'24K Blattgold',ru:'Золото 24K',it:'Foglia oro 24K'},
    'shop.modalTitle':{es:'Consulta privada',en:'Private inquiry',fr:'Consultation privée',de:'Private Anfrage',ru:'Частный запрос',it:'Consultazione privata'},
    'shop.modalText':{es:'Contacta con Yana para recibir toda la información.',en:'Contact Yana to receive all the information.',fr:'Contactez Yana pour recevoir les informations.',de:'Kontaktieren Sie Yana.',ru:'Свяжитесь с Яной.',it:'Contatta Yana per informazioni.'},
    /* NOTICIAS */
    'news.title':{es:'Próximas citas',en:'Upcoming events',fr:'Prochains rendez-vous',de:'Kommende Termine',ru:'События',it:'Prossimi eventi'},
    'news.subtitle':{es:'Ferias, exposiciones y eventos de arte en Madrid y Europa.',en:'Art fairs, exhibitions and events in Madrid and Europe.',fr:'Foires, expositions et événements à Madrid et en Europe.',de:'Kunstmessen und Ausstellungen in Madrid und Europa.',ru:'Ярмарки и выставки в Мадриде и Европе.',it:'Fiere, mostre ed eventi a Madrid e in Europa.'},
    'news.label':{es:'Noticias & Eventos',en:'News & Events',fr:'Actualités & Événements',de:'News & Events',ru:'Новости и события',it:'Notizie & Eventi'},
    'news.recent':{es:'Noticias recientes',en:'Recent news',fr:'Actualités récentes',de:'Aktuelles',ru:'Новости',it:'Notizie recenti'},
    'news.tagArt':{es:'Art Madrid',en:'Art Madrid',fr:'Art Madrid',de:'Art Madrid',ru:'Art Madrid',it:'Art Madrid'},
    'news.tagIfema':{es:'IFEMA',en:'IFEMA',fr:'IFEMA',de:'IFEMA',ru:'IFEMA',it:'IFEMA'},
    'news.tagMuseos':{es:'Museos Madrid',en:'Madrid Museums',fr:'Musées Madrid',de:'Museen Madrid',ru:'Музеи',it:'Musei Madrid'},
    'news.tagFerias':{es:'Ferias',en:'Fairs',fr:'Foires',de:'Messen',ru:'Ярмарки',it:'Fiere'},
    /* BIO */
    'bio.title':_0,
    'bio.label':{es:'Bio',en:'Bio',fr:'Bio',de:'Bio',ru:'Био',it:'Bio'},
    'bio.back':{es:'← Volver al inicio',en:'← Back',fr:'← Retour',de:'← Zurück',ru:'← Назад',it:'← Indietro'},
    'bio.stat1':{es:'Exposiciones individuales',en:'Solo exhibitions',fr:'Expositions solo',de:'Einzelausstellungen',ru:'Персональные',it:'Mostre personali'},
    'bio.stat2':{es:'Licenciada Bellas Artes',en:'BA Fine Arts',fr:'Licence Beaux-Arts',de:'BA Bildende Kunst',ru:'Диплом',it:'Laurea Belle Arti'},
    'bio.stat3':{es:'Años enseñando',en:'Years teaching',fr:'Années d\'enseignement',de:'Jahre Lehre',ru:'Лет обучения',it:'Anni insegnamento'},
    'bio.stat4':{es:'Años pintando',en:'Years painting',fr:'Années de peinture',de:'Jahre Malerei',ru:'Лет живописи',it:'Anni dipingendo'}
  };

  let currentLang = 'es';

  async function init() {
    try { if (window.MuseoDB) { await MuseoDB.init(); const s = await MuseoDB.getPreferencia('lang'); if (s && LANGS[s]) currentLang = s; else currentLang = detect(); } }
    catch (_) { currentLang = detect(); }
    applyTranslations(); buildLangSwitcher(); persistLang(); return currentLang;
  }
  function detect() { const n = (navigator.language||'es').slice(0,2).toLowerCase(); return LANGS[n] ? n : 'es'; }
  function t(k) { return DICT[k] ? (DICT[k][currentLang]||DICT[k]['es']||k) : k; }
  async function setLang(l) { if (!LANGS[l]) return; currentLang=l; applyTranslations(); buildLangSwitcher(); await persistLang(); window.dispatchEvent(new CustomEvent('museo:langChanged',{detail:{lang:l}})); }
  async function persistLang() { try { if (window.MuseoDB) await MuseoDB.setPreferencia('lang',currentLang); } catch(_) { try { localStorage.setItem('museo_lang',currentLang); } catch(_) {} } }
  function getLang() { return currentLang; }
  function getLangs() { return LANGS; }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var k = el.getAttribute('data-i18n'), tr = t(k);
      if (!tr) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.setAttribute('placeholder', tr);
      else el.textContent = tr;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function(el) {
      var parts = el.getAttribute('data-i18n-attr').split(':');
      if (parts.length===2) el.setAttribute(parts[0].trim(), t(parts[1].trim()));
    });
    document.title = t('page.title');
    var md = document.querySelector('meta[name="description"]'); if (md) md.content = t('page.description');
    document.documentElement.lang = currentLang;
  }

  function buildLangSwitcher() {
    var c = document.getElementById('lang-switcher');
    if (!c) {
      var navInner = document.querySelector('.nav__inner');
      if (!navInner) return;
      c = document.createElement('div'); c.id = 'lang-switcher'; c.className = 'lang-switcher';
      var toggle = navInner.querySelector('.nav__toggle');
      if (toggle) { navInner.insertBefore(c, toggle); } else { navInner.appendChild(c); }
    }
    c.innerHTML = '';
    var cd = LANGS[currentLang];
    var btn = document.createElement('button'); btn.className = 'lang-switcher__current';
    btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', 'Cambiar idioma');
    btn.innerHTML = '&#127760; ' + cd.code.toUpperCase() + ' <span class=\"lang-switcher__arrow\">&#9662;</span>';
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

  return { init:init, t:t, setLang:setLang, getLang:getLang, getLangs:getLangs, LANGS:LANGS, applyTranslations:applyTranslations };
})();

if (typeof window !== 'undefined') window.MuseoI18n = MuseoI18n;