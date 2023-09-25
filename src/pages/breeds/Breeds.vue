<template>
  <section class="breeds">
    <h1>Find out more</h1>
    <Dropdown id="breed-selector" label="Pick a breed" :options="options" @select="onSelect" />
    <router-link :to="`/details/${selectedBreed.id}`" v-if="selectedBreed.id !== ''">
      <CatItem :imageReference="selectedBreed?.reference_image_id ?? null" :name="selectedBreed.name"
        :origin="selectedBreed.origin" />
    </router-link>

  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useCatService } from "../../services/cat-service";
import { useStore } from "../../store";
import CatItem from "../../components/catitem/CatItem.vue";
import Dropdown from "../../components/dropdown/Dropdown.vue";

const { getBreed } = useCatService();

const store = useStore();
const breeds = computed(() => store.breeds);
const selectedBreed = computed(() => store.getSelectedBreed);

const options = computed(() => {
  return breeds?.value?.map((breed) => ({
    label: breed.name,
    value: breed.id,
  }));
});

const onSelect = (value: string) => {
  const breed = getBreed(value);
  if (breed) {
    store.setSelectedBreed(breed);
  }
};

defineProps<{ msg: string }>();
</script>