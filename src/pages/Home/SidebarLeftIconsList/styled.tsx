import styled from 'styled-components'

export const SidebarleftIconList = styled.div`
  width: 45px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: rgba(16 18 27 / 706%);
  border-right: 1px solid var(--border-color);
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
      background-color: rgba(12 15 25 / 30%);
    }
  }
`