import { Carousel } from '../Carousel'
import { BannerCarousel } from './BannerCarousel'
import { BannerCarouselExtra, BannerContainer } from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <BannerCarousel />
      <BannerCarouselExtra>
        <Carousel
          descShared="movie/now_playing?"
          descTitle="Assistindo Agora"
        />
      </BannerCarouselExtra>
    </BannerContainer>
  )
}
