import styled from 'styled-components'

export const CarouselContainer = styled.div`
  margin: 4rem 0;
  h1 {
    font-size: 2.6rem;
    margin: 1rem 6rem;
  }

  @media (max-width: 940px) {
    h1 {
      margin: 1rem 3rem;
    }
  }
  /* display: flex;
  align-items: center; */

  /* border: 1px solid red; */
`
export const CarouselContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6rem;

  @media (max-width: 940px) {
    margin-left: 3rem;
  }
`
