<template>
    <div class="cat-app">
        <h1>Kitten Kaboodle</h1>
        <div class="cat-app__content">
            <main>
                <ImageDisplay :loading="loading" :url="catUrl" />
            </main>
            <aside>
                <button class="button" @click="getCat()">Get cat</button>
            </aside>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useApi } from './services/api-service';
import { ref } from 'vue';
import { ICatImage } from './interfaces/IRandomCatResponse';

import BreedSelector from './components/BreedSelector.vue'
import Button from './components/button/Button.vue'
import ImageDisplay from './components/imagedisplay/ImageDisplay.vue'

const { get, loading } = useApi();
const catUrl = ref('');

const getCat = () => {
    catUrl.value = '';
    get<ICatImage[]>().then((response) => {
        console.log(response);
        console.log(response[0]);
        catUrl.value = response[0]?.url;
    });
}

</script>

<style lang="scss"> // the main file that imports everything related with styles
 @import './styles/main.scss';
</style>