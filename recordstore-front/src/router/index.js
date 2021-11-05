import { createRouter, createWebHistory } from 'vue-router'
import Signin from '../components/Signin.vue'
import Signup from '../components/Signup.vue'
import Records from '../components/records/Records.vue'
import Artists from '../components/artists/Artists.vue'



const routes = [
  {
    path: '/artists',
    name: 'Artists',
    component: Artists
  },
  {
    path: '/records',
    name: 'Records',
    component: Records
  },
  {
    path: '/',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
