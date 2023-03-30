import styled from 'styled-components'

export const BannerCarouselContainer = styled.div`
  /* margin: 4rem 0; */
  width: 100%;
`
export const BannerCarouselContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
export const BannerCard = styled.div`
  position: relative;
  max-height: 81rem;

  img {
    width: 100%;
    height: 100%;
    max-height: 81rem;
    /* object-fit: cover; */
  }

  div {
    position: absolute;
    top: 15%;
    left: 5%;
    /* bottom: 25%; */
    width: 100%;
    height: 100%;

    h1 {
      max-width: 63.6rem;
      font-size: 5.5rem;
    }
    p {
      /* border: 1px solid red; */
      font-size: 2.6rem;
      max-width: 63.6rem;
      max-height: 13.2rem;
      margin: 2.5rem 0;
      overflow: hidden;
      line-height: 33px;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      width: 100%;
      height: 100%;
      max-width: 17.5rem;
      max-height: 6.2rem;
      font-size: 2.2rem;
      font-weight: bold;

      color: black;
      background-color: white;
    }

    @media (max-width: 1200px) {
      h1 {
        /* max-width: 60rem; */
        font-size: 4.5rem;
      }

      p {
        max-width: 60rem;
        font-size: 1.8rem;
      }
      button {
      }
    }
  }
`
