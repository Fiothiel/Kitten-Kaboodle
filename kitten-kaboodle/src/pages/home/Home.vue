<template>
  <section class="home">
    <h1>Feeling down?</h1>
    <p>Click the button to get a random cat, it will 100% cheer you up. Purr!</p>
    <button class="button" @click="getCat()">Get cat</button>
    <ImageDisplay :loading="loading" :url="catUrl" />

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useApi } from '../../services/api-service';
import { ICatImage } from '../../interfaces/IRandomCatResponse';
import ImageDisplay from '../../components/imagedisplay/ImageDisplay.vue'

const { get, loading } = useApi('/images/search');
//const { getCatUrl, loading } = useCatService();
const catUrl = ref('');

const getCat = () => {
  get<ICatImage[]>().then((response) => {
    catUrl.value = response[0]?.url;
  });
}

</script>