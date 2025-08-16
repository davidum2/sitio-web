// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // CAMBIO CLAVE: El sitio ahora es tu dominio personalizado.
  site: 'https://senderozen.com',

  // CAMBIO CLAVE: Ya no necesitamos la propiedad 'base' al usar un dominio raíz.
  // base: '/sitio-web',  <-- Elimina o comenta esta línea.
});
