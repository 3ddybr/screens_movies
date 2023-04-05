import { useEffect, useState } from 'react'

import { Container, ProgressIndicator, ProgressRoot } from './styles'
import SemImg from '../../assets/semImg.jpg'
interface CardCarouselProps {
  // children: ReactNode
  postImg: string
  titleCard?: string
  votoPont: number | undefined
}

export function CardCarousel({
  postImg,
  titleCard,
  votoPont,
}: CardCarouselProps) {
  const [progress, setProgress] = useState(40)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(10), 500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <Container>
      {postImg ? (
        <img src={postImg} alt={titleCard} />
      ) : (
        <img src={SemImg} alt={titleCard} />
      )}
      <h1>{titleCard}</h1>
      <p>{votoPont} </p>
      {/* <p>{parseFloat(votoPont).toFixed(1)} </p> */}

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
