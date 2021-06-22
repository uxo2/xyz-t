import styled from 'styled-components'

export const Toolcontainer = styled.div`
  color: #fff;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
`

export const ComponentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 45px;
  width: 100%;
  color: #a0a7af;
  i {
    font-size: 18px;
  }
  &:hover {
    color: #fff;
    background: rgba(16 18 27 / 706%);
    border-radius: 0;
  }
`

export const TitleLabel = styled.div`
  cursor: default;
  margin-left: 10px;
`