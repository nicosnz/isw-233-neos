import { defineConfig } from 'vite'
import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars'
export default defineConfig({
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
   plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context: {
      siteName: 'Emanuel Oly',
      year: new Date().getFullYear(),
    }
    })
  ],
  build: {
    outDir: '../dist',
  },
})