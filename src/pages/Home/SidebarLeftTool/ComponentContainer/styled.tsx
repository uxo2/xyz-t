import styled from 'styled-components'

export const Toolcontainer = styled.div`
  width: 200px;
  color: #fff;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
`

export const ComponentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #a0a7af;
  border-radius: 3px;
  color: #a0a7af;
  i {
    font-size: 18px;
  }
  &:hover {
    color: #fff;
    border-bottom: 1px solid #fff;
  }
`

export const TitleLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`