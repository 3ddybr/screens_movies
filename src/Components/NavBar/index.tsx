import { CiSearch } from 'react-icons/ci'
import { FaBell } from 'react-icons/fa'
import { MdFace3 } from 'react-icons/md'

import LogoImg from '../../assets/logo.svg'
import PerfilImg from '../../assets/fotoPerfil.jpg'

import { LogoNavBar, NavBarContainer, PerfilNavBar } from './styles'

export function Navbar() {
  return (
    <NavBarContainer>
      <LogoNavBar>
        <img src={LogoImg} alt="" />
        <nav>
          <ul>
            <li>Início</li>
            <li>Séries </li>
            <li>Filmes</li>
            <li>Bombando</li>
            <li>Minha Lista</li>
            <li>Navegar por idiomas</li>
          </ul>
        </nav>
      </LogoNavBar>
      <PerfilNavBar>
        <CiSearch size={20} />
        <FaBell size={20} />
        <img src={PerfilImg} alt="" />
        {/* <MdFace3 size={32} color="red" /> */}
      </PerfilNavBar>
    </NavBarContainer>
  )
}
