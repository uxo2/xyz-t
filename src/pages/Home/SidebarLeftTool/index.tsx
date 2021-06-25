import { useAppState } from '../../../contexts/providers'
import { SIDEBAR_ICONS_LIST } from '../../../utils/constant'
import {
  SidebarLeftTool
} from './styled'

const SideBarLeftToolComp = () => {
  const {
    metaView: {
      visibleSideBarLeftTool,
      selectedSideBarLeftIconLabel
    }
  } = useAppState()

  const ComponentMap = SIDEBAR_ICONS_LIST.header.find(item => item.value === selectedSideBarLeftIconLabel)

  return (
    <SidebarLeftTool className="scroll-small" visible={visibleSideBarLeftTool}>
      {ComponentMap ? <ComponentMap.Comp /> : ""}
    </SidebarLeftTool>
  )
}

export default SideBarLeftToolComp
