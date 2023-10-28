import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
// import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()]
});