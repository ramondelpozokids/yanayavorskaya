export interface Artwork {
  id: string;
  slug: string;
  title: string;
  collection: string;
  year: number;
  medium: string; // Técnica (ej. "Acrílico sobre lienzo")
  dimensions: string; // Dimensiones (ej. "100 × 80 cm")
  price: number; // Precio en euros
  status: 'Disponible' | 'Reservada' | 'Vendida';
  imageUrl: string;
  description: string; // Texto artístico de 200 a 400 palabras
  inspiration?: string;
  techniqueDetails?: string;
}

export const OBRAS_DATA: Artwork[] = [
  {
    id: 'aurora-interior',
    slug: 'aurora-interior',
    title: 'Aurora Interior',
    collection: 'Horizontes Suspendidos',
    year: 2026,
    medium: 'Acrílico y óleo sobre lienzo de lino de grano fino',
    dimensions: '100 × 80 cm',
    price: 2800,
    status: 'Disponible',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1400&q=85',
    description: `Esta obra nació durante los últimos días del invierno, cuando las primeras luces del amanecer apenas logran atravesar la espesa bruma que envuelve el estudio al romper el día. 'Aurora Interior' no intenta representar un paisaje físico reconocible, sino la arquitectura silenciosa de nuestro propio estado de ánimo en los instantes de tránsito. La paleta, deliberadamente contenida en tonos marfiles, grises perla y destellos cálidos de ocre dorado, busca transmitir esa calma vigilante que precede a toda transformación o revelación personal.

Durante semanas trabajé el lienzo mediante finas capas superpuestas de acrílico muy diluido, permitiendo que la trama del lino crudo respirara a través del pigmento, como si la propia tela fuera la piel de la obra. En los destellos superiores, sin embargo, introduje materia al óleo con espátula flexible, generando una sutil vibración táctil que reacciona de manera única según el ángulo desde el que incida la luz ambiental en la sala donde se exponga.

Para mí, el verdadero significado de este cuadro reside en la aceptación del vacío no como ausencia o carencia, sino como un espacio preñado de posibilidades puras. Cuando contemplo 'Aurora Interior', siento un regreso a lo esencial: el desprendimiento de todo ruido innecesario para dejar que solo perdure la serenidad de una emoción honesta e insobornable. Es una pieza pensada para dialogar en silencio con quien la habita día tras día.`,
    inspiration: 'La luz difusa del amanecer invernal en el estudio y la contemplación del silencio en momentos de cambio.',
    techniqueDetails: 'Veladuras acrílicas de alta dilución combinadas con empastes de óleo en las aristas superiores sobre lienzo de lino crudo tensado a mano.'
  },
  {
    id: 'luz-de-invierno-iii',
    slug: 'luz-de-invierno-iii',
    title: 'Luz de Invierno III',
    collection: 'Luz de Invierno',
    year: 2025,
    medium: 'Óleo sobre lienzo bastidor 3D',
    dimensions: '120 × 120 cm',
    price: 3600,
    status: 'Disponible',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1400&q=85',
    description: `Forma parte del núcleo central de la serie 'Luz de Invierno', una investigación cromática y lumínica en la que he trabajado a lo largo de las últimas dos temporadas. En Madrid, los días despejados de enero y febrero ofrecen una luz excepcionalmente clara, cortante y prístina, capaz de perfilar los volúmenes con una nitidez casi escultórica y, al mismo tiempo, desdibujar los horizontes lejanos en una gradación azulada que invita a la introspección.

El proceso de creación de este lienzo cuadrado de gran formato exigió una enorme paciencia técnica. Cada estrato de óleo blanco de titanio mezclado con matices de azul cobalto y gris de Payne necesitó días de secado antes de recibir la siguiente veladura. Esta acumulación lenta y metódica de materia translúcida produce un efecto de profundidad óptica que no puede lograrse de una sola sesión: la mirada parece penetrar en la superficie del cuadro, como si nos adentráramos en la quietud de un bosque nevado al atardecer.

En el centro de la composición irrumpe un trazo gestual en sombra tostada, un quiebro orgánico que rompe la serenidad aparente para recordarnos la fuerza vital que late bajo la superficie helada de la naturaleza. Esta obra encapsula mi convicción de que la serenidad más profunda siempre convive con una intensidad interior latente.`,
    inspiration: 'Los cielos invernales de Madrid y la frialdad azulada de la luz del norte sobre la piedra y los árboles desnudados por la estación.',
    techniqueDetails: 'Siete capas de veladuras al óleo tradicionales con aglutinante de resina dammar y aceite de linaza refinado.'
  },
  {
    id: 'silencios-urbanos-nocturno',
    slug: 'silencios-urbanos-nocturno',
    title: 'Silencios Urbanos: Nocturno',
    collection: 'Silencios Urbanos',
    year: 2025,
    medium: 'Técnica mixta (pigmentos minerales y acrílico sobre madera de abedul)',
    dimensions: '90 × 110 cm',
    price: 2400,
    status: 'Disponible',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1400&q=85',
    description: `A menudo se asocia la ciudad con el estruendo y la saturación sensorial, pero 'Silencios Urbanos: Nocturno' explora exactamente lo contrario: esos instantes mágicos de la madrugada en los que las calles se vacían, los faroles proyectan sombras alargadas sobre el pavimento húmedo y la arquitectura urbana recupera una soledad monumental y poética.

Para capturar la cualidad mate y terrosa del asfalto nocturno, opté por trabajar sobre un panel rígido de madera de abedul, aplicando pigmentos minerales puros amasados con emulsión acrílica mate. La absorción natural de la madera confirió a las masas oscuras del carbón y el grafito una densidad aterciopelada donde la luz parece quedar atrapada, en lugar de reflejarse. Sobre ese fondo sombrío, tracé finas líneas incisionadas que sugieren estructuras arquitectónicas despojadas de toda presencia humana.

Hay un sentimiento de cobijo en este cuadro. Nos habla de la fascinación de observar la gran ciudad dormida desde una ventana en lo alto, cuando el tiempo parece detenerse y cada pensamiento adquiere una resonancia y claridad inusuales. Es un homenaje a la intimidad y al refugio que podemos construir en medio de la metrópolis moderna.`,
    inspiration: 'Los paseos solitarios por el centro de Madrid altas horas de la noche después de largas jornadas en el estudio.',
    techniqueDetails: 'Pigmentos naturales de grafito, carbón de vid y negro de humo aglutinados artesanalmente sobre soporte rígido de abedul pulido.'
  },
  {
    id: 'eco-de-la-memoria',
    slug: 'eco-de-la-memoria',
    title: 'Eco de la Memoria',
    collection: 'Naturaleza Latente',
    year: 2026,
    medium: 'Óleo sobre lienzo',
    dimensions: '130 × 97 cm',
    price: 3200,
    status: 'Reservada',
    imageUrl: 'https://images.unsplash.com/photo-1581922819941-6ab31ab79bcb?auto=format&fit=crop&w=1400&q=85',
    description: `¿Cómo guardamos los recuerdos? Rara vez permanecen intactos como fotografías nítidas; con el paso del tiempo, se transforman en impresiones afectivas, en machas de color fragmentadas por la nostalgia y el olvido selectivo. 'Eco de la Memoria' es un intento pictórico de rastrear ese proceso psicológico de erosión y persistencia sentimental.

En esta obra, los verdes musgo y los sienas naturales evocan los bosques de mi infancia, pero emergen borrados por veladuras casi blancas que actúan como la niebla del tiempo. Durante el proceso creativo, me dediqué a pintar figuras botánicas definidas para luego rasparlas y lijarlas con suavidad, dejando solo el vestigio o la impronta en la trama de la tela. Este acto de crear y posteriormente velar o destruir parte de la imagen es esencial en mi metodología: creo que la belleza más conmovedora reside en aquello que se intuye, no en lo que se muestra de manera explícita y rotunda.

La obra, actualmente bajo reserva para un coleccionista europeo que se conectó con su atmósfera melancólica en una reciente feria, simboliza el arraigo emocional y la capacidad del arte para actuar como un archivo sensible de nuestra vida interior.`,
    inspiration: 'La memoria involuntaria y cómo los aromas y colores de la naturaleza despiertan recuerdos de la infancia largo tiempo adormecidos.',
    techniqueDetails: 'Pintura por sustracción: aplicación de empastes al óleo y posterior lijado manual para revelar las capas inferiores del aparejo del lienzo.'
  },
  {
    id: 'el-reposo-del-viento',
    slug: 'el-reposo-del-viento',
    title: 'El Reposo del Viento',
    collection: 'Horizontes Suspendidos',
    year: 2024,
    medium: 'Acrílico, arena de cuarzo y óleo sobre lienzo',
    dimensions: '150 × 100 cm',
    price: 4200,
    status: 'Vendida',
    imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1400&q=85',
    description: `Este lienzo de gran formato marca un punto de inflexión en mi trayectoria. Fue adquirido por una importante colección privada en París poco después de su presentación y sigue siendo para mí una de las composiciones donde mejor logré armonizar la fuerza elemental de los materiales con la delicadeza del gesto pictórico.

La inspiración nació en la costa del Atlántico tras una violenta tormenta otoñal. Cuando el viento amaina y la brisa cesa por completo, el mar y la arena quedan marcados con estrías rítmicas de una perfección hipnótica. Para trasladar esa experiencia táctil a la tela, incorporé finas partículas de arena de cuarzo directamente en la imprimación acrílica del lienzo. Al pasar los pinceles planos cargados con óleo gris piedra y azul ultramar desaturado, el pigmento quedaba capturado por el relieve mineral de la arena, creando un juego de luces y sombras microscópicas insustituible.

Aunque la obra ya forma parte de un hogar y una colección en el extranjero, mantenerla visible en el catálogo de mi estudio es indispensable para mí. Representa la fidelidad a un lenguaje propio en el que la materia rústica se eleva hasta alcanzar una expresión de elegancia, serenidad y profundo respeto por los ritmos de la naturaleza.`,
    inspiration: 'Las playas vacías de la costa atlántica tras el paso de un temporal de otoño.',
    techniqueDetails: 'Mezcla de carga mineral de cuarzo de granulometría fina sobre lienzo de algodón pesado impregnado de gesso orgánico.'
  },
  {
    id: 'meditacion-en-ocre',
    slug: 'meditacion-en-ocre',
    title: 'Meditación en Ocre',
    collection: 'Naturaleza Latente',
    year: 2025,
    medium: 'Óleo y cera fría sobre panel de madera',
    dimensions: '80 × 80 cm',
    price: 2100,
    status: 'Disponible',
    imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1400&q=85',
    description: `El ocre es uno de los pigmentos más antiguos utilizados por la humanidad; lleva en sus moléculas la memoria mineral de la tierra cocida al sol. 'Meditación en Ocre' es una indagación en la calidez de los tonos terrosos y la capacidad que tienen para anclar nuestra mente en el momento presente, ofreciéndonos una sensación de centro, estabilidad y equilibrio térmico y emocional.

Para lograr la textura translúcida y cerosa que caracteriza a esta pieza, mezclé colores al óleo tradicionales con medio de cera de abejas decolorada y cera microcristalina en frío. Esta técnica permite trabajar con espátulas metálicas y rodillos de caucho sin que los colores se fundan en un tono turbio; por el contrario, cada capa conserva su autonomía lumínica. Al raspar con cuidado la cera solidificada en el centro, aparecen vestigios de un amarillo oro cálido que contrasta con los bordes de siena tostada y sombra natural.

Es una obra intimista y cálida, pensada para estancias donde se busca fomentar el recogimiento, la lectura pausada y la conversación sincera sin estridencias visuales.`,
    inspiration: 'Las tierras arcillosas de Castilla y el calor de los interiores mediterráneos a media tarde.',
    techniqueDetails: 'Pintura al óleo emulsificada con cera de abejas virgen aplicada en frío y pulida con paño de lino tras su curado completo.'
  },
  {
    id: 'horizontes-blancos',
    slug: 'horizontes-blancos',
    title: 'Horizontes Blancos',
    collection: 'Horizontes Suspendidos',
    year: 2026,
    medium: 'Acrílico de alta densidad y grafito sobre lienzo',
    dimensions: '140 × 90 cm',
    price: 3500,
    status: 'Disponible',
    imageUrl: 'https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=1400&q=85',
    description: `En el arte contemporáneo, el color blanco nunca es simple ausencia de color; es la suma de todos los reflejos del universo o, en palabras del maestro Kazimir Malévich, la nada suprema llena de infinitas promesas. 'Horizontes Blancos' indaga en los infinitos matices del blanco: desde el blanco cálido de leche y marfil hasta el blanco helado de titanio y el blanco grisáceo de la piedra caliza.

La composición se estructura mediante una sutil línea de grafito que divide el plano vertical en dos mitades ligeramente desiguales, sugiriendo la línea de flotación donde el mar se confunde con el cielo en un día de niebla densa. La parte inferior presenta un relieve empastado con espátula ancha, mientras que la superior ha sido alisada casi hasta lograr un brillo de porcelana mate. Esa tensión entre textura y lisura es la que dota de dinamismo interno a la obra.

El coleccionista que contemple 'Horizontes Blancos' encontrará en ella una superficie de descanso mental frente al exceso de información visual y cromática del mundo exterior. Es un refugio de claridad y elegancia pura.`,
    inspiration: 'Los paisajes brumosos donde la línea del horizonte desaparece, disolviendo los límites físicos.',
    techniqueDetails: 'Empaste acrílico de alta densidad aplicado en una sola sesión continua para preservar la espontaneidad y pureza de la materia blanca.'
  },
  {
    id: 'geometria-del-silencio',
    slug: 'geometria-del-silencio',
    title: 'Geometría del Silencio',
    collection: 'Silencios Urbanos',
    year: 2025,
    medium: 'Acrílico sobre lienzo de lino crudo',
    dimensions: '100 × 100 cm',
    price: 2600,
    status: 'Disponible',
    imageUrl: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=1400&q=85',
    description: `La abstracción geométrica suele asociarse a la rigidez matemática y la frialdad industrial, pero en mi trabajo busco humanizar la línea recta y el plano ortogonal dotándolos de un pulso orgánico, imperfecto y profundamente sensible. 'Geometría del Silencio' es un ensayo visual sobre el orden en medio del caos moderno.

Sobre la superficie desnuda del lino belga sin imprimar —cuyos hilos marrones aportan una base cálida y honesta— dispuse grandes bloques rectangulares en negros semitransparentes y grises cálidos. Los bordes de estas formas no han sido trazados con cinta adhesiva de pintor, a pulso con pincel de cerda dura, permitiendo ligeras irregularidades y vibraciones que revelan la mano y el aliento humano detrás del trazo.

Esta pieza genera en el espectador una sensación de equilibrio arquitectónico. Nos recuerda que la verdadera estructura interior no se logra mediante una imposición violenta de control, sino a través de una disposición armónica e inteligente de nuestras fuerzas y límites.`,
    inspiration: 'La arquitectura del racionalismo moderno y la poesía espacial de Luis Barragán y Eduardo Chillida.',
    techniqueDetails: 'Pintura directa con bloques de acrílico pigmentado sobre lino belga virgen preservando la textura natural del tejido en las zonas de reserva.'
  },
  {
    id: 'bruma-de-otono',
    slug: 'bruma-de-otono',
    title: 'Bruma de Otoño',
    collection: 'Naturaleza Latente',
    year: 2024,
    medium: 'Óleo sobre lienzo',
    dimensions: '110 × 80 cm',
    price: 2700,
    status: 'Vendida',
    imageUrl: 'https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=1400&q=85',
    description: `El otoño tiene una cadencia melancólica y serena que siempre me ha cautivado profundamente como artista. Cuando el follaje verde estival cede su lugar a los pálidos ocres, óxidos y grises violáceos, la naturaleza parece prepararse para su largo descanso invernal con una dignidad sobrecogedora. 'Bruma de Otoño' es un testimonio de ese momento de transición estacional.

Pinté esta obra en jornadas continuas durante el mes de noviembre, dejando que la luz gris del cielo nublado de Madrid guiara mis mezclas en la paleta. Utilicé trazos verticales largos y fluidos para simular la cortina de la lluvia fina y la niebla ascendente entre los troncos de los árboles. La disolución de los contornos en esta pintura invita a una lectura pausada en la que el ojo debe completar las formas que emergen tenuemente de la bruma del fondo.

La obra fue seleccionada por un arquitecto en Madrid para coronar la sala principal de una vivienda restaurada en el centro histórico. Que forme parte de las piezas vendidas en mi galería subraya esa continuidad del trabajo de taller: cada obra que parte deja un espacio vital que fertiliza la llegada del siguiente lienzo en blanco.`,
    inspiration: 'Los paseos matinales por el Jardín Botánico de Madrid bajo la niebla de noviembre.',
    techniqueDetails: 'Óleo aplicado con pinceles de largo pelo de tejón en pasadas verticales verticales en húmedo sobre húmedo (alla prima diluida).'
  },
  {
    id: 'transito-nocturno',
    slug: 'transito-nocturno',
    title: 'Tránsito Nocturno',
    collection: 'Silencios Urbanos',
    year: 2026,
    medium: 'Óleo y grafito sobre lienzo',
    dimensions: '120 × 90 cm',
    price: 3100,
    status: 'Disponible',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=85',
    description: `La noche no es negra; es una sinfonía compleja de azules de Prusia profundos, violetas oscuros, grises grafito y sutiles fulgores artificiales que rebotan en las paredes de vidrio y hormigón de la ciudad. 'Tránsito Nocturno' es una indagación en la belleza del movimiento urbano congelado en la quietud de la oscuridad.

El proceso creativo comenzó trazando con barra de grafito puro las líneas de fuerza diagonales que estructuran el cuadro. A continuación, mediante sucesivas capas de óleo azul noche frotado con trapos de algodón, fui oscureciendo los planos principales hasta lograr una profundidad casi líquida. En el cuadrante inferior derecho dejé un desgarro lumínico en blanco hueso y amarillo nápoles pálido, como el rastro fugaz de los faros de un vehículo solitario cruzando un puente en la distancia.

Esta pieza posee un carácter sofisticado, misterioso y envolvente. Es una obra que cambia radicalmente de temperamento con la luz artificial de la noche, revelando destellos aterciopelados y reflejos metálicos que pasan inadvertidos durante las horas del día.`,
    inspiration: 'Los destellos en movimiento de los faros sobre el pavimento de los bulevares urbanos tras la lluvia.',
    techniqueDetails: 'Frotado al óleo (frottage) y esgrafiado con punta seca sobre varias capas de azul Prusia y negro marfil.'
  },
  {
    id: 'sombra-y-luz-v',
    slug: 'sombra-y-luz-v',
    title: 'Sombra y Luz V',
    collection: 'Luz de Invierno',
    year: 2025,
    medium: 'Acrílico sobre lienzo bastidor museo',
    dimensions: '100 × 100 cm',
    price: 2900,
    status: 'Disponible',
    imageUrl: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=1400&q=85',
    description: `Toda la historia del arte es, en el fondo, una reflexión ininterrumpida sobre el diálogo eterno y necesario entre la luz y la sombra; ninguna de las dos puede existir ni afirmarse sin el contraste y el contrapunto de su opuesta. En 'Sombra y Luz V', quinta entrega de esta sub-serie de investigación de taller, he llevado este dualismo a su máxima síntesis formal y poética.

Dividiendo el lienzo cuadrado en dos campos energéticos complementarios, la zona izquierda concentra masas de gris grafito y negro humo que no son planas, sino ricas en matices cálidos de tierra de sombra tostada. La zona derecha, en cambio, resplandece en un blanco marfil trabajado con espátula donde las pequeñas crestas de la pintura capturan los reflejos de la estancia. En la frontera donde ambas zonas colisionan, surge una zona de mestizaje en gris perla donde el trazo se vuelve blando y vibrante.

La pieza invita a reflexionar sobre la integración de nuestros propios contrastes vitales. Nos enseña que la claridad no consiste en negar la sombra, sino en encontrar la justa proporción en la que ambas fuerzas conviven en una armonía serena, lúcida y madura.`,
    inspiration: 'El claroscuro tradicional del barroco español reinterpretado desde el lenguaje minimalista del siglo XXI.',
    techniqueDetails: 'Aplicación binaria en dos zonas de carga volumétrica con espátulas de acero templado y difuminado central al pastel al óleo.'
  },
  {
    id: 'alba-sobre-el-mar',
    slug: 'alba-sobre-el-mar',
    title: 'Alba sobre el Mar',
    collection: 'Horizontes Suspendidos',
    year: 2024,
    medium: 'Óleo sobre lienzo',
    dimensions: '130 × 90 cm',
    price: 3400,
    status: 'Vendida',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=85',
    description: `Pocas contemplaciones en la naturaleza son tan transformadoras para el espíritu humano como observar el instante preciso en el que el sol asciende sobre la línea del mar, tiñendo las aguas frías de la madrugada con destellos rosa pálido, albaricoque y oro suave. 'Alba sobre el Mar' encapsula el recuerdo sensible de esas auroras contempladas en silencio junto a la costa mediterránea.

Para realizar esta pieza, que pronto fue adquirida en una feria de arte por una familia de coleccionistas en Ginebra, empleé óleos de calidad extra fina de molido lento para conservar la máxima pureza y transparencia de los tonos pasteles. La línea del horizonte se mantiene nítida en el centro, aportando una estructura de quietud absoluta al cuadro, mientras que el cielo y los reflejos acuáticos se funden en veladuras sedosas que transmiten ligereza y optimismo.

Aunque marcada con la etiqueta de 'Vendida', su presencia en mi galería digital cumple un rol vital: nos recuerda constantemente la promesa de renovación del nuevo día. Es el testimonio de cómo el arte puede conservar para siempre la serenidad y la belleza efímera de un amanecer perfecto en la memoria colectiva del estudio.`,
    inspiration: 'El amanecer silencioso en la costa mediterránea en los primeros días de la primavera.',
    techniqueDetails: 'Óleos de alta pureza pigmentaria aplicados mediante fundidos sucesivos en seco con pinceles redondos de cerda de marta.'
  }
];

export const COLLECTIONS_LIST = [
  'Todos',
  'Horizontes Suspendidos',
  'Luz de Invierno',
  'Silencios Urbanos',
  'Naturaleza Latente'
];
