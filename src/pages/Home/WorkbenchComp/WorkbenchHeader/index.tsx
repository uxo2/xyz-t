import {
  Slider,
  message
} from 'antd'
import {
  RightOutlined,
  LeftOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  ClearOutlined,
  CompressOutlined,
  EyeOutlined
} from '@ant-design/icons'
import {
  ToolBtnComp,
  WorkbenchHeaderContainer,
  ToolBtnRightComp,
  Button
} from './styled'
import OpenResourceList from './OpenResourceList'
import i18n from '../../../../utils/i18n'
import {
  useAppState,
  useDispatch
} from '../../../../contexts/providers'
import { PageActions } from '../../../../contexts/actions'

const ComponentConfig = () => {
  const {
    metaView: {
      visibleSidebarRightConfigBox
    }
  } = useAppState()
  const dispatch = useDispatch()

  return (
    <Button
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
    </Button>
  )
}

const WorkbenchHeader = () => (
  <WorkbenchHeaderContainer>
    <ToolBtnComp>
      <Button onClick={() => {
        message.warning(i18n.t('toast.unfinish'))
      }}>
        <StepBackwardOutlined />
      </Button>
      <Button onClick={() => {
        message.warning(i18n.t('toast.unfinish'))
      }}>
        <StepForwardOutlined />
      </Button>
      <Button onClick={() => {
        message.warning('i')
      }}>
        <ClearOutlined />
      </Button>
      <Button onClick={() => {
        message.warning('暂未完成，尽请期待。。。')
      }}>
        <CompressOutlined />
      </Button>
    </ToolBtnComp>
    <OpenResourceList />
    <ToolBtnRightComp>
      <Button>
        <EyeOutlined />
      </Button>
      <Slider
        defaultValue={30}
        className="slider-box"
        min={20}
        max={200}
        tipFormatter={value => `${value} %`}
      />
      <ComponentConfig />
    </ToolBtnRightComp>
  </WorkbenchHeaderContainer>
)


export default WorkbenchHeader
