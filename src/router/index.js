// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/exer',
        name: 'Exer',
        component: () => import('@/views/Exer.vue'),
        children: [
          {
            path: '',
            name: 'ExerType0',
            component: () => import('@/components/exertype/ExerType0.vue'),
          },
          {
            path: 'type1',
            name: 'ExerType1',
            component: () => import('@/components/exertype/ExerType1.vue'),
          },
          {
            path: 'type2',
            name: 'ExerType2',
            component: () => import('@/components/exertype/ExerType2.vue'),
          },
          {
            path: 'type3',
            name: 'ExerType3',
            component: () => import('@/components/exertype/ExerType3.vue'),
          },
        ],
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      },
    ],
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
