import styled from 'styled-components'

export const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f0f0f0;
`

export const HomeHeaderLogoComp = styled.img`
  width: 100px;
  height: 100%;
`

export const HomeMain = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const HomeSidebarLeftBox = styled.div`
  width: 100px;
  height: 100%;
  border-right: 1px solid #e3e4e5;
`

export const HomeHeaderBox = styled.header`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #e3e4e5;
  background-color: #d9d9d9;
  .file-btn {
    color: #fff;
  }
`

export const HomeContent = styled.div`
  flex: 1;
  height: 100%;
`