import styled from 'styled-components'

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(0 0 0 / 35%);
`

export const LoaderInfo = styled.ul`
  margin: 50px 0 0 0;
  padding: 0;
  width: 300px;
  height: 60px;
  color: #fff;
  text-align: center;
`
export const LoaderItem = styled.div`
  width: 100%;
  text-align: left;
  line-height: 20px;
`