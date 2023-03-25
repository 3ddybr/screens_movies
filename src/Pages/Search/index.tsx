import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { apiSearch, urlImg500 } from '../../api/api'

import { CardCarousel } from '../../Components/CardCarousel'

import { DataProps } from '../../@types/movie'
import { SearchContainer, SearchContent } from './styles'

export default function Search() {
  const [searchParams] = useSearchParams()

  const [listMovies, setListMovies] = useState([])

  const query = searchParams.get('q')

  const getMovie = async () => {
    // const res = await apiSearch.get(`query=${query}`)
    const res = await apiSearch.get(`movie`, {
      params: {
        query,
      },
    })
    const data = res.data.results as []
    // setListMovies(data.filter((movie) => !!movie.backdrop_path))
    setListMovies(data.filter((movie: DataProps) => !!movie.backdrop_path))
    console.log(res.data)
  }
  // console.log(listMovies)

  useEffect(() => {
    getMovie()
  }, [query])

  return (
    <SearchContainer>
      <SearchContent>
        {listMovies.map(
          (movie: {
            id: null | undefined
            backdrop_path: string
            title: string
            vote_average: string
          }) => (
            <>
              <Link to={`/movie/${movie.id}`}>
                <CardCarousel
                  key={movie.id}
                  postImg={`${urlImg500}${movie.backdrop_path}`}
                  titleCard={movie.title}
                  votoPont={movie.vote_average}
                />
              </Link>
            </>
            // eslint-disable-next-line prettier/prettier
          )
        )}
      </SearchContent>
    </SearchContainer>
  )
}
