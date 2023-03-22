import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieContainer } from './styles'

export default function Movie() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  console.log(id)
  return (
    <MovieContainer>
      <h1>testeando {id}</h1>
      <h2>Movie</h2>
    </MovieContainer>
  )
}
