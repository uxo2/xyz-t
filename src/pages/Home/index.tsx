import HomeHeaderComp from './HomeHeaderComp/index'
import SidebarleftIconList from './SidebarLeftIconsList/index'
import SideBarLeftToolComp from './SidebarLeftTool/index'
import WorkbenchComp from './WorkbenchComp/index'
import {
  HomePageContainer,
  HomeMain
} from './styled'

const HomePage = () => (
  <HomePageContainer>
    <HomeHeaderComp />
    <HomeMain>
      <SidebarleftIconList />
      <SideBarLeftToolComp />
      <WorkbenchComp />
    </HomeMain>
  </HomePageContainer>
)

export default HomePage
