import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Main from '../views/Main.vue'
import Edit from '../views/Edit.vue'

const routes = [{
  path: '/',
  name: 'main',
  component: Main
}, {
  path: '/edit/:id',
  name: 'edit',
  component: Edit
}, ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router