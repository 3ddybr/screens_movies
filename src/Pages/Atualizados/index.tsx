import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { api, urlImg500 } from '../../api/api'

import { CardCarousel } from '../../Components/CardCarousel'

import { DataProps } from '../../@types/movie'
import { SearchButtonContent, SearchContainer, SearchContent } from './styles'
import { Spinier } from '../../utils/spinier'

interface resultsPros {
  id: number
  adult: boolean
}
interface respMovieProps {
  results: resultsPros[]
}

export default function Atualizados() {
  const [listMovies, setListMovies] = useState<DataProps[]>([])
  const [listMoviesID, setListMoviesID] = useState<Number[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const [results, setResults] = useState<resultsPros[]>([])

  const getMovie = async () => {
    const res = await api.get(`movie/changes`, {
      params: {
        page,
      },
    })
    setResults(res.data.results)
    // console.log(res.data.results)

    setPage(res.data.page)
    setTotalPages(res.data.total_pages)
  }

  useEffect(() => {
    const dataFilter = results.filter((resp) => resp.adult === false)
    // console.log('resposta do dataFilter ', dataFilter)

    const ids = dataFilter.map((resp: { id: number }) => resp.id)

    setListMoviesID(ids)
  }, [results])

  useEffect(() => {
    async function resData() {
      listMoviesID.map(async (id) => {
        return await api.get(`movie/${id}`).then((data) => {
          const response: DataProps = data.data
          setListMovies((prev) => [...prev, response])
        })
      })
    }
    resData()
  }, [listMoviesID])

  useEffect(() => {
    getMovie()
    setListMovies([])
  }, [page])

  function handlePaginationNext() {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }

  function handlePaginationBefore() {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <SearchContainer>
      <h1>Atualizados Recentemente</h1>
      <SearchContent>
        {!listMovies ? (
          <Spinier />
        ) : (
          <>
            {listMovies.map((movie: DataProps) => (
              <>
                <Link to={`/movie/${movie.id}`}>
                  {movie.backdrop_path === null &&
                  movie.poster_path === null ? (
                    <CardCarousel
                      key={movie.id}
                      postImg=""
                      titleCard={movie.title}
                      votoPont={movie.vote_average}
                    />
                  ) : movie.backdrop_path === null &&
                    movie.poster_path !== null ? (
                    <CardCarousel
                      key={movie.id}
                      postImg={`${urlImg500}${movie.poster_path}`}
                      titleCard={movie.title}
                      votoPont={movie.vote_average}
                    />
                  ) : (
                    <CardCarousel
                      key={movie.id}
                      postImg={`${urlImg500}${movie.backdrop_path}`}
                      titleCard={movie.title}
                      votoPont={movie.vote_average}
                    />
                  )}
                </Link>
              </>
              // eslint-disable-next-line prettier/prettier
            ))}
          </>
        )}
      </SearchContent>
      <SearchButtonContent>
        <p>{`${page} / ${totalPages}`}</p>
        <div>
          <button onClick={handlePaginationBefore}>Antes</button>
          <button onClick={handlePaginationNext}>Proximo</button>
        </div>
      </SearchButtonContent>
    </SearchContainer>
  )
}
