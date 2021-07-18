import { useReducer, useState } from 'react'
import 'antd/dist/antd.css'
import styled, { ThemeProvider } from 'styled-components'
import { AppContext } from './contexts/providers'
import Routers from './routes'
import initState from './contexts/states'
import reducer from './contexts/reducer'
import Progress from './components/Progress/index'

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0a101b;
  min-height: 600px;
  min-width: 1200px;
  overflow: hidden;
`

const App = () => {
  const [provider, dispatch] = useReducer(reducer, initState)
  const [state, setState] = useState({
    isAnimating: false,
    key: 0
  })

  return (
    <AppContext.Provider
      value={{
        state: provider,
        dispatch
      }}>
      <ThemeProvider
        theme={{
          mode: 'dark'
        }}>
        <AppDiv>
          <Progress isAnimating={state.isAnimating} key={state.key} />
          <button type="submit"
            onClick={() => {
              setState((prevState: { isAnimating: boolean, key: number }) => ({
                isAnimating: !prevState.isAnimating,
                key: prevState.isAnimating ? prevState.key : prevState.key + 1
              }))
            }}
          >
            {state.isAnimating ? 'Stop' : 'Start'}
          </button>
          <Routers />
        </AppDiv>
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default App
