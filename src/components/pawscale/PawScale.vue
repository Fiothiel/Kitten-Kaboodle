<template>
    <div class="paw-scale">
        <label>{{ label }}:</label>
        <div class="paw-scale__paws">
            <Paw v-for="i in parseInt(value)" :key="`filled-${i}`" />
            <Paw v-for="j in blankPaws" :key="`empty-${j}`" :white="true" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Paw from "../../components/paws/Paw.vue";

const props = defineProps<{
    label: string;
    value: string;
}>();

const blankPaws = ref(5 - parseInt(props.value));
</script>