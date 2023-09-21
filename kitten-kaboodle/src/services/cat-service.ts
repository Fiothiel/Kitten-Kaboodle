
import { ref } from 'vue';
import { useStore } from '../store';
import { useApi } from './api-service';
import { IBreed } from '../interfaces/IBreed';

export const useCatService = () => {
  const { get: getBreeds } = useApi('/breeds');

  const getAndSaveBreeds = () => {
    getBreeds<IBreed[]>().then((response) => {
      useStore().saveBreeds(response);
    })
    .catch((error) => {
      console.log("Awh shoot");
    })
  };

    return {
      getAndSaveBreeds
    }
}