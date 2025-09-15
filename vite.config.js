import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import {BootstrapVueNextResolver} from 'bootstrap-vue-next/resolvers'
import IconsResolve from 'unplugin-icons/resolver'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextResolver(), IconsResolve()],
      dts: true,
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'NAK Süd Stream',
        short_name: 'NAK Stream',
        description: 'Livestream und Veranstaltungen der NAK Süd',
        theme_color: '#5793c9',
        icons: [
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/assets/scss/custom-vars.scss";`
      }
    }
  }
})
