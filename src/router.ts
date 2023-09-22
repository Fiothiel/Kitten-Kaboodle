import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/home/Home.vue';
import Breeds from './pages/breeds/Breeds.vue';
 const  router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",      
      component: Home,      
    },
    {
      name: "By breed",
      path: "/breeds",
      component: Breeds,
    },
  ],
});

export default router;