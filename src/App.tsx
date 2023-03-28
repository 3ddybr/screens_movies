import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Outlet } from 'react-router-dom'
import { Navbar } from './Components/NavBar'
import { Footer } from './Components/Footer'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <GlobalStyle />
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}

export default App
