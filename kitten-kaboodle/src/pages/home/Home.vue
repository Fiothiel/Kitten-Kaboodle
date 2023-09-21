<template>
  <div class="home">
<!--     <ImageDisplay :loading="loading" :url="catUrl" />
    <button class="button" @click="getCat()">Get cat</button> -->
  </div>
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