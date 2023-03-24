import styled from 'styled-components'

export const MovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 6rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 1rem;

    h1 {
      font-size: 3.5rem;
      padding-bottom: 1rem;
    }
    h2 {
      font-size: 2rem;
      padding-bottom: 1rem;
      opacity: 50%;
    }

    p {
      font-size: 1.5rem;
      padding-bottom: 1rem;
    }

    button {
      width: 8rem;
      height: 3rem;
      font-size: 2rem;
      /* background: ${({ theme }) => theme['green-500']}; */
      background: linear-gradient(90deg, #f41b3b 0%, #1884f7 100%);
    }
  }

  /* border: 1px solid red; */
`
export const CarouselContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 102.4rem;
`
