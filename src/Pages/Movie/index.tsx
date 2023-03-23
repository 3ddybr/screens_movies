import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api, apiKey, urlImg500 } from '../../api/api'
import { MovieContainer } from './styles'

type DataProps = {
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

export default function Movie() {
  const [movie, setMovie] = useState<DataProps>()
  const { id } = useParams()

  const getMovie = async () => {
    const res = await api.get(`${id}?${apiKey}&language=pt-BR`)
    const data = res.data
    setMovie(data)
    // console.log(res.data)
  }

  useEffect(() => {
    getMovie()
  }, [id])
  console.log(movie)
  return (
    <MovieContainer>
      <div>
        <h1>{movie?.title}</h1>
        <h2>{movie?.tagline}</h2>
        <img src={`${urlImg500}${movie?.backdrop_path}`} alt={movie?.title} />
      </div>

      <div>
        <p>{movie?.overview}</p>
        <p>Data de Lançamento: {movie?.release_date}</p>
        <p>{movie?.runtime} minutos</p>
        <p>
          Receita de{' '}
          {movie?.revenue.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <Link to="/">
          <button> Voltar</button>
        </Link>
      </div>
    </MovieContainer>
  )
}
