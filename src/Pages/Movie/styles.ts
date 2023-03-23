import styled from 'styled-components'

export const MovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-direction: column; */
  padding: 2.5rem 6rem;

  div {
    width: 95%;
    /* gap: 1rem; */

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
      background: green;
    }
  }

  /* border: 1px solid red; */
`
// export const CarouselContent = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: 6rem;
// `
