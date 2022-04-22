import Vue from 'vue'
import VueRouter from 'vue-router'
import Portfolio from "@/views/Portfolio";
import Projects from "@/views/Projects";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'portfolio',
    component: Portfolio,
  },
  {
    name: 'projects',
    path: '/projects',
    component:Projects,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
