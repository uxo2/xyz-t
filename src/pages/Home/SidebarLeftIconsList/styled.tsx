import styled from 'styled-components'

export const SidebarleftIconList = styled.div`
  width: 45px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #333333;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    line-height: 45px;
    height: 45px;
    color: #8492a6;
    font-size: 22px;
    text-align: center;
    &:hover {
      color: #fff;
      background-color: #252526;
    }
    a {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      &.acitiveLink {
        background: #252526;
      }
    }
  }
`