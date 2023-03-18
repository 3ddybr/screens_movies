import { useEffect, useState } from 'react'

import { Container, ProgressIndicator, ProgressRoot } from './styles'
import moviePost from '../../assets/MoviePoster1.svg'

// interface CardCarouselProps {
//   children: ReactNode
// }

export function CardCarousel() {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(10), 500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <Container>
      <img src={moviePost} alt="" />

      <div>
        <ProgressRoot value={progress}>
          <ProgressIndicator
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </ProgressRoot>
      </div>
    </Container>
  )
}
