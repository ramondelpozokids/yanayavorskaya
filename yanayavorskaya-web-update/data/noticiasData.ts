export interface Noticia {
  id: string;
  slug: string;
  title: string;
  date: string; // Formato formal, ej: "10 de Julio de 2026"
  category: 'Ferias de arte' | 'Exposiciones' | 'Inspiración artística' | 'Técnicas de pintura' | 'Museos' | 'Proceso creativo' | 'Arte contemporáneo europeo' | 'Arte en Madrid' | 'Nuevos cuadros' | 'Eventos culturales' | 'Visitas a galerías';
  summary: string;
  imageUrl: string;
  readTime: string;
  content: string[]; // Párrafos largos de artista (500 a 850 palabras en total)
}

export const NOTICIAS_DATA: Noticia[] = [
  {
    id: 'arco-madrid-encuentro',
    slug: 'arco-madrid-el-gran-encuentro-del-arte-contemporaneo',
    title: 'ARCO Madrid, el gran encuentro del arte contemporáneo',
    date: '12 de Marzo de 2026',
    category: 'Ferias de arte',
    summary: 'Cada primavera, Madrid se convierte en el epicentro mundial de la creación contemporánea. Una reflexión personal sobre cómo ARCO estimula el diálogo entre culturas y alimenta mi propio proceso creador en el estudio.',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=85',
    readTime: '4 min de lectura',
    content: [
      `Cada primavera, Madrid se convierte en uno de los grandes centros del arte contemporáneo gracias a ARCO Madrid. Galerías, coleccionistas, artistas y amantes del arte de todo el mundo se reúnen para descubrir nuevas propuestas creativas y establecer conexiones internacionales que trascienden las fronteras físicas y lingüísticas.`,
      `Para mí, estos encuentros representan mucho más que una feria comercial. Son una oportunidad invaluable para tomar el pulso a las inquietudes estéticas de nuestro tiempo, conocer nuevas tendencias plásticas, intercambiar experiencias vitales con otros colegas de profesión y, sobre todo, seguir creciendo humana y profesionalmente dentro de un ecosistema en constante transformación.`,
      `Recorrer los amplios pasillos de los pabellones en IFEMA es un ejercicio de inmersión total. Entre instalaciones monumentales, lienzos de gran formato y piezas conceptuales sutiles, uno experimenta el vértigo y la energía de la imaginación humana llevada a su máxima tensión expresiva. Me detengo especialmente en aquellos stands donde el silencio visual y la textura de la materia priman sobre el espectáculo efímero. Es reconfortante comprobar que, en medio de la vorágine tecnológica actual, el lenguaje de la pintura sigue ofreciendo un refugio insustituible para la contemplación pausada y la emoción genuina.`,
      `Mi objetivo es que, en un futuro próximo, mi obra pueda formar parte de estos prestigiosos espacios de consagración donde el arte dialogue de manera abierta y fecunda con personas de diferentes culturas y sensibilidades. Cada vez que salgo de ARCO y regreso al silencio y la concentración de mi estudio, lo hago con los ojos cargados de nuevas ideas, con una paleta mental renovada y con la convicción renovada de que la creación pictórica es un puente universal indispensable para comprender el mundo que habitamos.`
    ]
  },
  {
    id: 'art-madrid-palacio-cibeles',
    slug: 'art-madrid-creatividad-en-el-corazon-de-la-ciudad',
    title: 'Art Madrid: creatividad en el corazón de la ciudad',
    date: '28 de Febrero de 2026',
    category: 'Arte en Madrid',
    summary: 'Durante la Semana del Arte, la Galería de Cristal del Palacio de Cibeles acoge una de las citas más vivas e inspiradoras del panorama nacional e internacional.',
    imageUrl: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1400&q=85',
    readTime: '3 min de lectura',
    content: [
      `Durante la Semana del Arte, Madrid ofrece mucho más que una única feria. Art Madrid reúne galerías y artistas nacionales e internacionales en un espacio único y arquitectónicamente sobrecogedor como la Galería de Cristal del Palacio de Cibeles, donde conviven en perfecta armonía pintura, escultura, fotografía y nuevas formas de expresión artística bajo su emblemática bóveda acristalada.`,
      `Visitar este tipo de eventos siempre resulta profundamente inspirador para cualquier creador. A diferencia de las ferias de dimensiones inabarcables, Art Madrid ofrece una escala más humana y cercana, un ambiente íntimo propicio para detenerse frente a cada obra, conversar libremente con los galeristas y descubrir de cerca la factura técnica de las piezas expuestas.`,
      `Cada exposición y cada estand que recorro es una oportunidad de oro para descubrir nuevas técnicas pigmentarias, conocer artistas emergentes con lenguajes audaces y encontrar intuiciones compositivas que enriquecen mi propio proceso creativo cuando me enfrento de nuevo al lienzo en blanco. La luz natural que baña el Palacio de Cibeles durante el mediodía añade además una dimensión mágica a la contemplación de las texturas de la materia pictórica.`,
      `Salir a pasear por las calles del centro de Madrid tras una jornada en Art Madrid confirma que nuestra ciudad vive un momento de madurez efervescente. El arte está en el corazón del pulso urbano, recordándonos la necesidad del goce estético en nuestra vida cotidiana.`
    ]
  },
  {
    id: 'photoespana-inspiracion',
    slug: 'la-fotografia-como-fuente-de-inspiracion',
    title: 'La fotografía como fuente de inspiración',
    date: '15 de Junio de 2026',
    category: 'Inspiración artística',
    summary: 'El festival PHotoEspaña demuestra cada verano cómo la luz, el encuadre y el instante decisivo dialogan íntimamente con la pintura contemporánea en mi estudio.',
    imageUrl: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1400&q=85',
    readTime: '4 min de lectura',
    content: [
      `El festival PHotoEspaña demuestra cada año en las salas y museos de Madrid cómo la fotografía continúa evolucionando con fuerza y dialogando con otras disciplinas artísticas de una manera fluida, madura y profundamente evocadora.`,
      `Aunque mi trabajo artístico se centra principalmente en la pintura al óleo y el acrílico sobre lienzo, siempre encuentro una inagotable fuente de inspiración en la luz, las composiciones geométricas, los contrastes de claroscuro y las historias humanas que transmiten las grandes exposiciones fotográficas que inundan la ciudad durante los meses de verano.`,
      `El arte no entiende de fronteras rígidas entre disciplinas; todo elemento sensible puede convertirse en combustible para la inspiración. Cuando contemplo los retratos o los paisajes en blanco y negro de los grandes maestros de la cámara en el Jardín Botánico o en la Sala Canal de Isabel II, analizo mentalmente cómo la gradación de grises y la captura del silencio se pueden traducir a veladuras de pigmento y textura de lino en mi paleta de pintar.`,
      `La fotografía me enseña a mirar con mayor rigor compositivo: a recortar lo superfluo, a valorar el vacío compositivo y a capturar la esencia de una atmósfera en una sola fracción de segundo que luego se dilata y eterniza durante semanas en las sucesivas capas de mis cuadros en el estudio.`
    ]
  },
  {
    id: 'europa-nuevas-tendencias',
    slug: 'europa-un-espacio-para-descubrir-nuevas-tendencias',
    title: 'Europa, un espacio para descubrir nuevas tendencias',
    date: '18 de Mayo de 2026',
    category: 'Arte contemporáneo europeo',
    summary: 'De París a Basilea y Bruselas: las grandes bienales y ferias europeas como mapas de navegación para comprender hacia dónde evoluciona el arte actual.',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=85',
    readTime: '4 min de lectura',
    content: [
      `Europa acoge algunas de las ferias, bienales y citas expositivas más importantes y prestigiosas del mundo. Cada ciudad —ya sea París con su elegancia histórica, Basilea con su rigor institucional o Bruselas con su vanguardismo audaz— aporta una identidad propia y una forma absolutamente diferente de entender y proyectar el arte contemporáneo internacional.`,
      `Seguir de cerca y viajar en persona a estos acontecimientos permite no solo conocer nuevas corrientes creativas y descubrir artistas internacionales de primer nivel, sino comprender con perspectiva crítica hacia dónde evoluciona el panorama artístico europeo en términos de materialidad, sostenibilidad y discursos poéticos.`,
      `En mis recientes visitas a galerías y ferias en el corazón de Europa, he comprobado con entusiasmo una clara revalorización de la pintura táctil y artesanal frente al exceso de virtualidad y pantallas. Los coleccionistas y críticos europeos buscan cada vez más obras con densidad matérica, piezas honestas donde se perciba el tiempo humano invertido en el taller y la resonancia de los materiales nobles como el lino virgen, el grafito y las tierras minerales.`,
      `Mi intención es continuar participando activamente en este fecundo diálogo cultural europeo y compartir ese aprendizaje acumulado a través de las veladuras, texturas y silencios que conformarán mis próximas colecciones pictóricas en el estudio.`
    ]
  },
  {
    id: 'valor-encontrarnos-arte',
    slug: 'el-valor-de-encontrarnos-a-traves-del-arte',
    title: 'El valor de encontrarnos a través del arte',
    date: '10 de Abril de 2026',
    category: 'Exposiciones',
    summary: 'Pintar es un acto de introspección íntima en el taller, pero compartir la obra terminada con el espectador en una sala es lo que verdaderamente le da vida.',
    imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85',
    readTime: '3 min de lectura',
    content: [
      `Cada exposición e inauguración en la que participo es mucho más que un simple lugar donde colgar cuadros ordenadamente sobre paredes blancas. Es un espacio cívico para conversar, para escuchar con atención las historias vitales de quienes nos visitan y para descubrir con asombro cómo una misma obra abstracta puede despertar emociones y recuerdos completamente distintos en la biografía de cada persona.`,
      `Ese intercambio humano cálido y directo es una de las partes más valiosas y gratificantes de mi trabajo diario como artista profesional. Pintar es un acto íntimo, solitario y de intensa concentración dentro de las cuatro paredes del estudio, pero compartir la obra con el público y con los coleccionistas que la contemplan es lo que verdaderamente le da vida, sentido y plenitud social al arte.`,
      `Recuerdo con cariño cómo, en una reciente exposición en Madrid, un visitante permaneció casi media hora en silencio absoluto frente a uno de mis lienzos en tonos marfiles y grises. Al terminar, se acercó a mí visiblemente emocionado para explicarme que el cuadro le había devuelto la sensación de paz y cobijo que sentía en la casa de su infancia durante los inviernos en el norte. En momentos así se borra cualquier cansancio acumulado tras semanas de esfuerzo en el caballete.`,
      `El verdadero valor del arte contemporáneo radica precisamente ahí: en su maravillosa capacidad para romper nuestro aislamiento individual, generar empatía y unir a personas de procedencias distantes en un mismo espacio de sensibilidad y reconocimiento compartido.`
    ]
  },
  {
    id: 'silencio-de-los-pigmentos',
    slug: 'el-silencio-de-los-pigmentos-oleo-y-tiempo',
    title: 'El silencio de los pigmentos: por qué el óleo requiere tiempo y paciencia',
    date: '5 de Julio de 2026',
    category: 'Técnicas de pintura',
    summary: 'Una inmersión técnica en el fascinante mundo de las veladuras, los aglutinantes orgánicos y el ritmo natural de secado que impone la pintura al óleo de alta calidad.',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1400&q=85',
    readTime: '5 min de lectura',
    content: [
      `En una sociedad obsesionada con la inmediatez y la productividad vertiginosa, trabajar con pintura al óleo constituye un acto casi revolucionario de resistencia cronológica. El óleo es una materia viva que no tolera las prisas ni los atajos artificiales; impone sus propias leyes de secado, oxidación y maduración lenta de la película pigmentaria sobre la trama del lienzo.`,
      `En mi práctica diaria en el estudio, preparo gran parte de mis colores amasando pigmentos minerales en polvo —tierras de siena, ocres naturales, blanco de zinc y azul cobalto— con aceite de linaza purificado al sol y resina dammar de primera prensada. Este proceso manual no es un mero arcaísmo o nostalgia técnica; es la única manera de garantizar que el color conserve una profundidad óptica inalcalzable con las fórmulas sintéticas industriales de secado rápido.`,
      `Cuando aplico una veladura sobre el lienzo de lino, el color es casi invisible, una neblina transparente de apenas micras de espesor. Para construir un cielo o un fondo de apariencia serena en mis obras de la serie 'Luz de Invierno', puedo llegar a superponer entre seis y ocho veladuras con intervalos de hasta una semana de secado intermedio entre capa y capa. Esa acumulación metódica permite que la luz exterior penetre en la pintura, rebadura y rebote en el aparejo blanco inferior, regresando a los ojos del espectador con una vibración cálida y misteriosa.`,
      `Pintar al óleo me ha enseñado una lección fundamental de vida: el valor inestimable del tiempo de espera. Saber cuándo detener la espátula y dejar que el cuadro repose en silencio durante días es tan importante como el propio acto de pintar.`
    ]
  },
  {
    id: 'anatomia-del-lienzo-blanco',
    slug: 'la-anatomia-del-lienzo-en-blanco-y-el-primer-trazo',
    title: 'La anatomía del lienzo en blanco: cómo enfrentarse al vértigo del primer trazo',
    date: '20 de Junio de 2026',
    category: 'Proceso creativo',
    summary: 'El inicio de una nueva obra nunca es un acto impulsivo: así preparo física y mentalmente el espacio, los bastidores y la respiración en mi taller.',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=85',
    readTime: '4 min de lectura',
    content: [
      `Se ha escrito mucho sobre el "terror al lienzo en blanco", ese supuesto bloqueo paralizante que experimenta el artista frente a una tela virgen y vacía que espera ser conquistada. Sin embargo, con los años de oficio he aprendido a transformar ese miedo inicial en un sentimiento de reverencia, gratitud y expectación serena.`,
      `Para mí, el proceso compositivo de un cuadro comienza mucho antes de abrir los tubos de pintura o manchar el primer pincel. Comienza con la elección minuciosa del soporte: prefiero el lino belga de grano fino o medio, tensado manualmente sobre bastidores de madera de pino de canto ancho y curado que evitan cualquier deformación estructural del lienzo con el paso de las estaciones.`,
      `Antes de dar la primera pincelada, contempo el lienzo desnudo en el silencio matinal del estudio durante largo rato. Observo la trama del tejido, el color cálido de la fibra cruda y cómo la luz de la ventana norte resbala por su superficie. En ocasiones, realizo un suave lijado manual de la imprimación para eliminar asperezas mecánicas y lograr una textura sedosa que invite a la fluidez del pincel.`,
      `El primer trazo —que suele ser una amplia línea diagonal al carbón de vid o una aguada ligera de siena quemada diluida— rompe la inmaculada neutralidad del plano para establecer de inmediato la columna vertebral y el ritmo energético de la composición. A partir de ese exacto segundo, el lienzo deja de ser un objeto inerte para convertirse en un interlocutor vivo que empieza a dictar sus propias necesidades compositivas.`
    ]
  },
  {
    id: 'prado-velazquez-paleta',
    slug: 'recorrido-por-el-museo-del-prado-la-luz-de-velazquez',
    title: 'Recorrido por el Museo del Prado: la luz de Velázquez en mi paleta actual',
    date: '3 de Junio de 2026',
    category: 'Museos',
    summary: 'Visitar las salas de los grandes maestros clásicos en Madrid es una clase magistral continua sobre economía de medios, control atmosférico y nobleza en la pintura.',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=85',
    readTime: '5 min de lectura',
    content: [
      `Tener el Museo Nacional del Prado a pocos minutos de distancia en Madrid es uno de los mayores privilegios que puede tener un pintor contemporáneo. A pesar de que mi lenguaje visual se inscribe plenamente dentro de la abstracción minimalista y el arte contemporáneo del siglo XXI, considero que no existe ruptura estructural entre el gran arte clásico y la modernidad bien entendida.`,
      `Cuando camino por la gran galería central del Prado y me detengo frente a los retratos e interiores de Diego Velázquez, me fascina comprobar su extraordinaria economía compositiva y pigmentaria. Velázquez no necesitaba recargar la tela de colores estridentes ni empastes excesivos; con una paleta sobriamente limitada a tierras plomizas, blancos óseos, negros aterciopelados y un toque preciso de cinabrio o siena tostada, era capaz de pintar la propia luz, el aire circundante y la distancia psicológica entre los cuerpos.`,
      `Esa enseñanza velazqueña de que "menos es infinitamente más en la pintura" impregna por completo mi forma de entender la abstracción lírica. Cuando trabajo en mis series de 'Silencios Urbanos' u 'Horizontes Suspendidos', busco exactamente esa cualidad atmosférica: crear un espacio donde la mirada pueda circular con libertad entre las zonas de sombra densa y las veladuras luminosas de los primeros planos.`,
      `El Prado es mi santuario de calibración visual. Cada vez que siento que una obra en mi caballete se vuelve excesivamente recargada o confusa, una visita de un par de horas a las salas de pintura veneciana y española del siglo XVII me devuelve de inmediato la lucidez, la sobriedad compositiva y el respeto absoluto por la dignidad del oficio de pintar.`
    ]
  },
  {
    id: 'nueva-coleccion-horizontes',
    slug: 'preparando-la-nueva-coleccion-horizontes-suspendidos',
    title: 'Preparando la nueva colección "Horizontes Suspendidos" para este otoño',
    date: '24 de Mayo de 2026',
    category: 'Nuevos cuadros',
    summary: 'Avance exclusivo y notas de trabajo desde el estudio sobre la serie de 12 lienzos que se presentará a coleccionistas y amantes del arte en el último trimestre del año.',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1400&q=85',
    readTime: '4 min de lectura',
    content: [
      `Durante los últimos seis meses, el estudio ha sido un hervidero silencioso de actividad donde he concentrado todas mis energías creativas en el desarrollo de mi próxima colección de gran formato, titulada 'Horizontes Suspendidos'. Hoy quiero compartir con vosotros algunas reflexiones sobre el origen y la evolución visual de esta serie que verá la luz a finales de otoño en Madrid.`,
      `La génesis de 'Horizontes Suspendidos' parte de una observación metafórica en torno a la línea del horizonte marítimo en los días de calma chicha invernal: ese punto intangible en el que el cielo plomizo y el océano se funden en un solo campo cromático opalescente, haciendo imposible distinguir dónde termina la tierra o el agua y dónde empieza el aire celeste.`,
      `Para trasladar esta sensación de ingravidez espaciosa al lienzo de lino, he experimentado con combinaciones de pigmentos minerales acrílicos en las capas base —que aportan una planitud mate y absorbente de gran rigor estético— culminados en la parte superior del cuadro con veladuras al óleo en tonos blancos marfiles y grises ceniza aplicadas con amplias espátulas de acero templado.`,
      `La colección constará de doce obras únicas que ya empiezan a entrar en su fase final de reposo y barnizado protector al barniz cera mate. Estoy profundamente agradecida por el enorme interés previo mostrado por varios coleccionistas privados en España, Francia y Suiza que ya han solicitado visitas de avance al estudio para contemplar las piezas antes de su presentación pública oficial.`
    ]
  },
  {
    id: 'estudio-en-invierno-luz',
    slug: 'el-estudio-en-invierno-como-la-luz-del-norte-transforma-marfiles',
    title: 'El estudio en invierno: cómo la luz del norte transforma los tonos marfiles',
    date: '10 de Enero de 2026',
    category: 'Inspiración artística',
    summary: 'Por qué los ventanales orientados al norte son el tesoro más codiciado del pintor y cómo influyen en la percepción sutil de los blancos y grises en mis cuadros.',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1400&q=85',
    readTime: '4 min de lectura',
    content: [
      `Desde la época del Renacimiento hasta los talleres bohemios de Montmartre, los pintores de todas las épocas hemos buscado y codiciado un elemento arquitectónico por encima de cualquier lujo decorativo: los grandes ventanales orientados rigurosamente hacia el norte.`,
      `A diferencia de la luz directa del sur o del poniente —que proyecta sombras duras, altera drásticamente la temperatura cromática a lo largo de las horas y ciega la percepción de los tonos medios—, la luz difusa del cielo norte es serena, constante, azulada y fría. Es la luz de la verdad en pintura: no adula los colores ni oculta los errores de valoración tonal del artista.`,
      `En los cortos días de invierno en Madrid, esa claridad invernal entra en mi estudio como un manto suave que ilumina cada lienzo caballete con una nitidez casi analítica. Es bajo esta luz gélida y limpia donde los tonos marfiles, los blancos rotos y los grises perla muestran su riqueza cromática oculta: revela matices violáceos en las sombras y destellos dorados en las aristas empastadas con espátula.`,
      `Pintar en invierno con el calor de una taza de té sobre la mesa de mezclas y el murmullo de la lluvia tras el cristal es una experiencia de introspección casi monacal que dota a las obras de esa serenidad atemporal que los coleccionistas valoran tanto al incorporarlas a sus vidas.`
    ]
  },
  {
    id: 'dialogo-lino-acrilico',
    slug: 'el-dialogo-del-lino-y-el-acrilico-texturas-que-respiran',
    title: 'El diálogo del lino y el acrílico: texturas que respiran bajo la pintura',
    date: '22 de Noviembre de 2025',
    category: 'Técnicas de pintura',
    summary: 'La elección de la fibra textil del lienzo no es neutra: cómo aprovecho la rugosidad orgánica del lino belga sin imprimar para enriquecer la plástica de mis obras.',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1400&q=85',
    readTime: '3 min de lectura',
    content: [
      `Existe la creencia popular de que el lienzo de lino es simplemente un soporte inerte, un trozo de tela pasiva sobre el cual el pintor arroja sus colores hasta ocultar por completo su presencia física. En mi metodología pictórica, ocurre exactamente lo contrario: el tejido de lino es el coprotagonista activo del cuadro.`,
      `Trabajo fundamentalmente con lino belga virgen de alto gramaje, un material noble cuyas fibras irregulares de color paja oscura o grisáceo poseen una dignidad táctil extraordinaria. En muchas de mis obras más recientes, decido deliberadamente no cubrir toda la superficie de la tela con capas gruesas de aparejo blanco o gesso sintético.`,
      `Al aplicar bloques de pintura acrílica mate en las zonas centrales y dejar márgenes o reservas donde el lino crudo permanece visible y al descubierto, se establece una tensión estética maravillosa entre la materia mineral pintada y la naturaleza vegetal y orgánica del tejido. La rugosidad del lino atrapa los bordes de la espátula, rompiendo la línea recta con una vibración cálida e impredecible que enriquece cada centímetro de la composición final.`
    ]
  },
  {
    id: 'visitas-galerias-madrid-abstraccion',
    slug: 'visitas-a-galerias-en-madrid-el-auge-de-la-abstraccion-lirica',
    title: 'Visitas a galerías en Madrid: el auge de la abstracción lírica en el Barrio de las Letras',
    date: '14 de Octubre de 2025',
    category: 'Visitas a galerías',
    summary: 'Un recorrido personal por los espacios expositivos más estimulantes del Barrio de las Letras, Chamberí y Salesas para descubrir el renacer de la pintura contemplativa en nuestra ciudad.',
    imageUrl: 'https://images.unsplash.com/photo-1581922819941-6ab31ab79bcb?auto=format&fit=crop&w=1400&q=85',
    readTime: '4 min de lectura',
    content: [
      `Las tardes de los viernes o sábados me gusta reservar un par de horas para salir de la soledad del estudio y recorrer las galerías de arte contemporáneo de Madrid. Pasear por las históricas calles del Barrio de las Letras, las elegantes avenidas de Salesas o las salas independientes de Chamberí confirma la excelente salud cultural de nuestra capital.`,
      `En mis recorridos de los últimos meses he constatado con satisfacción un resurgir y un renovado interés por la abstracción lírica y geométrica tanto por parte de los galeristas consolidados como de los nuevos coleccionistas jóvenes. Tras años donde el arte conceptual o el figurativismo neo-pop acapararon gran parte de las miradas, hoy se percibe un regreso decidido a la pintura poética, silenciosa y estructurada.`,
      `Entrar en salas donde se cuida hasta el mínimo detalle la iluminación cenital, donde los cuadros disponen de generosos espacios de oxígeno visual y donde el galerista ejerce una labor educativa y honesta con los visitantes, renueva la fe en nuestra profesión y en el valor incalculable del mercado de arte de calidad y proximidad en Madrid.`
    ]
  },
  {
    id: 'arte-contemporaneo-puente-emocional',
    slug: 'el-arte-contemporaneo-como-puente-emocional-en-un-mundo-acelerado',
    title: 'El arte contemporáneo como puente emocional en un mundo acelerado',
    date: '5 de Septiembre de 2025',
    category: 'Arte contemporáneo europeo',
    summary: 'Reflexiones sobre cómo una obra abstracta bien construida se convierte en un ancla de serenidad espiritual y salud mental en el interior de nuestros hogares.',
    imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1400&q=85',
    readTime: '4 min de lectura',
    content: [
      `Vivimos inmersos en una era de hiperconectividad y sobrestimulación audiovisual constante. Desde que despertamos hasta que conciliamos el sueño, nuestras mentes son bombardeadas por miles de notificaciones móviles, titulares efímeros, vídeos rápidos y un ruido digital incesante que fractura nuestra capacidad de atención sostenida.`,
      `En este contexto histórico tan acelerado y exigente, el papel de una obra de arte contemporáneo en el hogar o en el lugar de trabajo adquiere una nueva y trascendental función higiénica y emocional: la de actuar como un ancla visual de serenidad, silencio y reencuentro interior con nosotros mismos.`,
      `Cuando un coleccionista instala una de mis obras minimalistas en la pared principal de su salón o en su despacho profesional, no está adquiriendo un mero objeto decorativo de lujo; está creando un santuario de desaceleración. Un cuadro con tonos serenos, texturas nobles y composición equilibrada invita a detener la mirada cinco minutos, respirar hondo y recuperar la escala humana en medio de las tensiones y prisas cotidianas.`
    ]
  },
  {
    id: 'pinceles-espatulas-materia',
    slug: 'pinceles-espatulas-y-materia-mis-herramientas-favoritas',
    title: 'Pinceles, espátulas y materia: mis herramientas favoritas en el día a día',
    date: '18 de Agosto de 2025',
    category: 'Proceso creativo',
    summary: 'Una mirada íntima a las herramientas de taller de Yana Yavorskaya: desde las tradicionales espátulas de acero italiano hasta los pinceles planos de pelo natural desgastados por el uso.',
    imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1400&q=85',
    readTime: '3 min de lectura',
    content: [
      `Las herramientas de un pintor con el paso de los años terminan por convertirse en prolongaciones anatómicas directas de sus propias manos y de su sistema nervioso central. En las mesas de mi estudio se apilan docenas de pinceles, brochas, rasquetas, esponjas marinas y rodillos de caucho que he ido adquiriendo, conservando y modificando con devoción artesanal a lo largo de mi carrera.`,
      `Mis herramientas predilectas para construir los relieves de mis series minimalistas son las espátulas italianas de acero templado flexible de hoja ancha y punta biselada. La espátula me permite depositar la masa del óleo o el acrílico con una firmeza e inmediatez escultórica, creando empastes planos con aristas vivas donde la luz se corta y quiebra con una limpieza impecable que el pincel tradicional no puede emular.`,
      `Por el contrario, para las grandes veladuras de fondo y la difuminación atmosférica de los cielos y horizontes, recurro siempre a pinceles planos de pelo natural de cerdo o de tejón de mangos muy largos, muchos de ellos desgastados y despuntados por miles de pasadas sobre el lino basto, lo que les confiere una suavidad casi aterciopelada y orgánica al fundir los tonos.`
    ]
  },
  {
    id: 'importancia-enmarcado-museografia',
    slug: 'la-importancia-del-enmarcado-y-el-montaje-en-la-percepcion',
    title: 'La importancia del enmarcado y el montaje en la percepción de la obra',
    date: '30 de Julio de 2025',
    category: 'Eventos culturales',
    summary: 'El marco no es un mero adorno exterior: cómo elegimos en el taller las molduras de madera natural estilo caja americana para realzar y oxigenar cada lienzo de gran formato.',
    imageUrl: 'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=1400&q=85',
    readTime: '3 min de lectura',
    content: [
      `Una obra de arte no está completamente terminada cuando el artista da su última pincelada y estampa su firma en el ángulo inferior del bastidor; el proceso culmina con el diseño y la ejecución técnica del sistema de enmarcado y montaje museográfico que protegerá y presentará la pieza ante los ojos del espectador o coleccionista.`,
      `Para mis obras contemporáneas y abstractas de gran formato, desaconsejo categóricamente los marcos clásicos ornamentados o recargados que compiten visualmente con la pintura. Mi elección predilecta e innegociable es el marco tipo 'caja americana' en madera maciza de roble natural mate, haya blanqueada o lacado artesanal en negro grafito o blanco marfil según el tono del cuadro.`,
      `La caja americana deja un margen de aire o separación perimetral de un centímetro entre el borde exterior del bastidor de lino y la moldura de madera, generando una ilusión óptica de que el cuadro flota ingrávido en el interior del marco sin estar oprimido ni aprisionado. Esa elegancia estructural y esa respiración perimetral elevan el valor percibido de la obra hasta alcanzar los más altos estándares de las galerías y museos de referencia internacional.`
    ]
  },
  {
    id: 'reflexiones-permanencia-viaje-cuadro',
    slug: 'reflexiones-sobre-la-permanencia-el-viaje-de-un-cuadro',
    title: 'Reflexiones sobre la permanencia: el viaje de un cuadro desde el estudio a una colección privada',
    date: '12 de Julio de 2025',
    category: 'Ferias de arte',
    summary: 'Qué experimenta una artista cuando se despide de una obra pintada con meses de dedicación para que inicie su nueva vida en el hogar de un coleccionista en otra ciudad o país.',
    imageUrl: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=1400&q=85',
    readTime: '4 min de lectura',
    content: [
      `A menudo me preguntan en el estudio si no siento una punzada de melancolía o tristeza cuando me despido de un cuadro que me ha llevado meses de esfuerzo, dudas, veladuras e intensa convivencia intelectual para enviarlo al hogar o la oficina de un coleccionista privado en Madrid, París, Ginebra o Londres.`,
      `La respuesta honesta es que la despedida de una obra completada produce, ante todo, una profunda sensación de alivio y realización trascendente. Cuando un cuadro permanece indefinidamente almacenado en los peines de mi taller, sigue siendo una conversación interna inconclusa entre la artista y sus propios materiales; al ser adquirido y colgado en la casa de un amante del arte, el lienzo cobra su verdadera plenitud vital y social.`,
      `Cada vez que empaqueto con esmero una pieza en su caja de madera tratada para su envío por mensajería especializada y firmo su Certificado de Autenticidad original, sé que esa obra pasa a convertirse en un miembro silencioso y perdurable de la intimidad y la historia cotidiana de esa familia o ese profesional. Saber que mis cuadros iluminarán sus mañanas, presenciarán sus conversaciones en el salón y les brindarán serenidad durante décadas es el mayor tributo y la máxima recompensa que puede recibir un artista contemporáneo.`
    ]
  }
];

export const CATEGORIAS_NOTICIAS = [
  'Todas',
  'Ferias de arte',
  'Exposiciones',
  'Inspiración artística',
  'Técnicas de pintura',
  'Museos',
  'Proceso creativo',
  'Arte contemporáneo europeo',
  'Arte en Madrid',
  'Nuevos cuadros',
  'Eventos culturales',
  'Visitas a galerías'
];
