import { useEffect, useState } from 'react'
import { api, apiKey } from '../../api/api'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { CardCarousel } from '../CardCarousel'

import { CarouselContainer, CarouselContent } from './styles'

interface CarouselProps {
  descShared: string
  descTitle: string
}

export function Carousel({ descShared, descTitle }: CarouselProps) {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async () => {
    const res = await api.get(`${descShared}${apiKey}&language=pt-BR`)
    const data = res.data.results
    console.log({ descTitle }, data)
    setTopMovies(data)
  }

  useEffect(() => {
    getTopRatedMovies()
  }, [])

  const urlImgPadrao = 'https://image.tmdb.org/t/p/w500'
  return (
    <CarouselContainer>
      <h1>{descTitle}</h1>
      <CarouselContent>
        <Swiper
          loop={true}
          spaceBetween={5}
          slidesPerView={6} // 9 pra tela 2560px  / 6 pra tela 1600
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {topMovies.map(
            (movie: { id: null | undefined; backdrop_path: string }) => (
              <SwiperSlide key={movie.id}>
                <CardCarousel
                  key={movie.id}
                  postImg={`${urlImgPadrao}${movie.backdrop_path}`}
                />
              </SwiperSlide>
              // eslint-disable-next-line prettier/prettier
            )
          )}
        </Swiper>
      </CarouselContent>
    </CarouselContainer>
  )
}
