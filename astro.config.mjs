import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  site: 'https://davidum2.github.io',
  // Reemplaza <el-nombre-de-tu-repo> con el nombre de tu repositorio
  base: '/sitio-web',
});
