import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { seo } from './scripts/seo';
import { aiContext } from './scripts/ai-context';

export default defineConfig({
  plugins: [react(), tailwindcss(), seo(), aiContext()],
});
