import { Slider, message } from 'antd'
import { DoubleRightOutlined, DoubleLeftOutlined, LeftOutlined, RightOutlined, ClearOutlined, CompressOutlined, EyeOutlined } from '@ant-design/icons'
import { ToolBtnComp, WorkbenchHeaderContainer, ToolBtnRightComp, Button } from './styled'
import { useAppState, useDispatch } from '../../../../contexts/providers'
import { PageActions } from '../../../../contexts/actions'
import OpenResourceList from './OpenResourceList'
import i18n from '../../../../utils/i18n'

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
      {visibleSidebarRightConfigBox ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
    </Button>
  )
}

const WorkbenchHeader = () => (
  <WorkbenchHeaderContainer>
    <ToolBtnComp>
      <Button onClick={() => {
        message.warning(i18n.t('toast.unfinish'))
      }}>
        <LeftOutlined />
      </Button>
      <Button onClick={() => {
        message.warning(i18n.t('toast.unfinish'))
      }}>
        <RightOutlined />
      </Button>
      <Button onClick={() => {
        message.warning(i18n.t('toast.unfinish'))
      }}>
        <ClearOutlined />
      </Button>
      <Button onClick={() => {
        message.warning(i18n.t('toast.unfinish'))
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
