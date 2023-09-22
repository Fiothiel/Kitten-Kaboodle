<template>    
    <div class="image">
        <img v-if="url" :src="url"/>
 
        <div v-if="loading" class="image__loader">
            <Loader />
        </div>
        <div v-if="!url && !loading" class="image__placeholder">
            <div>No cat here :(</div>
            <div>Go get a cat!</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Loader from '../loader/Loader.vue';

defineProps<{
    url: string,
    loading: boolean
}>();
</script>