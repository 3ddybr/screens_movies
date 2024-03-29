import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.6rem;

  margin-top: 10rem;
  border-top: 4px solid gray;
`
export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 10rem 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    gap: 2rem;
    margin: 2rem;
  }

  main {
    width: 100%;
    padding: 0 3rem;
    img {
      margin-bottom: 2rem;
      width: inherit;
    }
  }

  @media (max-width: 740px) {
    gap: 2rem;
    flex-direction: column;
  }
`
