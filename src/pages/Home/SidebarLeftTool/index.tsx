import ComponentContainer from './ComponentContainer/index'
import { useAppState } from '../../../contexts/providers'

import {
  SidebarLeftTool
} from './styled'

const SideBarLeftToolComp = () => {
  const {
    metaView: {
      visibleSideBarLeftTool
    }
  } = useAppState()
  return (
    <SidebarLeftTool className="scroll-small" visible={visibleSideBarLeftTool}>
      <ComponentContainer></ComponentContainer>
    </SidebarLeftTool>
  )
}

export default SideBarLeftToolComp
