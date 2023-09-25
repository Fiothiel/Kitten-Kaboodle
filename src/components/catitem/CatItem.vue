<template>
  <div class="cat-item">
    <img v-if="imageReference" :src="`https://cdn2.thecatapi.com/images/${imageReference}.jpg`" />
    <div class="cat-item__text">
      <div class="cat-item__name">{{ name }}</div>
      <div>{{ origin }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  imageReference: string | null;
  name: string;
  origin: string;
}>();

</script>