import styled from 'styled-components'

export const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  background-image: url('https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-dark-wwdc-2020-5120x2880-1432.jpg');
`

export const HomeMain = styled.div`
  width: 100%;
  height: calc(100% - 35px);
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const HomeContent = styled.div`
  flex: 1;
  height: 100%;
`
