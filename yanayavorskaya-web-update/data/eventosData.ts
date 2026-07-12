export interface EventoAgenda {
  id: string;
  title: string;
  type: 'Exposición' | 'Feria Internacional' | 'Inauguración' | 'Taller / Encuentro' | 'Colaboración';
  dateRange: string;
  location: string;
  venue: string;
  description: string;
  status: 'Próximamente' | 'En curso' | 'Confirmado';
}

export const EVENTOS_DATA: EventoAgenda[] = [
  {
    id: 'evento-1',
    title: 'Horizontes Suspendidos: Exposición Solo de Otoño',
    type: 'Exposición',
    dateRange: '15 de Octubre – 30 de Noviembre, 2026',
    location: 'Madrid, España',
    venue: 'Galería de Arte Contemporáneo Barrio de las Letras',
    description: 'Presentación oficial de la nueva colección de 12 lienzos de gran formato en acrílico y óleo sobre lino belga. Una inmersión en la luz invernal y el silencio espacial.',
    status: 'Próximamente'
  },
  {
    id: 'evento-2',
    title: 'ARCO Madrid 2027: Selección Colecciones Privadas',
    type: 'Feria Internacional',
    dateRange: '24 – 28 de Febrero, 2027',
    location: 'Madrid, España',
    venue: 'IFEMA – Pabellones 7 y 9 (Programa Galerías Europeas)',
    description: 'Participación destacada con tres obras monumentales de la serie Silencios Urbanos y Naturaleza Latente en diálogo con esculturas contemporáneas en piedra y bronce.',
    status: 'Confirmado'
  },
  {
    id: 'evento-3',
    title: 'Encuentros en el Estudio: Diálogos sobre el Óleo y el Tiempo',
    type: 'Taller / Encuentro',
    dateRange: '18 de Septiembre de 2026 (Aforo limitado por invitación)',
    location: 'Madrid, España',
    venue: 'Estudio Privado de Yana Yavorskaya (Chamberí)',
    description: 'Sesión exclusiva para coleccionistas y estudiantes avanzados donde se mostrarán las técnicas de veladura tradicional, preparación artesanal de pigmentos y montaje museográfico.',
    status: 'Próximamente'
  },
  {
    id: 'evento-4',
    title: 'Art Madrid 2027: Semana del Arte en el Palacio de Cibeles',
    type: 'Feria Internacional',
    dateRange: '25 de Febrero – 1 de Marzo, 2027',
    location: 'Madrid, España',
    venue: 'Galería de Cristal del Palacio de Cibeles',
    description: 'Exhibición de piezas de formato íntimo y mediano elaboradas sobre madera de abedul pulido con técnica de cera fría y pigmentos minerales.',
    status: 'Confirmado'
  }
];
