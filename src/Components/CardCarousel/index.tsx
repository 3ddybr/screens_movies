import { ReactNode, useEffect, useState } from 'react'

import { Container, ProgressIndicator, ProgressRoot } from './styles'

interface CardCarouselProps {
  // children: ReactNode
  postImg: string
  titleCard: string
  votoPont: string
}

export function CardCarousel({
  postImg,
  titleCard,
  votoPont,
}: CardCarouselProps) {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(10), 500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <Container>
      <img src={postImg} alt="" />
      <h1>{titleCard}</h1>
      <p>{parseFloat(votoPont).toFixed(1)} </p>

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
