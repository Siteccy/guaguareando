// programas de Guaguareando Ando
// textos tomados tal cual de la rama `design` (programs/*.html y programs.html)
// el que antes era "Rock and Roll en Ruedas" ahora se llama "Rock sobre Ruedas"
//
// para agregar un programa:
// 1) guarda la portada en src/assets/programas/<slug>.jpg (minimo 1000 px de ancho, sin espacios ni acentos)
// 2) agrega un objeto a `programs` con el mismo slug, el orden del arreglo es el orden en el sitio

import type { ImageMetadata } from 'astro';

import lordCinturitas from '../assets/programas/lord-cinturitas.jpg';
import letreandoAndo from '../assets/programas/letreando-ando.jpg';
import entreGuitarras from '../assets/programas/entre-guitarras-y-guitarristas.jpg';
import bomboneandoAndo from '../assets/programas/bomboneando-ando.jpg';
import unAtisbo from '../assets/programas/un-atisbo-a-traves-del-muro.jpg';
import subelePisale from '../assets/programas/subele-pisale-y-a-ver-que-pasa.jpg';
import aventureandoAndo from '../assets/programas/aventureando-ando.jpg';
import ecosInclusion from '../assets/programas/ecos-de-la-inclusion.jpg';
import tecnologeandoAndo from '../assets/programas/tecnologeando-ando.jpg';
import loQueCallamos from '../assets/programas/lo-que-callamos-los-maestros.jpg';
import deporteandoAndo from '../assets/programas/deporteando-ando.jpg';
import sobreElArcoiris from '../assets/programas/sobre-el-arcoiris.jpg';
import rockSobreRuedas from '../assets/programas/rock-sobre-ruedas.jpg';

export interface Highlight {
  title: string;
  text: string;
}

export interface Program {
  slug: string;
  name: string;
  /** tema corto, se muestra como "destino" en la etiqueta de maleta */
  tema: string;
  /** musica = morado, el resto es podcast = azul */
  kind: 'podcast' | 'musica';
  cover: ImageMetadata;
  coverAlt: string;
  /**
   * como se acomoda la portada en el marco cuadrado (etiqueta y ficha), para que todas
   * ocupen el mismo tamano - sin este campo: llena el cuadro recortando al centro (las cuadradas no pierden nada)
   * - `recorte`: llena el cuadro recortando, `posicion` elige que parte se conserva (ej 'top')
   * - `fondo`: muestra el arte completo y rellena lo que sobra con el color del fondo del propio arte
   */
  coverAjuste?: { modo: 'recorte'; posicion: string } | { modo: 'fondo'; color: string };
  /** descripcion corta de la grilla de programas */
  short: string;
  /** entrada de la pagina del programa */
  lead: string;
  about: { title: string; paragraphs: string[] }[];
  highlights: Highlight[];
  extra?: { title: string; paragraphs: string[]; link?: { label: string; href: string } };
  cta: { title: string; text: string; action: 'programas' | 'contacto' };
  /** solo para programas con horario confirmado */
  live?: { host: string; day: string; time: string; where: string };
}

