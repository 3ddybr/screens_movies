import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  position: relative;
`
export const BannerCarouselExtra = styled.div`
  width: 100%;
  position: absolute;

  bottom: -5%;

  div > div {
    /* border: 1px solid red; */
    /* background: red; */
    /* margin: 4rem 0; */
  }

  @media (max-width: 780px) {
    bottom: -9%;

    div > div {
      /* border: 1px solid red; */
      max-height: 10rem;
    }
  }
`
