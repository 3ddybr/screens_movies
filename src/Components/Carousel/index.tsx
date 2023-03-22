import { useEffect, useState } from 'react'
import { api, apiKey, urlImg500 } from '../../api/api'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { Link } from 'react-router-dom'

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

  return (
    <CarouselContainer>
      <h1>{descTitle}</h1>
      <CarouselContent>
        <Swiper
          loop={true}
          // spaceBetween={5}
          // slidesPerView={5} // 8 pra tela 2560px  / 6 pra tela 1600
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
            1500: {
              slidesPerView: 6,
              spaceBetween: 5,
            },
            1800: {
              slidesPerView: 8,
              spaceBetween: 5,
            },
          }}
        >
          {topMovies.map(
            (movie: {
              id: null | undefined
              backdrop_path: string
              title: string
              vote_average: string
            }) => (
              <SwiperSlide key={movie.id}>
                <Link to={`movie/${movie.id}`}>
                  <CardCarousel
                    key={movie.id}
                    postImg={`${urlImg500}${movie.backdrop_path}`}
                    titleCard={movie.title}
                    votoPont={movie.vote_average}
                  />
                </Link>
              </SwiperSlide>
              // eslint-disable-next-line prettier/prettier
            )
          )}
        </Swiper>
      </CarouselContent>
    </CarouselContainer>
  )
}
