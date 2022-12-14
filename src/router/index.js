import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import Home from '../views/client/HomeClient.vue'
const routes = [
    { path: '/',name: 'Home',component: Home},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router