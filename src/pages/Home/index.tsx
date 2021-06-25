import HomeHeaderComp from './HomeHeaderComp/index'
import SidebarleftIconList from './SidebarLeftIconsList/index'
import SideBarLeftToolComp from './SidebarLeftTool/index'
import WorkbenchComp from './WorkbenchComp/index'
import ComponentConfig from './ComponentConfig/index'
// import InitPropsModal from './InitPropsModal/index'
import { HomePageContainer, HomeMain } from './styled'

const HomePage = () => (
  <HomePageContainer>
    <HomeHeaderComp></HomeHeaderComp>
    <HomeMain>
      <SidebarleftIconList></SidebarleftIconList>
      <SideBarLeftToolComp></SideBarLeftToolComp>
      <WorkbenchComp></WorkbenchComp>
      <ComponentConfig></ComponentConfig>
    </HomeMain>
    {/* <InitPropsModal></InitPropsModal> */}
  </HomePageContainer>
)

export default HomePage
