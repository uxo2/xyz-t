import { StepBackwardOutlined, StepForwardOutlined, ClearOutlined, CompressOutlined, EyeOutlined } from '@ant-design/icons'
import { ToolBtnComp, WorkbenchHeaderContainer, ToolBtnRightComp, Button } from './styled'
import OpenResourceList from './OpenResourceList'
import { Slider, message } from 'antd'
import i18n from '../../../../utils/i18n'

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
    </ToolBtnRightComp>
  </WorkbenchHeaderContainer>
)


export default WorkbenchHeader
