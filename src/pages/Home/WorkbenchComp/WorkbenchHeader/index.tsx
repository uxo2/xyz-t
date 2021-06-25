import { StepBackwardOutlined, StepForwardOutlined, ClearOutlined, CompressOutlined, EyeOutlined } from '@ant-design/icons'
import { ToolBtnComp, WorkbenchHeaderContainer, ToolBtnRightComp, Button } from './styled'
import { Slider, message } from 'antd'

const WorkbenchHeader = () => (
  <WorkbenchHeaderContainer>
    <ToolBtnComp>
      <Button onClick={() => {
        message.warning('暂未完成，尽请期待。。。')
      }}>
        <StepBackwardOutlined />
      </Button>
      <Button onClick={() => {
        message.warning('暂未完成，尽请期待。。。')
      }}>
        <StepForwardOutlined />
      </Button>
      <Button onClick={() => {
        message.warning('未选中需清除样式的组件！')
      }}>
        <ClearOutlined />
      </Button>
      <Button onClick={() => {
        message.warning('暂未完成，尽请期待。。。')
      }}>
        <CompressOutlined />
      </Button>
    </ToolBtnComp>
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
