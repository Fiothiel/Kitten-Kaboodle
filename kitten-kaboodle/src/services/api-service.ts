import axios, { AxiosRequestConfig } from 'axios';
import { ref } from 'vue';

export const useApi = () => {
    const api = axios.create({
        baseURL: 'https://api.thecatapi.com/v1/images/search',        
        headers: {
        'x-api-key': 'live_HpWp7hv7mqbfUOxORGvNtolgyXaiS8FoRRkx5w7l1vLdhQW3uhIJZs2XadWYsaXO' 
    }
  });
    
  const loading = ref(false);
  
    const get = <T>(id?: number, query?: Record<string, any>, config?: AxiosRequestConfig): Promise<T> => {
      loading.value = true;
  
        let queryString = '';
  
      if (query) {
          queryString = '?' + Object.entries(query)
              .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
              .join('&');
      }
  
      let completeUrl = '';
      if (id)
      {
        completeUrl += '/' + id;
      }
  
      return api.get(completeUrl + queryString, config)
        .then(response => response.data as T)
        .catch(handleError<T>)
        .finally(() => loading.value = false);
        }

    const handleError = <T>(error: any): Promise<T> => {
      if(error.code === 'ERR_NETWORK')
      {
        location.reload();
      }
      
      return Promise.reject(error?.response?.data || error.message || error);
    } 

    return {
      get,
      loading
    }
}