import { FooterContainer, FooterContent } from './styles'
import LogoImg from '../../assets/logo.svg'

import { FiFacebook } from 'react-icons/fi'
import { AiFillInstagram } from 'react-icons/ai'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <p>Feedback</p>
          <p>|</p>
          <p>Ajuda</p>
          <p>|</p>
          <p>FAQ</p>
        </div>
        <main>
          <img src={LogoImg} alt="Logo BD SCREENS" />
          <p>API utilizada themoviedb.org</p>
        </main>
        <div>
          <FiFacebook size={30} />
          <AiFillInstagram size={30} />
        </div>
      </FooterContent>
    </FooterContainer>
  )
}
