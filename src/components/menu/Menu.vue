<template>
  <nav>
      <ul>
        <li v-for="(route, index) in router.options.routes" :key="index">
          <router-link v-if="route.name !== 'Details'" :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>