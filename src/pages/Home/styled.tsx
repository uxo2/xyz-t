import styled from 'styled-components'
// import fullPage from '../../assets/images/fullPage.jpg'
// background-image: url(fullPage});

export const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: cover;
 
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

export const HomeMain = styled.div`
  width: 100%;
  /* height: calc(100% - 35px); */
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex:1;
`

export const HomeContent = styled.div`
  flex: 1;
  height: 100%;
`
