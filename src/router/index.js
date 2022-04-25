import Vue from 'vue'
import VueRouter from 'vue-router'
import Portfolio from "@/views/Portfolio";
import Projects from "@/views/Projects";
import Blog from "@/views/Blog/Blog";
import ManageBlog from "@/views/Blog/ManageBlog";

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
  },
  {
    name: 'blog',
    path: '/blog',
    component:Blog,
  },
  {
    name: 'manage-blog',
    path: '/manage-blog',
    component:ManageBlog,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
