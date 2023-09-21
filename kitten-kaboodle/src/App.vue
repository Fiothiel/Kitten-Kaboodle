<template>
    <div class="kitten-kaboodle">
        <Header />
        <Menu />
        <main class="kitten-kaboodle__content">
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import Menu from './components/menu/Menu.vue'
import Header from './components/header/Header.vue'
import { onBeforeMount } from 'vue'
import { useCatService } from './services/cat-service';

const { getAndSaveBreeds } = useCatService();

onBeforeMount(() => {
    getAndSaveBreeds();
});

</script>

<style lang="scss"> // the main file that imports everything related with styles
 @import './styles/main.scss';
</style>