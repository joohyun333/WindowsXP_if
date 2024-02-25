import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/router'
import UUID from "vue3-uuid";

const pinia = createPinia()
createApp(App)
    .use(router)
    .use(pinia)
    .use(UUID)
    .mount('#app')
