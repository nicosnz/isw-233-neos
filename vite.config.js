import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
   plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    })
  ],
  build: {
    outDir: '../dist',
  },
})