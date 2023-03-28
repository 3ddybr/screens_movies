import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { api, urlImg500 } from '../../api/api'
import { converter } from '../../utils/convertMinutosHor'
import { CarouselContent, MovieContainer } from './styles'

import { DataProps } from '../../@types/movie'
import { Spinier } from '../../utils/spinier'

export default function Movie() {
  const navigate = useNavigate()
  const [movie, setMovie] = useState<DataProps>()
  const { id } = useParams()

  const getMovie = async () => {
    const res = await api.get(`movie/${id}`)
    const data = res.data
    setMovie(data)
    // console.log(res.data)
  }

  useEffect(() => {
    getMovie()
  }, [])
  console.log(movie)

  return (
    <MovieContainer>
      <CarouselContent>
        {movie ? (
          <>
            <div>
              <h1>{movie?.title}</h1>
              <h2>{movie?.tagline}</h2>
              <img
                src={`${urlImg500}${movie?.backdrop_path}`}
                alt={movie?.title}
              />
            </div>

            <div>
              <p>{movie?.overview}</p>
              <p>Data de Lançamento: {movie?.release_date}</p>
              <p>{converter(movie?.runtime)} hs</p>
              <p>
                Receita de{' '}
                {movie?.revenue.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
              {/* <Link to="/"> */}
              <button onClick={() => navigate(-1)}> Voltar</button>
              {/* </Link> */}
            </div>
          </>
        ) : (
          <>
            <Spinier />
          </>
        )}
      </CarouselContent>
    </MovieContainer>
  )
}
