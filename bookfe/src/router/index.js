import { createRouter, createWebHashHistory } from 'vue-router';
//import Home from '../views/Home.vue';

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/auth/index.vue'),
  },
  {
    path: '/',
    name: 'BasiclLayout',
    component: () => import(/* webpackChunkName: "BasiclLayout" */ '../layout/BasiclLayout/index.vue'),
    children:[{
      path: 'books',
      name: 'books',
      component: () => import(/* webpackChunkName: "auth" */ '../views/books/index.vue'),
      
    },{
      path: 'users',
      name: 'users',
      component: () => import(/* webpackChunkName: "auth" */ '../views/users/index.vue'),
    }]
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
