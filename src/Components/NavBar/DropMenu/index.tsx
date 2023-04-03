import React, { useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  HamburgerMenuIcon,
  LayoutIcon,
  CameraIcon,
  HomeIcon,
  RocketIcon,
  ListBulletIcon,
} from '@radix-ui/react-icons'
import './styles.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const DropdownMenuBurgue = () => {
  // const [bookmarksChecked, setBookmarksChecked] = useState(true)
  // const [urlsChecked, setUrlsChecked] = useState(false)
  // const [person, setPerson] = React.useState('pedro')

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
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="DropdownMenuContent"
          align="end"
          sideOffset={5}
        >
          <DropdownMenu.Label className="DropdownMenuForm">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Buscar Filmes"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </form>
            <div className="RightSlot">
              <FaSearch onClick={handleSubmit} size={15} className="lupa" />
            </div>
          </DropdownMenu.Label>
          <Link to="/">
            <DropdownMenu.Item className="DropdownMenuItem">
              Inicio{' '}
              <div className="RightSlot">
                <HomeIcon />
              </div>
            </DropdownMenu.Item>
          </Link>
          <DropdownMenu.Item className="DropdownMenuItem">
            Series{' '}
            <div className="RightSlot">
              <LayoutIcon />
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Filmes{' '}
            <div className="RightSlot">
              <CameraIcon />
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Bombando{' '}
            <div className="RightSlot">
              <RocketIcon />
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            MInha Lista{' '}
            <div className="RightSlot">
              <ListBulletIcon />
            </div>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropdownMenuBurgue
