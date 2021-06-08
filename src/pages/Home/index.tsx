import HomeHeaderComp from './HomeHeaderComp'
import HomeSidebarLeftBox from './HomeSidebarLeftBox'
import {
  HomePageContainer,
  HomeMain,
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
