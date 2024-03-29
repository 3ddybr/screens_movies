import styled from 'styled-components'

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 6rem;

  @media (max-width: 940px) {
    padding: 2.5rem 3rem;
  }
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
  @media (max-width: 940px) {
    nav {
      display: none;
    }
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
    max-width: 3.2rem;
    height: 3.2rem;

    width: inherit;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .lupa {
      width: 100%;
      max-width: 2rem;
      height: 100%;
      min-height: 2rem;

      font-weight: 900;
    }

    input {
      width: 100%;
      max-width: 15rem;
      height: 100vh;
      max-height: 2rem;
      border: 0;
      outline: 0;

      font-size: 1.5rem;
      padding: 0.5rem;
      :focus {
        outline: none;
        border: 0;
      }
    }
    /* button { */
    /* border: 0; */
    /* background: transparent; */
    /* } */
  }
  @media (max-width: 940px) {
    form {
      display: none;
    }

    .bell {
      display: none;
    }
  }
  /* border: 1px solid yellow; */
`
