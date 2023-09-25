import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/home/Home.vue';
import Breeds from './pages/breeds/Breeds.vue';
import Details from './pages/details/Details.vue';

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
    {
      name: "Details",
      path: "/details/:id",
      component: Details,
      props: true
    }
  ],
});

export default router;