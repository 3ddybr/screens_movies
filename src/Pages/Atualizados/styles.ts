import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  h1 {
    font-size: 2.5rem;
  }

  /* border: 1px solid red; */
`

export const SearchContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  max-width: 150rem;
  padding: 2rem;
  /* border: 1px solid blue; */
`
export const SearchButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 1.5rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 3rem;
    font-size: 2rem;

    margin: 2rem;

    background: linear-gradient(90deg, #f41b3b 0%, #1884f7 100%);
  }
`
