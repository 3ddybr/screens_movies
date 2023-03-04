import { ThemeProvider } from 'styled-components'

import Home from './Pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
