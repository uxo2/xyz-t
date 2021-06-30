import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import { ComponentConfigContainer, ComponentConfigClose } from './styled'
import { useAppState, useDispatch } from '../../../contexts/providers'
import { PageActions } from '../../../contexts/actions'

const ComponentConfig = () => {
  const {
    metaView: { visibleSidebarRightConfigBox }
  } = useAppState()
  const dispatch = useDispatch()

  return (
    <ComponentConfigContainer visible={visibleSidebarRightConfigBox}>
      <ComponentConfigClose
        className="component-config-visible-btn"
        onClick={() => {
          dispatch({
            type: PageActions.VisibleRightConfigComp,
            payload: {
              visibleSidebarRightConfigBox: !visibleSidebarRightConfigBox
            }
          })
        }}
      >
        {visibleSidebarRightConfigBox ? <RightOutlined /> : <LeftOutlined />}
      </ComponentConfigClose>
    </ComponentConfigContainer>
  )
}

export default ComponentConfig
