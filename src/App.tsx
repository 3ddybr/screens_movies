import { ThemeProvider } from 'styled-components'

import Home from './Pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Outlet } from 'react-router-dom'
import { Navbar } from './Components/NavBar'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Home /> */}
      <Navbar />
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
