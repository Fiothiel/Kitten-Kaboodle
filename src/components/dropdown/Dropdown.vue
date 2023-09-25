<template>
    <div class="dropdown">
        <label :for="id">{{ label }}</label>
        <select :name="id" :id="id" @change="onChange($event)" v-model="value">
            <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IOption } from '../../interfaces/IOption';

const props = defineProps<{
    modelValue: string,
    label: string,
    id: string,
    options: IOption[]
}>();

const emit = defineEmits(['update:modelValue']);
let value = ref(props.modelValue);

const onChange = (event: any) => {
   emit('update:modelValue', event.target.value);
}

</script>