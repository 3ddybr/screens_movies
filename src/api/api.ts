import axios from 'axios'

export const apiKey = import.meta.env.VITE_API_KEY
export const movieURL = <string>import.meta.env.VITE_API
export const urlImg500 = import.meta.env.VITE_IMG

const api = axios.create({
  baseURL: movieURL,
})

export { api }
