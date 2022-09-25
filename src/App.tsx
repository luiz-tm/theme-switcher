import Header from "./components/Header"
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePersistedState from './utils/usePersistedState'

function App() {
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle></GlobalStyle>
        <Header toggleTheme={toggleTheme}></Header>
      </div>
    </ThemeProvider>
  )
}

export default App
