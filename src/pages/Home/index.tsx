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
    metaView: { auxliaryCompName }
  } = useAppState()

  // console.log(AuxliaryComp, auxliaryCompName, auxliaryCompName && AuxliaryComp[auxliaryCompName])

  return (
    <HomePageContainer>
      <HomeHeaderComp></HomeHeaderComp>
      <HomeMain>
        <SidebarleftIconList></SidebarleftIconList>
        <SideBarLeftToolComp></SideBarLeftToolComp>
        {
          auxliaryCompName ? <AuxliaryComp.operationGuide /> : (
            <>
              <WorkbenchComp></WorkbenchComp>
              <ComponentConfig></ComponentConfig>
            </>
          )
        }
      </HomeMain>
      {/* <InitPropsModal></InitPropsModal> */}
    </HomePageContainer>
  )
}

export default HomePage
