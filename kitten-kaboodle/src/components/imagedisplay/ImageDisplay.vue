<template>    
<!--     <div class="image-wrapper">
        <div v-if="url" class="image-wrapper__image" :style="`background-image: url('${url}')`"/>
        <div v-if="loading" class="image-wrapper__loader">
            <Loader />
        </div>        
        <div v-if="!url && !loading" class="image-wrapper__placeholder">
            <div>No cat here :(</div>
            <div>Go get a cat!</div>
        </div>
    </div> -->
</template>

<script setup lang="ts">
import Loader from '../loader/Loader.vue';

defineProps<{
    url: string,
    loading: boolean
}>();
</script>