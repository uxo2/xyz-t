import styled from 'styled-components'

export const Toolcontainer = styled.div`
  color: #fff;
  overflow: hidden;
`
export const Component = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
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