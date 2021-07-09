import HomeHeaderComp from './HomeHeaderComp/index'
import SidebarleftIconList from './SidebarLeftIconsList/index'
import SideBarLeftToolComp from './SidebarLeftTool/index'
import WorkbenchComp from './WorkbenchComp/index'
import ComponentConfig from './ComponentConfig/index'
// import InitPropsModal from './InitPropsModal/index'
import { HomePageContainer, HomeMain } from './styled'
import { useAppState } from '../../contexts/providers'
import AuxliaryComp from './AuxliaryComp'

const HomePage = () => {
  const {
    metaView: { auxliaryCompName, rightRouterName, visibleSidebarRightConfigBox }
  } = useAppState()

  return (
    <HomePageContainer>
      <HomeHeaderComp />
      <HomeMain>
        <SidebarleftIconList />
        <SideBarLeftToolComp />
        {
          auxliaryCompName ? <AuxliaryComp.OperationGuide /> : (
            <>
              <WorkbenchComp />
              <ComponentConfig routename={rightRouterName} visible={visibleSidebarRightConfigBox} />
            </>
          )
        }
      </HomeMain>
      {/* <InitPropsModal></InitPropsModal> */}
    </HomePageContainer>
  )
}

export default HomePage
