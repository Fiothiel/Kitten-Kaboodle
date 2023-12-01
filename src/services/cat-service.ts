
import { computed } from 'vue';
import { useStore } from '../store';
import { useApi } from './api-service';
import { IBreed } from '../interfaces/IBreed';

export const useCatService = () => {
  const { get: getBreeds } = useApi('/breeds');
  const breeds = computed(() => useStore().breeds);

  const getAndSaveBreeds = () => {
    getBreeds<IBreed[]>().then((response) => {      
       useStore().saveBreeds(response);
    })
    .catch((error) => {
      console.log("Awh shoot: ", error);
    })
  };

  const getBreed = (id: string): IBreed | null => {
    const foundBreed = breeds?.value.find((breed: IBreed) => breed.id === id);
    return foundBreed || null; // Return null if no breed is found
  };

    return {
      getAndSaveBreeds,
      getBreed
    }
}