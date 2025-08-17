import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      exportAsDefault: false, // включаем именованные экспорты
      include: '**/*.svg'    // обрабатываем все SVG
    }),
    react() 
  ]
});
