import { useEffect, useState } from 'react'
import { api, apiKey } from '../../api/api'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { CardCarousel } from '../CardCarousel'

import { CarouselContainer } from './styles'

export function Carousel() {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async () => {
    const res = await api.get(`top_rated?${apiKey}&language=pt-BR`)
    const data = res.data.results
    console.log('resposta', data)
  }

  useEffect(() => {
    getTopRatedMovies()
  }, [])
  return (
    <CarouselContainer>
      <h1>Popular</h1>
      <Swiper
        spaceBetween={5}
        slidesPerView={6}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>{<CardCarousel />}</SwiperSlide>
        <SwiperSlide>{<CardCarousel />}</SwiperSlide>
        <SwiperSlide>{<CardCarousel />}</SwiperSlide>
        <SwiperSlide>{<CardCarousel />}</SwiperSlide>
        <SwiperSlide>{<CardCarousel />}</SwiperSlide>
        <SwiperSlide>{<CardCarousel />}</SwiperSlide>
        <SwiperSlide>{<CardCarousel />}</SwiperSlide>
        <SwiperSlide>{<CardCarousel />}</SwiperSlide>
        <SwiperSlide>{<CardCarousel />}</SwiperSlide>
        <SwiperSlide>{<CardCarousel />}</SwiperSlide>
        ...
      </Swiper>
    </CarouselContainer>
  )
}
