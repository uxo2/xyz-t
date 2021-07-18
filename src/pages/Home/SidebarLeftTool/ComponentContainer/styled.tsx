import styled from 'styled-components'

export const Toolcontainer = styled.div`
  .component {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #e3e4e5
  }
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

export const GroupBlock = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
`

export const GroupName = styled.div`
  text-align: center;
  line-height: 25px;
  margin: 5px 0;
  font-size: 12px;
  user-select: none;
`

export const GroupChildren = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const CompUnit = styled.div`
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #47525d;
  margin: 10px;
  border: 1px solid #47525d;
  box-sizing: border-box;
  font-size: 12px;
`