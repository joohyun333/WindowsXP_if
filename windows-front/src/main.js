import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from "/src/store/store"
import router from './router/router'

createApp(App).use(store).use(router).mount('#app')
