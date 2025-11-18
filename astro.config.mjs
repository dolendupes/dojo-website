import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// Determine if we're building for GitHub Pages or production
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGitHubPages 
    ? 'https://dolendupes.github.io' 
    : 'https://dojotampa.com',
  base: isGitHubPages 
    ? '/dojo-website/' 
    : '/',
  integrations: [
    mdx(),
    sitemap(),
    tailwind()
  ],
  output: 'static',
  build: {
    format: 'directory'
  }
});
