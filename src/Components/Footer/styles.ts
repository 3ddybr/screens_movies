import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  font-size: 1.6rem;

  margin-top: 12rem;
  border-top: 4px solid gray;
`
export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 13rem 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 2rem;
    margin: 2rem;
  }

  main {
    padding: 0 3rem;
    img {
      margin-bottom: 2rem;
    }
  }
`
