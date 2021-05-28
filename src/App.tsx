import styled from 'styled-components'
import Routers from './routes'
import 'antd/dist/antd.css'
// import React, { createContext, useReducer, useContext } from 'react'

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: #212121;
`
const App = () => (
  <AppDiv>
    <Routers></Routers>
  </AppDiv>
)

export default App
