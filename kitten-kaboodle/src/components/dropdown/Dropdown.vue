<template>
    <div class="dropdown">
        <label :for="id">{{ label }}</label>
        <select :name="id" :id="id" @change="onChange($event)">
            <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IOption } from '../../interfaces/IOption';

defineProps<{
    label: string,
    id: string,
    options: IOption[]
}>();

const emit = defineEmits(['select']);

const onChange = (event: any) => {
    emit('select', event.target.value);
}

</script>