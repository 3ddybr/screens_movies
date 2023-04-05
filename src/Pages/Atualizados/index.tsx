import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { api, urlImg500 } from '../../api/api'

import { CardCarousel } from '../../Components/CardCarousel'

import { DataProps } from '../../@types/movie'
import { SearchButtonContent, SearchContainer, SearchContent } from './styles'
import { Spinier } from '../../utils/spinier'

interface respMovieProps {
  id: number
}

export default function Atualizados() {
  const [listMovies, setListMovies] = useState([])
  const [listMoviesID, setListMoviesID] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const [results, setResults] = useState([])

  const getMovie = async () => {
    const res = await api.get(`movie/changes`, {
      params: {
        page,
      },
    })
    const data = res.data as []
    setResults(data)

    // console.log('Resposta data changes', data)

    const ids: [] = res.data.results.map((resp: { id: number }) => resp.id)
    setListMoviesID(ids)
    // console.log(' ids de filmes', ids)
    // const promises = ids.map(
    //   async (id) =>
    //     api
    //       .get(`movie/${id}`)
    //       .then(async (data) => {
    //         const resMovie = await data.data
    // const resMovieRes: [] = (...resMovieRes, resMovie)
    // console.log('Resposta data movie', resMovie)
    // if (resMovie) {
    //   setListMovies(resMovie)
    // }
    // })
    // .catch((err) => {
    //   console.log('Erro ao buscar o filme', err)
    // eslint-disable-next-line prettier/prettier
    // })
    // const resPromise = promises
    // )
    // console.log('promises de movie', promises)

    // setListMovies(data)
    setPage(res.data.page)
    setTotalPages(res.data.total_pages)
    // console.log('console do Data completo', res.data)

    // Promise.all(results).then((responses) => {
    //   const dataMovies = responses.map((response) => response)
    //   setListMovies(dataMovies as [])
    //   console.log(dataMovies)
    // })

    // const resMovieId = await api.get(`movie/${res.data.results.id}`)
  }
  // console.log('resMOvie', listMovies)

  useEffect(() => {
    async function resData() {
      listMoviesID.map(async (id) => {
        return await api.get(`movie/${id}`).then((data) => {
          const response = data.data
          // console.log(response)
          setListMovies((prev) => [...prev, response])
        })
      })
    }
    resData()
  }, [listMoviesID])

  console.log(listMovies)

  useEffect(() => {
    getMovie()
    setListMovies([])
    // api.get(`/movie/changes`, {
    //   params: {
    //     page,
    //   },
    // })
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
            {listMovies.map(
              (movieId: {
                id: number
                backdrop_path: string
                poster_path?: string
                title: string
                vote_average: string
              }) => (
                <>
                  <Link to={`/movie/${movieId.id}`}>
                    {movieId.backdrop_path === null &&
                    movieId.poster_path === null ? (
                      <CardCarousel
                        key={movieId.id}
                        postImg=""
                        titleCard={movieId.title}
                        votoPont={movieId.vote_average}
                      />
                    ) : movieId.backdrop_path === null &&
                      movieId.poster_path !== null ? (
                      <CardCarousel
                        key={movieId.id}
                        postImg={`${urlImg500}${movieId.poster_path}`}
                        titleCard={movieId.title}
                        votoPont={movieId.vote_average}
                      />
                    ) : (
                      <CardCarousel
                        key={movieId.id}
                        postImg={`${urlImg500}${movieId.backdrop_path}`}
                        titleCard={movieId.title}
                        votoPont={movieId.vote_average}
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
