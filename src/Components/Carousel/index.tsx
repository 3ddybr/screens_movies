import { CarouselContainer } from './styles'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import './slick.css'
// import './slick-theme.css'

import Slider from 'react-slick'

export function Carousel() {
  const settings = {
    // className: 'slider variable-width',
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 5,
    // slidesToScroll: 1,
    // initialSlide: 0,

    // adaptiveHeight: true,
    // autoplaySpeed: 1000,
    // ccsEase: 'linear',
    // draggable: true,
    // mobileFirst: true,
    // pauseOnFocus: true,

    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <CarouselContainer>
      <h2>Uneven sets (infinite)</h2>
      <Slider {...settings}>
        <div>
          <h3>
            1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            earum animi voluptate consequatur itaque, beatae quos, porro minus
            assumenda voluptatum sequi, impedit laborum ut fuga veniam harum
            exercitationem molestias nostrum!
          </h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            praesentium adipisci quia cum. Repellendus ex earum placeat ea
            sequi, voluptatem et autem, sapiente, ipsa molestiae vero aperiam
            aliquam a. Accusamus!
          </h3>
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
    </CarouselContainer>
  )
}
