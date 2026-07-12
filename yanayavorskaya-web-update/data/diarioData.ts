export interface EntradaDiario {
  id: string;
  date: string;
  title: string;
  note: string;
  imageUrl: string;
  tags: string[];
}

export const DIARIO_DATA: EntradaDiario[] = [
  {
    id: 'diario-1',
    date: '11 de Julio de 2026',
    title: 'Tardes de veladuras en el estudio',
    note: 'El secado lento en estos días cálidos de julio permite trabajar los fondos marfiles con una suavidad inusual. Hoy hemos aplicado la cuarta veladura sobre el gran lienzo de 150x100 cm que formará parte de la exposición de otoño. El lino empieza a vibrar con una luz interior maravillosa.',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    tags: ['Estudio', 'Óleo sobre lino', 'Proceso en curso']
  },
  {
    id: 'diario-2',
    date: '28 de Junio de 2026',
    title: 'Nuevos pigmentos naturales desde Italia',
    note: 'Acaba de llegar al estudio un cargamento de tierras minerales puras seleccionadas artesanalmente en Toscana: siena tostada, sombra de Verona y blanco de mármol de Carrara en polvo extrafino. Preparar los óleos a mano sobre la losa de cristal es uno de mis rituales favoritos antes de comenzar una nueva serie.',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    tags: ['Pigmentos', 'Artesanía', 'Materiales nobles']
  },
  {
    id: 'diario-3',
    date: '14 de Junio de 2026',
    title: 'Visita de coleccionistas y té de media tarde',
    note: 'Hoy abrí las puertas del taller a una entrañable pareja de arquitectos venidos desde Ginebra para contemplar los avances de la serie Horizontes Suspendidos. Conversar frente a los lienzos mientras la luz del norte inunda la estancia es siempre enriquecedor y profundamente estimulante.',
    imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80',
    tags: ['Coleccionismo', 'Encuentros en el estudio', 'Madrid']
  },
  {
    id: 'diario-4',
    date: '2 de Mayo de 2026',
    title: 'Preparación y lijado de bastidores 3D',
    note: 'El respeto al soporte es sagrado. Dedicando la mañana entera a lijar suavemente a mano las imprimaciones de cuatro bastidores de madera de pino y lino belga de grano medio. La textura del soporte determinará el recorrido de la espátula durante las próximas semanas de pintura.',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    tags: ['Bastidores', 'Lino belga', 'Oficio']
  }
];
