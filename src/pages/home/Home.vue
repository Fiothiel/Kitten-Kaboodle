<template>
  <section class="home">
    <h1>Feeling down?</h1>
    <p>Click the button to get a random cat, it will 100% cheer you up. Purr!</p>
    <button class="button" @click="getCat()">Get cat</button>
    <ImageDisplay :loading="loading" :url="catUrl" />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useApi } from '../../services/api-service';
import { useStore } from '../../store';
import { ICatImage } from '../../interfaces/IRandomCatResponse';
import ImageDisplay from '../../components/imagedisplay/ImageDisplay.vue'

const store = useStore();
const { get, loading } = useApi('/images/search');
const catUrl = computed(() => store.startCatImageUrl);

const getCat = () => {
  get<ICatImage[]>().then((response) => {
    store.startCatImageUrl = response[0]?.url;
  });
}

</script>