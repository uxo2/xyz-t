import Routers from './routes'
import 'antd/dist/antd.css'
import styled, { ThemeProvider } from 'styled-components'

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0a101b;
`

const App = () => (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <AppDiv>
      <Routers></Routers>
    </AppDiv>
  </ThemeProvider>
)

export default App
