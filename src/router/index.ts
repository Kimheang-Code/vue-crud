import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/blogs/Home.vue';
import About from '../views/blogs/about.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
