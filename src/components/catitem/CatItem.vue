<template>
  <div class="cat-item">
    <img :src="`https://cdn2.thecatapi.com/images/${imageReference}.jpg`" />
    <span>{{ name }}</span>
    <span>{{ origin }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

defineProps<{
  imageReference: string;
  name: string;
  origin: string;
}>();

</script>