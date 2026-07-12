export interface Testimonio {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  artworkTitle: string;
}

export const TESTIMONIOS_DATA: Testimonio[] = [
  {
    id: 'testimonio-1',
    quote: 'Adquirir "El Reposo del Viento" ha transformado por completo la atmósfera del salón en nuestro piso de Madrid. La luz cambia a lo largo de las horas y el cuadro parece responder, revelando texturas y matices marfiles que nos aportan un silencio y una serenidad indispensables al terminar el día.',
    author: 'Carlos & Elena Martínez-Arroyo',
    role: 'Arquitectos y Coleccionistas Privados',
    location: 'Madrid, España',
    artworkTitle: 'El Reposo del Viento'
  },
  {
    id: 'testimonio-2',
    quote: 'Lo que más me cautivó de la obra de Yana Yavorskaya al verla en París fue su sobriedad poética. No busca llamar la atención con colores estridentes, sino invitar a una introspección profunda. La pieza encaja a la perfección con la arquitectura de nuestro estudio profesional en Ginebra.',
    author: 'Dr. Jean-Luc Berthier',
    role: 'Consultor Internacional de Arte',
    location: 'Ginebra, Suiza',
    artworkTitle: 'Alba sobre el Mar'
  },
  {
    id: 'testimonio-3',
    quote: 'El trato directo con Yana durante la consulta sobre su obra y posterior visita al taller en Madrid fue exquisito. La pieza llegó a nuestra casa en Burdeos con un embalaje impecable y su certificado original firmado a mano. Es una artista que rezuma autenticidad, elegancia y riguroso respeto por el oficio de pintar.',
    author: 'Sophie de Fontenoy',
    role: 'Coleccionista de Arte Contemporáneo',
    location: 'Burdeos, Francia',
    artworkTitle: 'Bruma de Otoño'
  }
];
