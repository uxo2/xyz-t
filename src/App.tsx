import { AppContext } from './contexts/providers'
import { useReducer } from 'react'
import Routers from './routes'
import 'antd/dist/antd.css'
import styled, { ThemeProvider } from 'styled-components'
import initState from './contexts/states'
import reducer from './contexts/reducer'

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0a101b;
`

const App = () => {
  const [provider, dispatch] = useReducer(reducer, initState)

  return (
    <AppContext.Provider value={{
      state: provider,
      dispatch
    }}>
      <ThemeProvider theme={{ mode: 'dark' }}>
        <AppDiv>
          <Routers></Routers>
        </AppDiv>
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default App
