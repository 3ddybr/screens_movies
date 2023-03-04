import { ReactNode } from 'react'

import { BannerContainer } from './styles'

import BannerImg from '../../assets/bannerImg.svg'

interface BannerProps {
  children: ReactNode
}

export function Banner() {
  return (
    <BannerContainer>
      <img src={BannerImg} alt="" />
      {/* <h1>Banner</h1> */}
    </BannerContainer>
  )
}
