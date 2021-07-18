import { Input } from 'antd'
import BaseStructureBox from './baseStructure'
import { LineBlockLabel, LineBlock } from './styled/common'


export default () => {
  return (
    <BaseStructureBox title="基础配置">
      <LineBlock>
        <LineBlockLabel>标题</LineBlockLabel>
        <Input allowClear size="small" placeholder="请输入标题" />
      </LineBlock>
      <LineBlock>
        <LineBlockLabel>标题</LineBlockLabel>
        <Input allowClear size="small" placeholder="请输入标题" />
      </LineBlock>
    </BaseStructureBox>
  )
}
