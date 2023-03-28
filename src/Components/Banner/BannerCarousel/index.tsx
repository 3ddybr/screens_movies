import { useEffect, useState } from 'react'
import { api, urlImg500 } from '../../../api/api'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'

import { Spinier } from '../../../utils/spinier'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import {
  BannerCard,
  BannerCarouselContainer,
  BannerCarouselContent,
} from './styles'

export function BannerCarousel() {
  const [listMovies, setListMovies] = useState([])

  const getListMovies = async () => {
    const res = await api.get(`movie/top_rated`)
    const data = res.data.results
    console.log(data)
    setListMovies(data)
  }

  useEffect(() => {
    getListMovies()
  }, [])

  return (
    <>
      {!listMovies ? (
        <>
          <Spinier />
        </>
      ) : (
        <BannerCarouselContainer>
          <BannerCarouselContent>
            <Swiper
              loop={true}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
              modules={[Navigation, Autoplay]}
            >
              {listMovies.map(
                (movie: {
                  id: null | undefined
                  backdrop_path: string
                  title: string
                  overview: string
                }) => (
                  <SwiperSlide key={movie.id}>
                    <Link to={`movie/${movie.id}`}>
                      <BannerCard key={movie.id}>
                        <div>
                          <h1>{movie.title}</h1>
                          <p>{movie.overview}</p>
                          <button>{<FaPlay />}Play</button>
                        </div>
                        <img
                          src={`${urlImg500}${movie.backdrop_path}`}
                          alt={`${movie.title}`}
                        />
                      </BannerCard>
                    </Link>
                  </SwiperSlide>
                  // eslint-disable-next-line prettier/prettier
                )
              )}
            </Swiper>
          </BannerCarouselContent>
        </BannerCarouselContainer>
      )}
    </>
  )
}
