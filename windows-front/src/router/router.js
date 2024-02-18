import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import WallPaper from '/src/components/WallPaper.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        name: 'home',
        path: '/',
        component: WallPaper
    }],
})
export default router;