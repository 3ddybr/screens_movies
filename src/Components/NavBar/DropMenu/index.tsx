import React from 'react'
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
import { Link } from 'react-router-dom'

const DropdownMenuBurgue = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
  const [urlsChecked, setUrlsChecked] = React.useState(false)
  const [person, setPerson] = React.useState('pedro')

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
