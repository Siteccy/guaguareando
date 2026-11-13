// formatos de pauta y aliados
// `formatos`: sitio publicado (rama main, pages/publicity.html)
// `oportunidades`: rama design (advertising.html), se muestran ambos

export type IconName = 'microphone' | 'book' | 'device-mobile' | 'speakerphone' | 'rocket' | 'heart-handshake';

export const formatos: { title: string; text: string; icon: IconName }[] = [
  {
    title: 'Menciones en Podcast',
    text: 'Publicidad integrada en nuestros episodios con alcance directo a nuestra audiencia.',
    icon: 'microphone',
  },
  {
    title: 'Presencia en Revista',
    text: 'Espacios publicitarios dentro de nuestra revista digital.',
    icon: 'book',
  },
  {
    title: 'Redes Sociales',
    text: 'Difusión de tu marca en nuestras plataformas digitales.',
    icon: 'device-mobile',
  },
];

export const oportunidades: { title: string; text: string; icon: IconName }[] = [
  {
    title: 'Difusión de marcas',
    text: 'Presenta tu negocio, producto o servicio a través de espacios de comunicación acordes con tu propuesta.',
    icon: 'speakerphone',
  },
  {
    title: 'Promoción de proyectos',
    text: 'Da visibilidad a iniciativas, actividades, eventos y propuestas que quieras compartir con nuestra audiencia.',
    icon: 'rocket',
  },
  {
    title: 'Alianzas de colaboración',
    text: 'Construyamos relaciones que permitan desarrollar contenidos y proyectos de interés común.',
    icon: 'heart-handshake',
  },
];
