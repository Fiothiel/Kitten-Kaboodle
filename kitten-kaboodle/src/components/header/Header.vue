<template>
  <header>
    <h1>Kitten Kaboodle</h1>
    <img src="../../assets/images/headercat.jpg" />    
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useApi } from '../../services/api-service';
import { ICatImage } from '../../interfaces/IRandomCatResponse';
import ImageDisplay from '../../components/imagedisplay/ImageDisplay.vue'

const { get, loading } = useApi('/images/search');
//const { getCatUrl, loading } = useCatService();
const catUrl = ref('');



</script>