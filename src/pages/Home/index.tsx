import HomeHeaderComp from './HomeHeaderComp'
import {
  HomePageContainer,
  HomeMain,
  HomeSidebarLeftBox,
  HomeContent
} from './styled'

const HomePage = () => (
  <HomePageContainer>
    <HomeHeaderComp></HomeHeaderComp>
    <HomeMain>
      <HomeSidebarLeftBox></HomeSidebarLeftBox>
      <HomeContent></HomeContent>
    </HomeMain>
  </HomePageContainer>
)

export default HomePage
