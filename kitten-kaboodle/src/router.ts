import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/home/Home.vue';
import Breed from './pages/breed/Breed.vue';
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
      path: "/breed",
      component: Breed,
    },
  ],
});

export default router;