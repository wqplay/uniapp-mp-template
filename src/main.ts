import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

const store = createPinia()
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  return {
    app,
  }
}
