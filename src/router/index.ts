import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

// Use a string as the base URL directly instead of relying on process.env.BASE_URL
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory('/'), // Change this to '/' if you don't have a base path
  routes
});

export default router;
