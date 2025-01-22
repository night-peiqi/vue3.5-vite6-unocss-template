import path from 'node:path'
import process from 'node:process'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import pxToViewport from 'postcss-px-to-viewport-8-plugin'
import UnoCSS from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { loadEnv } from 'vite'
import { exclude, include } from './config/optimize'

// https://vite.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: env.VITE_APP_PUBLIC_PATH,
    plugins: [
      VueRouter({
        extensions: ['.vue'],
        routesFolder: 'src/pages',
        exclude: ['src/pages/**/components/**'],
        dts: false,
      }),
      vue(),
      UnoCSS(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxToViewport({
            viewportWidth: 1920,
            landscapeWidth: 1920,
            propList: ['*'],
            exclude: [/node_modules/],
            viewportUnit: 'rem',
            fontViewportUnit: 'rem',
            mediaQuery: true,
          }),
        ],
      },
    },
    server: {
      host: true,
      port: 3000,
      proxy: {
        '/api': {
          target: '',
          ws: false,
          changeOrigin: true,
        },
      },
    },
    build: {
      cssCodeSplit: false,
      chunkSizeWarningLimit: 2048,
      outDir: env.VITE_APP_OUT_DIR || 'dist',
    },
    // 依赖预构建（Dependency Pre-Bundling）
    // Vite 在开发环境下会对依赖进行预构建，以提高开发服务器的启动速度和页面加载速度。
    optimizeDeps: { include, exclude },
  }
}
