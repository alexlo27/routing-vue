import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/contact',
    name: 'conact',
    component: ContactView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/blog/:id(\\d+)', // expresion regular para numero
    name: 'post',
    component: PostView
  },
  {
    path: '/alexlo', // ingresara si el id es cadena // el ? significa que el dato es opcional
    redirect: {name: 'about'}
  },
  {
    path: '/blog/:id?', // ingresara si el id es cadena // el ? significa que el dato es opcional
    name: 'post',
    component: PostView
  },
  {
    path: '/users/:userId(\\d+)?', 
    name: 'users',
    component: () => import('@/views/UsersView.vue'),
    props: true, //cual dato pasado por la ruta se pasa como prop
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: ()=> import('@/views/users/ProfileView.vue')
      },
      {
        path: 'courses',
        name: 'courses',
        component: ()=> import('@/views/users/CoursesView.vue')
      }
      
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
