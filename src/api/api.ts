import axios from 'axios'

export const apiKey = import.meta.env.VITE_API_KEY
export const movieURL = <string>import.meta.env.VITE_API
export const urlImg500 = import.meta.env.VITE_IMG
// export const searchURL = import.meta.env.VITE_SEARCH

const api = axios.create({
  baseURL: movieURL,
  params: {
    api_key: apiKey,
    language: 'pt-BR',
  },
})

const apiSearch = axios.create({
  baseURL: `${movieURL}/search`,
  params: {
    api_key: apiKey,
    language: 'pt-BR',
  },
})

export { api, apiSearch }
