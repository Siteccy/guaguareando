# Guaguareando Ando

Sitio de [guaguareandoando.com](https://guaguareandoando.com): podcast, canal de YouTube, revista digital y música desde la Ciudad de México. *GUAGUAREANDO… ANDO! porque todos tenemos algo que decir.*

Hecho con [Astro 6](https://astro.build) (sitio estático, sin backend). Se publica en Netlify automáticamente con cada cambio en `main`; la configuración de build y las redirecciones están en `netlify.toml`.

## Comandos

Requiere Node 22.

| Comando | Qué hace |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en `http://localhost:4321` |
| `npm run build` | Genera el sitio en `dist/` |
| `npm run preview` | Sirve `dist/` para revisarlo antes de publicar |

## Dónde está cada cosa

```
src/
  data/site.ts        correo, WhatsApp, redes, Spotify, YouTube, menú
  data/programs.ts    los 13 programas (textos, portadas, programas del inicio)
  data/revistas.ts    ediciones de la revista
  data/pautas.ts      formatos de pauta de /anunciate
  assets/             imágenes (se optimizan solas a AVIF/WebP)
  components/         piezas reutilizables (.astro)
  pages/              una página por archivo
  styles/tokens.css   colores, tipografía y espacios
public/               favicon, imagen para redes, robots.txt
scripts/og.html       plantilla de la imagen para redes
```

## Tareas comunes

### Agregar una edición de la revista
1. Descarga la portada: `https://online.fliphtml5.com/Guaguareandoando/<id>/files/shot.jpg` y guárdala como `src/assets/revista/revista-<NN>.jpg`.
2. En `src/data/revistas.ts`, importa la portada y agrega una entrada con el número siguiente, el título, la bajada y el `fliphtml5Id`.
3. La edición con el número más alto aparece sola como "edición actual" en el inicio y en `/revista`, y obtiene su página `/revista/edicion-<n>`.

### Agregar un programa
1. Guarda la portada en `src/assets/programas/<slug>.jpg` (≥ 1000 px, sin espacios ni acentos en el nombre).
2. Agrega un objeto en `src/data/programs.ts`. El orden del arreglo es el orden en el sitio.
3. Para cambiar los 3 programas del inicio, edita `featuredSlugs` en el mismo archivo.

### Cambiar la canción (la rola)
1. Pon el MP3 en `public/audio/`.
2. En `src/data/site.ts`, actualiza `rola` (título, ruta `src` y duración en `m:ss`). La tarjeta del inicio, el aviso del hero y los reproductores la toman de ahí. La duración solo se muestra antes de darle play; después el reproductor usa la del archivo.
3. El volumen arranca al 50 % (`VOLUMEN_INICIAL` en `src/components/RolaPlayer.astro`).

### Cambiar correo, WhatsApp o redes
Edita `src/data/site.ts`. Los cambios se reflejan en el footer, en `/contacto` y en `/anunciate`.

### Imagen para redes (Open Graph)
`public/og-guaguareando.png` (1200×630) sale de `scripts/og.html`. Para regenerarla:
1. `npm run build` (la plantilla usa las fuentes de `dist/_astro/fonts/`; si cambian los nombres de esos archivos, actualízalos en la plantilla).
2. Desde la raíz del repo:
   ```
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --hide-scrollbars --force-device-scale-factor=1 --allow-file-access-from-files --window-size=1200,630 --screenshot="%CD%\public\og-guaguareando.png" "file:///%CD:\=/%/scripts/og.html"
   ```

## Marca
Colores, tipografía, uso del logo y tono de voz: ver `MARCA.md`.

Aliado tecnológico: [Siteccy](https://siteccy.com/).
