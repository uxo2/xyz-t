import { ComponentConfigContainer } from './styled'
import { useAppState } from '../../../contexts/providers'

const ComponentConfig = () => {
  const {
    metaView: { visibleSidebarRightConfigBox }
  } = useAppState()

  return (
    <ComponentConfigContainer visible={visibleSidebarRightConfigBox} />
  )
}

export default ComponentConfig
