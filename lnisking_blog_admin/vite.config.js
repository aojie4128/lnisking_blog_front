import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// element-plus配置
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// svg-icons配置
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // element-plus配置
    autoImport({
      resolvers: [ElementPlusResolver()],
    }),
    components({
      resolvers: [ElementPlusResolver()],
    }),
    // svg-icons配置
    createSvgIconsPlugin({
      iconDirs: [fileURLToPath(new URL('./src/assets/icons', import.meta.url))],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 5175
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: `@use "@/styles/variable.scss" as *;`
      }
    }
  }
})
