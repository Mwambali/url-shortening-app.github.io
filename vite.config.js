import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import windiCSS from 'vite-plugin-windicss'
import VitePluginGhPages from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [react(), windiCSS(), VitePluginGhPages],
  base: '/url-shortening-app.github.io/'
})
