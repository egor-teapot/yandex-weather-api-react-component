import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  // Vite настройка сервера
  // https://vitejs.dev/config/server-options.html
  server: {
    // работа с прокси
    // https://stackoverflow.com/questions/35588699/response-to-preflight-request-doesnt-pass-access-control-check
    proxy: {
      '/api': {
        target: 'https://api.weather.yandex.ru/v2/forecast?lat=55.75396&lon=37.620393&extra=false',
        changeOrigin: true,
      }
    }
  },
  plugins: [react()],
})
