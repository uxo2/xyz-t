import styled from 'styled-components'
import Routers from './routes'
import 'antd/dist/antd.css'

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0a101b;
`
const App = () => (
  <AppDiv>
    <Routers></Routers>
  </AppDiv>
)

export default App
