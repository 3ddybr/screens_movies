export type DataProps = {
  id: number
  title: string
  backdrop_path: string
  poster_path?: string
  tagline: string
  overview: string
  release_date: string
  revenue: number // receita
  runtime: number
  genres?: [id: number, name: string]
  popularity?: number
  status?: string
  vote_average?: number
  vote_count?: number
}