export const programs: Program[] = [
  {
    slug: 'lord-cinturitas',
    name: 'Lord Cinturitas',
    tema: 'Bienestar',
    kind: 'podcast',
    cover: lordCinturitas,
    coverAlt: 'Portada de Lord Cinturitas: personaje con bolsa de papel en la cabeza, rodeado de frutas y verduras, con el lema "Vida saludable, llévala bien".',
    short:
      'Ejercicio, alimentación balanceada, bienestar y consejos para llevar una vida más activa y saludable.',
    lead: 'Un espacio dedicado al ejercicio, la alimentación balanceada, el bienestar y el cuidado de la salud.',
    about: [
      {
        title: 'Sobre el programa',
        paragraphs: [
          'Lord Cinturitas es un espacio para hablar de ejercicio, alimentación y bienestar de una manera cercana, práctica y entretenida.',
          'Aquí encontrarás contenidos relacionados con ejercicios para realizar en casa o en el gimnasio, alimentación balanceada, recomendaciones sobre suplementos y consejos para la prevención y el cuidado de la salud.',
        ],
      },
    ],
    highlights: [
      { title: 'Ejercicio', text: 'Consejos y contenidos relacionados con la actividad física en casa o en el gimnasio.' },
      { title: 'Alimentación', text: 'Recomendaciones para mantener una alimentación balanceada y hábitos saludables.' },
      { title: 'Bienestar', text: 'Información y consejos relacionados con la prevención y el cuidado de la salud.' },
    ],
    extra: {
      title: 'Una cinturita saludable',
      paragraphs: [
        'Porque todos queremos esa famosa cinturita de avispa... o de abejorro. Pero más allá de la apariencia, el objetivo es promover hábitos que contribuyan a una vida activa y saludable.',
      ],
    },
    cta: { title: 'Sigue guaguareando', text: 'Descubre este y los demás programas de Guaguareando Ando.', action: 'programas' },
  },
  {
    slug: 'letreando-ando',
    name: 'Letreando Ando',
    tema: 'Cultura',
    kind: 'podcast',
    cover: letreandoAndo,
    coverAlt: 'Portada de Letreando Ando: ilustración de una mujer cargando una pila de libros.',
    short:
      'Cultura, tradiciones, arte, cine, música, exposiciones y todo aquello que forma parte de nuestra riqueza cultural.',
    lead: 'Un espacio para descubrir, conversar y disfrutar la cultura, las artes, las tradiciones y las historias que dan vida a nuestras comunidades.',
    about: [
      {
        title: 'Sobre el programa',
        paragraphs: [
          'Letreando Ando es un espacio dedicado a explorar diferentes expresiones culturales y artísticas, acercándonos a las historias, personas y acontecimientos que forman parte de nuestro entorno.',
          'Aquí conversamos sobre tradiciones locales, festividades culturales nacionales e internacionales, artes escénicas, museos, galerías y exposiciones, así como sobre artistas y sus trayectorias.',
        ],
      },
    ],
    highlights: [
      { title: 'Cultura y tradiciones', text: 'Un recorrido por las tradiciones, celebraciones y expresiones culturales que forman parte de nuestra identidad.' },
      { title: 'Arte y literatura', text: 'Literatura, artes escénicas, museos, galerías, exposiciones y perfiles de artistas.' },
      { title: 'Cine y música', text: 'Cine, música, directores musicales y aquellas bandas sonoras que se han convertido en parte de nuestra memoria.' },
    ],
    extra: {
      title: 'Historias que también se cuentan',
      paragraphs: [
        'Desde una exposición hasta una película, desde un artista hasta una celebración tradicional, Letreando Ando busca encontrar esas historias que nos permiten mirar la cultura desde diferentes perspectivas.',
        'También hay espacio para hablar de gastronomía y de todos esos detalles que hacen que una experiencia cultural pueda convertirse en una historia para compartir.',
      ],
    },
    cta: { title: 'Sigue guaguareando', text: 'Descubre Letreando Ando y conoce los demás programas de Guaguareando Ando.', action: 'programas' },
  },
  {
    slug: 'entre-guitarras-y-guitarristas',
    name: 'Entre Guitarras y Guitarristas',
    tema: 'Música',
    kind: 'musica',
    cover: entreGuitarras,
    coverAjuste: { modo: 'fondo', color: '#000000' },
    coverAlt: 'Portada de Entre Guitarras y Guitarristas: guitarras eléctricas, un amplificador y unos tenis sobre fondo negro.',
    short:
      'Un recorrido por diferentes géneros musicales y las historias de quienes han hecho de la música una forma de vida.',
    lead: 'Un espacio para recorrer la música a través de sus géneros, sus historias y los guitarristas y músicos que han dejado huella.',
    about: [
      {
        title: 'Sobre el programa',
        paragraphs: [
          'Entre Guitarras y Guitarristas es un espacio para hablar de música en todas sus formas, recorriendo diferentes géneros, épocas, artistas e historias que han marcado la cultura musical.',
          'Desde Mozart hasta el ska, pasando por el rock, la salsa, las cumbias, el pop, el metal, el blues y muchos otros sonidos, aquí cada género tiene una historia que contar.',
        ],
      },
    ],
    highlights: [
      { title: 'Todos los géneros', text: 'Rock, salsa, cumbia, pop, metal, blues, ska y muchos otros géneros forman parte de esta conversación musical.' },
      { title: 'Grandes músicos', text: 'Historias, trayectorias y momentos importantes de músicos y guitarristas que han dejado huella.' },
      { title: 'Historias musicales', text: 'Aniversarios, acontecimientos y relatos que ayudan a entender la música más allá de sus canciones.' },
    ],
    extra: {
      title: 'Una historia detrás de cada canción',
      paragraphs: [
        'La música no solamente se escucha: también se vive, se recuerda y se comparte. Detrás de cada canción existen músicos, momentos, influencias y circunstancias que hacen que una melodía pueda convertirse en parte de nuestra historia.',
        'Entre Guitarras y Guitarristas busca precisamente esas historias para conversar sobre ellas y seguir descubriendo la música desde diferentes perspectivas.',
      ],
    },
    cta: { title: 'Sigue guaguareando', text: 'Descubre Entre Guitarras y Guitarristas y conoce los demás programas de Guaguareando Ando.', action: 'programas' },
  },
  {
    slug: 'bomboneando-ando',
    name: 'Bomboneando Ando',
    tema: 'Inglés',
    kind: 'podcast',
    cover: bomboneandoAndo,
    coverAjuste: { modo: 'fondo', color: '#ffffff' },
    coverAlt: 'Portada de Bomboneando Ando: ilustración de una mujer saludando con el texto "¡Holiii! Bomboneando ando en las curiosidades del idioma inglés".',
    short: 'Curiosidades, expresiones y particularidades de la lengua inglesa de una manera amena y entretenida.',
    lead: 'Un espacio para descubrir las curiosidades del idioma inglés y acercarnos a sus palabras, expresiones y particularidades de una manera amena.',
    about: [
      {
        title: 'Sobre el programa',
        paragraphs: [
          'Bomboneando Ando es un espacio dedicado a descubrir las curiosidades del idioma inglés, explorando palabras, expresiones y detalles que muchas veces pasan desapercibidos.',
          'Una forma entretenida de acercarnos al idioma, conocer su riqueza y descubrir esas pequeñas particularidades que pueden sorprendernos.',
        ],
      },
    ],
    highlights: [
      { title: 'Curiosidades', text: 'Descubrimos datos interesantes y particularidades que hacen especial al idioma inglés.' },
      { title: 'Palabras y expresiones', text: 'Exploramos palabras, expresiones y formas de comunicarnos que tienen historias interesantes detrás.' },
      { title: 'Aprende guaguareando', text: 'Una manera cercana y entretenida de descubrir el inglés a través de la conversación.' },
    ],
    extra: {
      title: 'El inglés también tiene historias',
      paragraphs: [
        'Detrás de muchas palabras y expresiones existen historias, costumbres y formas de entender el mundo. Bomboneando Ando busca descubrirlas y compartirlas de una manera sencilla y entretenida.',
        'Porque aprender un idioma también puede ser una buena excusa para conversar, sorprenderse y seguir guaguareando.',
      ],
    },
    cta: { title: 'Sigue guaguareando', text: 'Descubre Bomboneando Ando y conoce los demás programas de Guaguareando Ando.', action: 'programas' },
  },
  {
    slug: 'un-atisbo-a-traves-del-muro',
    name: 'Un Atisbo a Través del Muro',
    tema: 'Historias',
    kind: 'podcast',
    cover: unAtisbo,
    coverAjuste: { modo: 'recorte', posicion: 'top' },
    coverAlt: 'Portada de Un Atisbo a Través del Muro: una vela encendida junto a una pluma y un tintero sobre una mesa.',
    short: 'Historias, situaciones y voces que invitan a mirar más allá de lo evidente.',
    lead: 'Una mirada más allá de lo evidente para descubrir historias, realidades y voces que muchas veces permanecen del otro lado del muro.',
    about: [
      {
        title: 'Sobre el programa',
        paragraphs: [
          'Un Atisbo a Través del Muro nace de la idea de mirar aquello que normalmente permanece oculto. Porque detrás de cada muro puede existir una historia, un secreto, una realidad o una voz que merece ser escuchada.',
          'Es un espacio para observar más allá de lo evidente, cuestionar lo que conocemos y acercarnos a esas historias que no siempre encuentran un lugar para ser contadas.',
        ],
      },
    ],
    highlights: [
      { title: 'Mirar más allá', text: 'Una invitación a observar aquello que normalmente queda fuera de nuestra mirada cotidiana.' },
      { title: 'Historias reales', text: 'Voces, experiencias y situaciones que permiten conocer otras perspectivas de la realidad.' },
      { title: 'Lo que no se cuenta', text: 'Un espacio para acercarnos a temas y conversaciones que muchas veces quedan detrás del muro.' },
    ],
    extra: {
      title: 'Detrás de cada muro hay una historia',
      paragraphs: [
        'Los muros pueden separar personas, esconder realidades o guardar historias. Pero también pueden convertirse en el punto desde el cual decidimos mirar un poco más allá.',
        'Un Atisbo a Través del Muro busca precisamente ese momento: cuando dejamos de mirar solamente la superficie y nos atrevemos a descubrir qué hay detrás.',
      ],
    },
    cta: { title: 'Sigue guaguareando', text: 'Descubre Un Atisbo a Través del Muro y conoce los demás programas de Guaguareando Ando.', action: 'programas' },
  },
  {
    slug: 'subele-pisale-y-a-ver-que-pasa',
    name: 'Súbele, Písale y a Ver Qué Pasa',
    tema: 'Conversación',
    kind: 'podcast',
    cover: subelePisale,
    coverAlt: 'Portada de Súbele, Písale y a Ver Qué Pasa: un auto clásico derrapando entre humo, con el título del programa.',
    short: 'Curiosidad, conversaciones inesperadas, debates y reflexiones donde nunca sabemos exactamente qué puede pasar.',
    lead: 'Le subimos a la conversación, le pisamos al acelerador de las ideas y dejamos que la curiosidad nos lleve a lugares inesperados.',
    about: [
      {
        title: '¿De qué va este programa?',
        paragraphs: [
          'Súbele, Písale y a Ver Qué Pasa es un espacio para dejarse llevar por la curiosidad, abrir conversaciones inesperadas y explorar temas que despiertan preguntas, opiniones y nuevas formas de pensar.',
          'Aquí caben los debates, las reflexiones, las ocurrencias y esas pláticas que comienzan con una pregunta sencilla y terminan recorriendo caminos que nadie tenía previstos.',
        ],
      },
    ],
    highlights: [
      { title: 'Curiosidad', text: 'Preguntas y temas que invitan a descubrir algo nuevo y mirar las cosas desde otra perspectiva.' },
      { title: 'Debate', text: 'Opiniones diferentes, conversaciones abiertas e ideas que vale la pena poner sobre la mesa.' },
      { title: 'Sorpresa', text: 'Porque nunca sabemos dónde terminará una buena conversación ni qué descubriremos en el camino.' },
    ],
    extra: {
      title: 'Le subimos… le pisamos… ¡y a ver qué pasa!',
      paragraphs: [
        'No todas las conversaciones necesitan tener una respuesta definitiva. A veces basta con escuchar, cuestionar, reír, debatir y permitir que las ideas encuentren su propio camino.',
        'Súbele, Písale y a Ver Qué Pasa es una invitación a participar, pensar y guaguarear sin miedo a las sorpresas que pueda traer la charla.',
      ],
    },
    cta: { title: 'La conversación sigue', text: 'Descubre este y los demás programas de Guaguareando Ando.', action: 'programas' },
  },
  {
    slug: 'aventureando-ando',
    name: 'Aventureando Ando',
    tema: 'Viajes',
    kind: 'podcast',
    cover: aventureandoAndo,
    coverAjuste: { modo: 'recorte', posicion: 'top' },
    coverAlt: 'Portada de Aventureando Ando: dos personajes con maletas frente a monumentos del mundo, con letreros de destinos.',
    short: 'Viajes, ciudades, pueblos mágicos, gastronomía, cultura y esos pequeños detalles que hacen especial cada lugar.',
    lead: 'Desde una aventura llena de adrenalina hasta una caminata por Chapultepec: cada lugar tiene algo que descubrir y una historia que compartir.',
    about: [
      {
        title: 'Sobre el programa',
        paragraphs: [
          'Aventureando Ando es una invitación a explorar el mundo con curiosidad. Las aventuras no siempre requieren grandes viajes: pueden comenzar en un parque, en una calle desconocida o en ese rincón de nuestra ciudad que todavía no hemos visitado.',
          'Recorremos ciudades, países y pueblos mágicos para conocer sus atractivos, sus costumbres, su cultura y esos pequeños detalles que hacen que cada destino sea especial.',
        ],
      },
    ],
    highlights: [
      { title: 'Destinos', text: 'Exploramos lugares cercanos y lejanos, desde espacios urbanos hasta destinos llenos de naturaleza y aventura.' },
      { title: 'Sabores y cultura', text: 'Descubrimos gastronomía, costumbres, tradiciones y formas de vida que distinguen a cada comunidad.' },
      { title: 'Experiencias', text: 'Compartimos actividades, recomendaciones y experiencias para mirar cada salida como una oportunidad de descubrimiento.' },
    ],
    extra: {
      title: 'La aventura está más cerca de lo que imaginas',
      paragraphs: [
        'Podemos hablar de lanzarnos en paracaídas, conocer una ciudad nueva o pasar el día en Chapultepec. Lo importante es mantener los ojos abiertos y las ganas de descubrir.',
        'También nos interesan la economía local, las costumbres, la gastronomía y las pequeñas historias que permiten comprender mejor cada lugar y a quienes lo habitan.',
      ],
    },
    cta: { title: '¿Nos vamos de aventura?', text: 'Acompáñanos a conocer lugares, descubrir historias y explorar el mundo de otra manera.', action: 'programas' },
  },
  {
    slug: 'ecos-de-la-inclusion',
    name: 'Ecos de la Inclusión',
    tema: 'Inclusión',
    kind: 'podcast',
    cover: ecosInclusion,
    coverAlt: 'Portada de Ecos de la Inclusión: un hombre sentado en el piso junto a un niño, en un cuarto con corazones y un cuadro.',
    short: 'Historias invisibles, voces visibles. Experiencias reales que merecen ser escuchadas.',
    lead: 'Historias invisibles, voces visibles. Un espacio para escuchar experiencias, reconocer capacidades y descubrir las historias de quienes muchas veces no encuentran un lugar para expresarse.',
    about: [
      {
        title: 'Sobre el programa',
        paragraphs: [
          'Ecos de la Inclusión es un espacio para escuchar a personas con distintas capacidades, conocer sus experiencias y compartir historias que contribuyen a una sociedad más consciente, accesible y respetuosa.',
          'Aquí las personas son las protagonistas. Nos interesa su voz, su historia, sus retos, sus logros y su manera particular de vivir y comprender el mundo.',
        ],
      },
    ],
    highlights: [
      { title: 'Voces reales', text: 'Experiencias compartidas por sus protagonistas, con espacio para escuchar y aprender de cada historia.' },
      { title: 'Diversidad', text: 'Diferentes capacidades, perspectivas y experiencias que enriquecen nuestras comunidades.' },
      { title: 'Participación', text: 'Una invitación a reflexionar sobre las barreras y las oportunidades para construir espacios más inclusivos.' },
    ],
    extra: {
      title: 'Escuchar también transforma',
      paragraphs: [
        'La inclusión comienza cuando reconocemos a cada persona como alguien con voz propia, derechos, experiencias, aspiraciones y mucho que aportar.',
        'Este programa busca abrir conversaciones respetuosas, visibilizar realidades y contribuir a que más historias sean escuchadas sin prejuicios ni estereotipos.',
      ],
    },
    cta: { title: 'Todas las voces cuentan', text: 'Acompáñanos a escuchar, compartir y descubrir historias que nos acercan como comunidad.', action: 'programas' },
  },
  {
    slug: 'tecnologeando-ando',
    name: 'Tecnologeando Ando',
    tema: 'Tecnología',
    kind: 'podcast',
    cover: tecnologeandoAndo,
    coverAlt: 'Portada de Tecnologeando Ando: una mujer frente a una laptop rodeada de pantallas, celulares y luces de neón.',
    short: 'Tecnología, innovación, herramientas digitales y las nuevas formas en que la tecnología transforma nuestra vida.',
    lead: 'La tecnología está presente en casi todo lo que hacemos. En este espacio exploramos las ideas, herramientas y novedades que nos ayudan a comprender el mundo digital y sus posibilidades.',
    about: [
      {
        title: '¿De qué se trata?',
        paragraphs: [
          'Tecnologeando Ando es un espacio para conversar, descubrir y aprender sobre el universo tecnológico. Nos acercamos a las innovaciones y tendencias digitales con una mirada práctica, curiosa y accesible para todos.',
        ],
      },
      {
        title: 'La tecnología, más cerca de ti',
        paragraphs: [
          'Desde herramientas digitales e inteligencia artificial hasta seguridad en internet, aplicaciones, transformación digital y nuevos desarrollos, buscamos compartir información que despierte la curiosidad y ayude a entender cómo la tecnología influye en nuestra vida cotidiana.',
        ],
      },
      {
        title: 'Nuestro propósito',
        paragraphs: [
          'Creemos que la tecnología debe ser una oportunidad para aprender, crear y conectar. Por eso queremos acercar estos temas a nuestra comunidad mediante conversaciones, información y experiencias que permitan descubrir nuevas posibilidades.',
        ],
      },
    ],
    highlights: [
      { title: 'Innovación', text: 'Exploramos ideas y avances que están cambiando la manera en que vivimos y trabajamos.' },
      { title: 'Aprendizaje digital', text: 'Descubrimos herramientas y conocimientos para desenvolvernos mejor en el entorno digital.' },
      { title: 'Tecnología para todos', text: 'Compartimos temas tecnológicos con un lenguaje cercano, claro y pensado para nuestra comunidad.' },
    ],
    extra: {
      title: 'Nuestro aliado tecnológico',
      paragraphs: [
        'Detrás de una experiencia digital también hay tecnología, creatividad y trabajo constante. Siteccy es el creador y aliado tecnológico de Guaguareando Ando, acompañando el desarrollo de su presencia digital.',
      ],
      link: { label: 'Conoce a Siteccy', href: 'https://siteccy.com/' },
    },
    cta: { title: 'Sigue guaguareando', text: 'Descubre este y los demás programas de Guaguareando Ando.', action: 'programas' },
  },
  {
    slug: 'lo-que-callamos-los-maestros',
    name: 'Lo Que Callamos Los Maestros',
    tema: 'Educación',
    kind: 'podcast',
    cover: loQueCallamos,
    coverAlt: 'Portada de Lo Que Callamos Los Maestros: un maestro sobre un teclado gigante, con un sol y un globo terráqueo de fondo.',
    short: 'Educación desde la voz de quienes la viven todos los días: docentes, experiencias, retos y realidades.',
    lead: 'Detrás de cada aula hay historias, retos, aprendizajes y emociones que pocas veces se cuentan. Este espacio abre la conversación sobre las experiencias de quienes dedican su vida a la educación.',
    about: [
      {
        title: '¿De qué se trata?',
        paragraphs: [
          'Lo Que Callamos Los Maestros es un espacio para escuchar y reflexionar sobre las realidades de la labor docente. Más allá de los salones de clase, queremos acercarnos a las experiencias humanas que forman parte del trabajo educativo.',
        ],
      },
      {
        title: 'Historias que merecen ser escuchadas',
        paragraphs: [
          'La enseñanza implica grandes satisfacciones, pero también desafíos, responsabilidades y situaciones que no siempre encuentran un espacio para expresarse. Aquí tienen lugar las reflexiones sobre la convivencia escolar, los vínculos con estudiantes y familias, las dificultades cotidianas y los aprendizajes que deja cada experiencia.',
        ],
      },
      {
        title: 'Una conversación abierta y respetuosa',
        paragraphs: [
          'Buscamos promover el diálogo, reconocer la importancia de los docentes y compartir perspectivas que ayuden a comprender mejor el entorno educativo. Cada historia puede aportar una mirada distinta y abrir caminos para aprender en comunidad.',
        ],
      },
    ],
    highlights: [
      { title: 'Experiencias reales', text: 'Damos espacio a vivencias y aprendizajes de quienes conocen de cerca la educación.' },
      { title: 'Reflexión educativa', text: 'Conversamos sobre los retos, cambios y oportunidades del entorno escolar.' },
      { title: 'Voces que importan', text: 'Reconocemos la importancia de escuchar a los docentes con empatía y respeto.' },
    ],
    cta: {
      title: 'Tu historia también cuenta',
      text: 'Si eres docente y tienes una experiencia, reflexión o aprendizaje que quieras compartir, nos encantará conocerlo. Construyamos juntos conversaciones que aporten a la comunidad educativa.',
      action: 'contacto',
    },
  },
  {
    slug: 'deporteando-ando',
    name: 'Deporteando Ando',
    tema: 'Deporte',
    kind: 'podcast',
    cover: deporteandoAndo,
    coverAlt: 'Portada de Deporteando Ando: un personaje con mano de espuma gigante rodeado de balones y rayos.',
    short: 'Resultados, torneos, controversias, análisis y conversación alrededor del mundo deportivo.',
    lead: 'El deporte es mucho más que una competencia: es pasión, disciplina, esfuerzo y trabajo en equipo. En este espacio exploramos historias, protagonistas y acontecimientos que nos conectan a través de la actividad deportiva.',
    about: [
      {
        title: '¿De qué se trata?',
        paragraphs: [
          'Deporteando Ando es un espacio dedicado a conversar sobre el universo deportivo desde distintas perspectivas. Nos interesan las disciplinas, las competencias, los equipos, los atletas y las historias que hacen del deporte una experiencia que une a las personas.',
        ],
      },
      {
        title: 'Historias dentro y fuera de la cancha',
        paragraphs: [
          'Detrás de cada partido, entrenamiento y competencia hay preparación, sacrificio, decisiones y aprendizajes. Queremos acercarnos a esas historias y reconocer el esfuerzo de quienes practican, enseñan, acompañan y promueven el deporte en sus comunidades.',
        ],
      },
      {
        title: 'Pasión que nos conecta',
        paragraphs: [
          'Desde las grandes competencias hasta las iniciativas deportivas locales, creemos que el deporte puede inspirar, fortalecer vínculos y fomentar valores como el respeto, la constancia, la inclusión y el compañerismo.',
        ],
      },
    ],
    highlights: [
      { title: 'Actualidad deportiva', text: 'Conversaciones sobre disciplinas, competencias y temas relevantes del deporte.' },
      { title: 'Historias inspiradoras', text: 'Conocemos experiencias de atletas, equipos y comunidades deportivas.' },
      { title: 'Deporte para todos', text: 'Reconocemos el valor de la participación, la convivencia y la inclusión deportiva.' },
    ],
    cta: {
      title: '¡Hablemos de deporte!',
      text: '¿Tienes una historia deportiva, un proyecto comunitario o un tema que merece ser contado? Queremos conocerlo y seguir compartiendo historias que inspiran.',
      action: 'contacto',
    },
  },
  {
    slug: 'sobre-el-arcoiris',
    name: 'Sobre el Arcoíris',
    tema: 'Diversidad',
    kind: 'podcast',
    cover: sobreElArcoiris,
    coverAlt: 'Portada de Sobre el Arcoíris: un hombre con los brazos abiertos bajo un reflector, sobre fondo morado.',
    short: 'Cultura, vida cotidiana, relaciones, sociedad y diversidad desde una perspectiva LGBT+, con humor y conversación abierta.',
    lead: 'Un espacio para escuchar, aprender y conversar sobre la diversidad humana, las identidades, las experiencias y los caminos que nos permiten construir una sociedad más respetuosa e inclusiva.',
    about: [
      {
        title: '¿De qué se trata?',
        paragraphs: [
          'Sobre el Arcoíris es un espacio de encuentro donde las historias y las experiencias personales nos invitan a mirar más allá de los prejuicios. Queremos abrir conversaciones sobre diversidad, identidad, respeto y convivencia desde una mirada humana y cercana.',
        ],
      },
      {
        title: 'Escuchar para comprender',
        paragraphs: [
          'Cada persona tiene una historia que merece ser escuchada. A través del diálogo y el intercambio de experiencias, buscamos comprender distintas realidades, cuestionar estereotipos y reconocer el valor de tratar a los demás con dignidad.',
        ],
      },
      {
        title: 'Un espacio para todas las voces',
        paragraphs: [
          'Creemos que las conversaciones respetuosas ayudan a construir comunidades más conscientes. Por eso, este programa promueve la empatía, la participación y el reconocimiento de las diferencias como parte de nuestra convivencia.',
        ],
      },
    ],
    highlights: [
      { title: 'Diversidad', text: 'Reconocemos las distintas experiencias, identidades y formas de vivir.' },
      { title: 'Respeto', text: 'Promovemos conversaciones basadas en la empatía y el trato digno.' },
      { title: 'Historias compartidas', text: 'Escuchamos experiencias que pueden ayudarnos a aprender y comprender.' },
    ],
    cta: {
      title: 'Cada historia merece un espacio',
      text: 'Queremos seguir construyendo conversaciones que acerquen a las personas. Si tienes una experiencia o reflexión que quieras compartir, nos encantará escucharte.',
      action: 'contacto',
    },
  },
  {
    slug: 'rock-sobre-ruedas',
    name: 'Rock sobre Ruedas',
    tema: 'Rock',
    kind: 'musica',
    cover: rockSobreRuedas,
    coverAjuste: { modo: 'fondo', color: '#e2e6e9' },
    coverAlt: 'Portada de Rock sobre Ruedas con La Chicka Crüe: ilustración de una rockera con chamarra y medias de red.',
    short: 'La historia, los mitos y la rebeldía del rock and roll mexicano, desde sus pioneros hasta la escena contemporánea.',
    lead: 'El rock no es solo música: es actitud, historia, identidad y una forma de sentir. Súbete a este recorrido por los sonidos, las bandas y las historias que mantienen viva la pasión por el rock and roll.',
    about: [
      {
        title: '¿De qué se trata?',
        paragraphs: [
          'Rock sobre Ruedas es un espacio dedicado a recorrer el universo del rock y sus múltiples expresiones. Queremos compartir la música, las historias y los protagonistas que han dejado huella en distintas generaciones.',
        ],
      },
      {
        title: 'Mucho más que un género musical',
        paragraphs: [
          'Desde los clásicos que marcaron una época hasta las propuestas que siguen renovando la escena, exploramos bandas, artistas, álbumes, canciones y momentos importantes de la cultura rock. También hay espacio para descubrir influencias, sonidos y anécdotas que conectan a los amantes de la música.',
        ],
      },
      {
        title: 'Una pasión que sigue rodando',
        paragraphs: [
          'Cada canción puede traer un recuerdo, despertar una emoción o acercarnos a nuevas experiencias. Este programa busca celebrar esa conexión, compartir conocimiento musical y mantener viva la conversación entre quienes disfrutan del rock y su historia.',
        ],
      },
    ],
    highlights: [
      { title: 'Bandas y artistas', text: 'Descubrimos las trayectorias y aportes de quienes han marcado la historia del rock.' },
      { title: 'Historia y sonidos', text: 'Exploramos canciones, álbumes, estilos y momentos que transformaron la música.' },
      { title: 'Cultura rock', text: 'Compartimos la pasión, las anécdotas y las experiencias que unen a sus seguidores.' },
    ],
    cta: {
      title: '¡Que siga sonando el rock!',
      text: '¿Tienes una banda, una historia musical, una recomendación o un recuerdo ligado al rock? Queremos conocerlo y seguir compartiendo la música que nos conecta.',
      action: 'contacto',
    },
    live: { host: 'La Chicka Crüe', day: 'martes', time: '8:00 pm', where: 'YouTube' },
  },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);

/** estilos del <img> de la portada dentro de un marco cuadrado (ver `coverAjuste`) */
export const coverStyle = (p: Program): string => {
  const a = p.coverAjuste;
  if (a?.modo === 'fondo') return `object-fit: contain; background-color: ${a.color};`;
  return `object-fit: cover; object-position: ${a?.posicion ?? 'center'};`;
};

/** los 3 programas principales, son los unicos que salen en el inicio */
export const featuredSlugs = ['subele-pisale-y-a-ver-que-pasa', 'entre-guitarras-y-guitarristas', 'tecnologeando-ando'];
