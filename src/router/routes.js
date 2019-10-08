export const routes = [
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue'),
  },
  {
    path: '/car',
    name: 'car',
    component: () => import('../views/Car.vue'),
  },
]
