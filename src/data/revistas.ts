// ediciones de la Revista Guaguareando Ando (publicadas en FlipHTML5)
// titulos: los de cada publicacion en FlipHTML5, bajadas: texto impreso en cada portada
// portadas: files/shot.jpg de cada publicacion, guardadas en src/assets/revista/
//
// para agregar una edicion:
// 1) descarga la portada: https://online.fliphtml5.com/Guaguareandoando/<id>/files/shot.jpg
//    y guardala como src/assets/revista/revista-<NN>.jpg
// 2) agrega un objeto al final de `revistas` con el numero siguiente
//    la edicion con el numero mas alto aparece como "edicion actual"

import type { ImageMetadata } from 'astro';

import portada00 from '../assets/revista/revista-00.jpg';
import portada01 from '../assets/revista/revista-01.jpg';
import portada02 from '../assets/revista/revista-02.jpg';
import portada03 from '../assets/revista/revista-03.jpg';

export interface Revista {
  numero: number;
  /** ruta: /revista/<slug> */
  slug: string;
  titulo: string;
  /** texto de la portada */
  bajada: string;
  /** id de la publicacion en FlipHTML5 */
  fliphtml5Id: string;
  portada: ImageMetadata;
  portadaAlt: string;
}

export const revistaBase = 'https://online.fliphtml5.com/Guaguareandoando';

export const revistas: Revista[] = [
  {
    numero: 0,
    slug: 'edicion-0',
    titulo: 'Edición de lanzamiento',
    bajada: 'Hoy celebramos el lanzamiento de nuestra revista.',
    fliphtml5Id: 'ycft',
    portada: portada00,
    portadaAlt:
      'Portada de la Revista Guaguareando Ando Nº 0: la combi azul cargada de maletas en una playa, con el sello "Edición de lanzamiento".',
  },
  {
    numero: 1,
    slug: 'edicion-1',
    titulo: 'Vámonos pal chulo',
    bajada: 'Historias del Zoot Suit. El legado pachuco.',
    fliphtml5Id: 'oggv',
    portada: portada01,
    portadaAlt:
      'Portada de la Revista Guaguareando Ando Nº 1: una pareja pachuca frente a un auto clásico, en una calle con letreros de cine y baile.',
  },
  {
    numero: 2,
    slug: 'edicion-2',
    titulo: 'Raza Unida. La historia de dos mundos',
    bajada: 'Pachuco & Chola: estilo, identidad, resistencia.',
    fliphtml5Id: 'ekdq',
    portada: portada02,
    portadaAlt:
      'Portada de la Revista Guaguareando Ando Nº 2, revista de octubre: un grupo de pachucos y cholas junto a un auto clásico, con el título "Raza Unida".',
  },
  {
    numero: 3,
    slug: 'edicion-3',
    titulo: 'Este mes de octubre, no solo mires el listón rosa',
    bajada: 'Edición especial octubre 2026. Mes rosa: prevención, apoyo, esperanza.',
    fliphtml5Id: 'pgbq',
    portada: portada03,
    portadaAlt:
      'Portada de la Revista Guaguareando Ando Nº 3, edición especial de octubre 2026: dos mujeres abrazadas, una con pañuelo rosa, con el texto "Más que una batalla, es una historia de vida".',
  },
];

export const revistaUrl = (r: Revista) => `${revistaBase}/${r.fliphtml5Id}/`;

/** de la mas reciente a la mas antigua */
export const revistasRecientes = [...revistas].sort((a, b) => b.numero - a.numero);

export const revistaActual = revistasRecientes[0];

export const numeroRevista = (r: Revista) => `Nº ${r.numero}`;
