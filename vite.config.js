import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      extensions: ['.vue'],
      routesFolder: 'src/pages',
      exclude: ['src/pages/**/components/**'],
      dts: false,
    }),
    vue(),
  ],
})
