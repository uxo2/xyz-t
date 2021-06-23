import HomeHeaderComp from './HomeHeaderComp/index'
import SidebarleftIconList from './SidebarLeftIconsList/index'
import SideBarLeftToolComp from './SidebarLeftTool/index'
import WorkbenchComp from './WorkbenchComp/index'
import InitPropsModal from './InitPropsModal/index'
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
    <InitPropsModal></InitPropsModal>
  </HomePageContainer>
)

export default HomePage
