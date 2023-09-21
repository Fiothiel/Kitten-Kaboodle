<template>
    <div class="cat-app kitten-kaboodle">
        <Header />
        <Menu />
        <main class="cat-app__content">
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import { useApi } from './services/api-service';
import { ref } from 'vue';
import { ICatImage } from './interfaces/IRandomCatResponse';

import Menu from './components/menu/Menu.vue'
import Header from './components/header/Header.vue'
import ImageDisplay from './components/imagedisplay/ImageDisplay.vue'
import Paws from './components/paws/Paws.vue'
import { useCatService } from './services/cat-service';


</script>

<style lang="scss"> // the main file that imports everything related with styles
 @import './styles/main.scss';
</style>