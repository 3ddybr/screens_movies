import { Container } from './styles'

import './slick.css'
import './slick-theme.css'

import Slider from 'react-slick'

export function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
  }
  return (
    <Container>
      <h2>Uneven sets (infinite)</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </Container>
  )
}