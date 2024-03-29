// import { CiSearch } from 'react-icons/ci'
import { FaBell, FaSearch } from 'react-icons/fa'
// import { MdFace3 } from 'react-icons/md'

import LogoImg from '../../assets/logo.svg'
import PerfilImg from '../../assets/fotoPerfil.jpg'

import { LogoNavBar, NavBarContainer, PerfilNavBar } from './styles'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DropdownMenuBurgue from './DropMenu'

export function Navbar() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
    // console.log(search)
  }
  return (
    <NavBarContainer>
      <LogoNavBar>
        <Link to="/">
          <img src={LogoImg} alt="Logo BD SCREENS" />
        </Link>
        <nav>
          <ul>
            <li>Início</li>
            <li>Séries </li>
            <li>Filmes</li>
            <Link to="/atualizados">
              <li>Atualizados</li>
            </Link>
            <li>Minha Lista</li>
          </ul>
        </nav>
      </LogoNavBar>
      <PerfilNavBar>
        <DropdownMenuBurgue />
        <form onSubmit={handleSubmit}>
          <FaSearch onClick={handleSubmit} size={20} className="lupa" />
          <input
            type="text"
            placeholder="Buscar Filmes"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
        <FaBell size={20} className="bell" />
        <img src={PerfilImg} alt="" />
        {/* <MdFace3 size={32} color="red" /> */}
      </PerfilNavBar>
    </NavBarContainer>
  )
}
