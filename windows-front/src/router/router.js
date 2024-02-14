import { createRouter, createWebHashHistory  } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        name: 'home',
        path: '/',
        component: 'WallPaper'
    }],
})