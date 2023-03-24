import styled from 'styled-components'

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 6rem;
`

export const LogoNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 16.9rem;
    margin-right: 2.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    gap: 2rem;

    cursor: pointer;
  }
`

export const PerfilNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-weight: bold;

  cursor: pointer;

  img {
    width: 3.2rem;
    height: 3.2rem;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    input {
      width: 15rem;
    }
    button {
      /* background: transparent; */
    }
  }

  /* border: 1px solid yellow; */
`
