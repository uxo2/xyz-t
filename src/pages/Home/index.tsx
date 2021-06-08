import HomeHeaderComp from './HomeHeaderComp/index'
import HomeSidebarLeftBox from './HomeSidebarLeftBox/index'
import HomeSidebarMeta from './HomeSidebarMeta/index'
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
      <HomeSidebarMeta></HomeSidebarMeta>
      <HomeContent></HomeContent>
    </HomeMain>
  </HomePageContainer>
)

export default HomePage
