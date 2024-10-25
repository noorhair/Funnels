import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react(), ViteMinifyPlugin({})],
  css: {
    postcss: {
      plugins: [
        autoprefixer({})
      ],
    }
  },
  base: "/love-serum",
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@fonts', replacement: path.resolve(__dirname, './src/assets/fonts') },
      { find: '@images', replacement: path.resolve(__dirname, './src/assets/images') },
      { find: '@sprites', replacement: path.resolve(__dirname, './src/assets/sprites/sprite.svg') },
      { find: '@ui', replacement: path.resolve(__dirname, './src/ui') },
      { find: '@logic', replacement: path.resolve(__dirname, './src/logic') },
      { find: '@mixins', replacement: path.resolve(__dirname, './src/styles/_mixins.scss') },
      { find: '@sassVariables', replacement: path.resolve(__dirname, './src/styles/_variables.scss') },
    ],
  },
})
