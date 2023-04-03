import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { apiSearch, urlImg500 } from '../../api/api'

import { CardCarousel } from '../../Components/CardCarousel'

import { DataProps } from '../../@types/movie'
import { SearchButtonContent, SearchContainer, SearchContent } from './styles'
import { Spinier } from '../../utils/spinier'

export default function Search() {
  const [searchParams] = useSearchParams()

  const [listMovies, setListMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const query = searchParams.get('q')

  const getMovie = async () => {
    // const res = await apiSearch.get(`query=${query}`)
    const res = await apiSearch.get(`movie`, {
      params: {
        query,
        page,
      },
    })
    const data = res.data.results as []
    // setListMovies(data.filter((movie) => !!movie.backdrop_path))
    // setListMovies(data.filter((movie: DataProps) => !!movie.backdrop_path))
    setListMovies(data)
    setPage(res.data.page)
    setTotalPages(res.data.total_pages)
    console.log('console do Data completo', res.data)
  }
  // console.log(listMovies)

  useEffect(() => {
    getMovie()
  }, [query, page])

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
      <SearchContent>
        {!listMovies ? (
          <Spinier />
        ) : (
          <>
            {listMovies.map(
              (movie: {
                id: number
                backdrop_path: string
                poster_path?: string
                title: string
                vote_average: string
              }) => (
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
              )
            )}
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
