import { createRouter, createWebHistory } from 'vue-router'
import Loginview from"../views/LoginView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
{
  path:"/login",
  name:"LoginView",
  componemt:LoginView
}

  ]
})

export default router
