import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
// import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  integrations: [tailwind(), react(), mdx(), compressor(),pagefind()]
});