import axios from 'axios'

export const apiKey = import.meta.env.VITE_API_KEY
const movieURL = <string>import.meta.env.VITE_API

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
})

export { api }
