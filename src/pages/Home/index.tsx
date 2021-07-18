import HomeHeaderComp from './HomeHeaderComp/index'
import SidebarleftIconList from './SidebarLeftIconsList/index'
import SideBarLeftToolComp from './SidebarLeftTool/index'
import WorkbenchComp from './WorkbenchComp/index'
import ComponentConfig from './ComponentConfig/index'
import { HomePageContainer, HomeMain } from './styled'
import { useAppState } from '../../contexts/providers'
import AuxliaryComp from './AuxliaryComp'
import ImageGridLoader from '../../components/Loader/index'

const HomePage = () => {
  const {
    metaView: {
      auxliaryCompName,
      componentfield,
      visibleSidebarRightConfigBox,
      visibleFullLoading,
      fullLoaderProgress,
      fullLoaderInfo
    }
  } = useAppState()

  return (
    <HomePageContainer>
      {visibleFullLoading && <ImageGridLoader progress={fullLoaderProgress} loadInfo={fullLoaderInfo} />}
      <HomeHeaderComp />
      <HomeMain>
        <SidebarleftIconList />
        <SideBarLeftToolComp />
        {
          auxliaryCompName ? <AuxliaryComp.OperationGuide /> : (
            <>
              <WorkbenchComp />
              <ComponentConfig routename={componentfield} visible={visibleSidebarRightConfigBox} />
            </>
          )
        }
      </HomeMain>
    </HomePageContainer>
  )
}

export default HomePage
