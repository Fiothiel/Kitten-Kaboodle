<template>
  <nav>
      <ul>
        <li v-for="(route, index) in router.options.routes" :key="index">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
</script>