<template>
  <article class="details">
    <h1>{{ cat?.name }}</h1>
    <img :src="`https://cdn2.thecatapi.com/images/${cat?.reference_image_id}.jpg`" />
    <p>{{ cat?.description }}</p>
    <div class="details__characteristics">
      <h2>Characteristics</h2>
      <PawScale label="Child friendly" :value="cat?.child_friendly ?? 0" />
      <PawScale label="Dog friendly" :value="cat?.dog_friendly ?? 0" />
      <PawScale label="Stranger friendly" :value="cat?.stranger_friendly ?? 0" />
      <PawScale label="Energy level" :value="cat?.energy_level ?? 0" />
      <PawScale label="Shedding level" :value="cat?.shedding_level ?? 0" />
      <PawScale label="Affection level" :value="cat?.affection_level ?? 0" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, computed, ComputedRef } from "vue";
import PawScale from "../../components/pawscale/PawScale.vue";
import { IBreed } from "../../interfaces/IBreed";
import { useCatService } from "../../services/cat-service";

const { getBreed } = useCatService();

const props = defineProps<{
  id: string;
}>();

const cat: ComputedRef<IBreed|null> = computed(() => getBreed(props.id));

</script>