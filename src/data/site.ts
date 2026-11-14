// datos generales del sitio: contacto, redes, embeds y navegacion
// fuente: sitio publicado (rama main) y canal de YouTube verificado

export const site = {
  name: 'Guaguareando Ando',
  url: 'https://guaguareandoando.com',
  lema: 'GUAGUAREANDO… ANDO!',
  lemaCola: 'porque todos tenemos algo que decir',
  description:
    'Guaguareando Ando: podcast, canal de YouTube, revista digital y música desde la Ciudad de México. Historias que conectan, voces que inspiran.',
  location: 'Ciudad de México',
  email: 'guaguareandoando@gmail.com',
  whatsapp: {
    display: '+52 55 7991 3267',
    number: '5215579913267',
  },
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp.number}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const mailtoLink = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;

export const spotify = {
  showUrl: 'https://open.spotify.com/show/3pCnAtHoFvGbsbihWov8k0',
  embedUrl: 'https://open.spotify.com/embed/show/3pCnAtHoFvGbsbihWov8k0?utm_source=generator&theme=0',
};

export const youtube = {
  channelUrl: 'https://www.youtube.com/@GuaguareandoAndo',
  channelId: 'UCWfx7Pt38JPPw0xFyMX90LQ',
  // lista de subidas del canal: mismo ID cambiando UC por UU
  uploadsEmbedUrl: 'https://www.youtube-nocookie.com/embed/videoseries?list=UUWfx7Pt38JPPw0xFyMX90LQ',
};

/**
 * cancion de la marca (public/audio), titulo tomado de la etiqueta ID3 del archivo
 * `duracion` es solo lo que se muestra antes de darle play, el reproductor usa la duracion real del archivo
 * si cambias el MP3, actualiza la duracion
 */
export const rola = {
  titulo: 'Rola Guaguareando Ando',
  src: '/audio/guaguareando-ando.mp3',
  duracion: '2:52',
};

export const rockSobreRuedas = {
  name: 'Rock sobre Ruedas',
  host: 'La Chicka Crüe',
  day: 'martes',
  time: '8:00 pm',
};

export type SocialId = 'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'spotify';

export const socials: { id: SocialId; label: string; handle: string; url: string }[] = [
  { id: 'spotify', label: 'Spotify', handle: 'Guaguareando Ando', url: spotify.showUrl },
  { id: 'youtube', label: 'YouTube', handle: '@GuaguareandoAndo', url: youtube.channelUrl },
  { id: 'instagram', label: 'Instagram', handle: '@guaguareandoando', url: 'https://www.instagram.com/guaguareandoando' },
  { id: 'facebook', label: 'Facebook', handle: 'guaguareando.ando', url: 'https://www.facebook.com/guaguareando.ando' },
  { id: 'tiktok', label: 'TikTok', handle: '@guaguareandoando_52', url: 'https://www.tiktok.com/@guaguareandoando_52' },
];

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/programas', label: 'Programas' },
  { href: '/musica', label: 'Música' },
  { href: '/revista', label: 'Revista' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/anunciate', label: 'Anúnciate' },
  { href: '/contacto', label: 'Contacto' },
];

export const siteccy = {
  name: 'Siteccy',
  url: 'https://siteccy.com/',
  role: 'Aliado tecnológico',
};
