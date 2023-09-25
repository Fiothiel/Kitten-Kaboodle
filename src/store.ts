import { defineStore } from 'pinia';
import { computed, Ref, ref } from 'vue';
import { IBreed } from './interfaces/IBreed';
import { IWeight } from './interfaces/IWeight';

export const useStore = defineStore('store', () => {
  const startCatImageUrl = ref('');
  const breeds = ref([] as IBreed[]);
  const selectedBreed: Ref<IBreed> = ref({
    weight: {} as IWeight,
    id: "",
    name: "",
    cfa_url: "",
    vetstreet_url: "",
    vcahospitals_url: "",
    temperament: "",
    origin: "",
    country_codes: "",
    country_code: "",
    description: "",
    life_span: "",
    indoor: 0,
    lap: 0,
    alt_names: "",
    adaptability: 0,
    affection_level: 0,
    child_friendly: 0,
    dog_friendly: 0,
    energy_level: 0,
    grooming: 0,
    health_issues: 0,
    intelligence: 0,
    shedding_level: 0,
    social_needs: 0,
    stranger_friendly: 0,
    vocalisation: 0,
    experimental: 0,
    hairless: 0,
    natural: 0,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: "",
    hypoallergenic: 0,
    reference_image_id: "",
    cat_friendly: 0,
    bidability: 0,
  });

  // Actions
  const saveBreeds = (incomingBreeds: IBreed[]) => {
    breeds.value = incomingBreeds;
  };

  const setSelectedBreed = (breed: IBreed) => {    
    selectedBreed.value = breed;
  };

  // Getter
  const getSelectedBreed = computed(() => selectedBreed.value);

  return {
    startCatImageUrl,
    breeds,
    selectedBreed,
    saveBreeds,
    setSelectedBreed,
    getSelectedBreed    
  }
})