import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), mdx(), react(), svelte()],
  markdown: {
    remarkPlugins: [
      remarkMath,
    ],
    rehypePlugins: [
      rehypeMathjax,
    ],
    shikiConfig: {
      themes: {
        light: 'github-light',
      },
    }
  }
});