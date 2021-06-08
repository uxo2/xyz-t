import styled from 'styled-components'

export const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const HomeMain = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const Button = styled.div`
  display: inline-block;
  padding: 2px 4px;
  color: #fff;
  width: 50px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #909399;
  }
`

export const SideBarComp = styled.div`
  width: 40px;
  height: 100%;
  border-right: 1px solid #e3e4e5;
`

export const HomeHeaderBox = styled.header`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #e3e4e5;
  .logo-box {
    width: 100%;
    height: 100%;
    padding: 7px;
    display: inline-block;
  }
`

export const HomeContent = styled.div`
  flex: 1;
  height: 100%;
`