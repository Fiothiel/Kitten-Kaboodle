<template>    
    <div class="cat-image" :style="`background-image: url('${url}')`">
        <Loader v-if="loading" />
        <div v-if="!url" class="cat-image__placeholder">
            <p>No cat here :(</p>
            <p>Click for cat!</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Loader from '../loader/Loader.vue';

defineProps<{
    url: string,
    loading: boolean
}>();
</script>