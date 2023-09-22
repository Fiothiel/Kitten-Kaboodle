<template>
  <section class="breeds">
    <h1>Find out more</h1>
    <Dropdown id="breed-selector" label="Pick a breed" :options="options" @select="onSelect" />
    <div>
      <span>Selected breed:</span> {{ store.getSelectedBreed }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCatService } from '../../services/cat-service';
import { useStore } from '../../store';
import { IBreed } from '../../interfaces/IBreed';
import Dropdown from '../../components/dropdown/Dropdown.vue'

const { getBreed } = useCatService();

const store = useStore();

const breeds = computed(() => store.breeds);

const options = computed(() => {
  return breeds?.value?.map((breed) => ({
    label: breed.name,
    value: breed.id
  }));
});

const onSelect = (value: string) => {
  const breed = getBreed(value);  
  if (breed) {
    store.setSelectedBreed(breed);
  }  
}

defineProps<{ msg: string }>()
</script>