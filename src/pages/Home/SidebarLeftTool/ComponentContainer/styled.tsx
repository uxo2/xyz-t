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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60px;
  width: 80px;
  margin: 10px;
  border: 1px dashed #a0a7af;
  border-radius: 3px;
  color: #a0a7af;
  i {
    font-size: 18px;
  }
  &:hover {
    color: #fff;
    border: 1px dashed #fff;
  }
`

export const TitleLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`