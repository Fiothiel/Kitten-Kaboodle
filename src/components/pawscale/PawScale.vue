<template>
    <div class="paw-scale">
        <label>{{ label }}:</label>
        <div class="paw-scale__paws">
            <Paw v-for="i in value" :key="`filled-${i}`" :white="false" />
            <Paw v-for="j in blankPaws" :key="`empty-${j}`" :white="true" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Paw from "../../components/paws/Paw.vue";

const props = defineProps<{
    label: string;
    value: number;
}>();

const blankPaws = computed(() => 5 - props.value);
</script>