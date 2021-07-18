
import { CaretRightOutlined } from '@ant-design/icons'
import {
  RightBarConfigContainer,
  HeaderContent,
  HeaderTitle,
  HeaderTitleRightConfig,
  CollapseContent
} from './styled/common'

const BaseStructureBox = ({ children, title }: { children: any, title: string }) => {
  console.log(children)
  return (
    <RightBarConfigContainer>
      <HeaderContent>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderTitleRightConfig>
          <CaretRightOutlined />
        </HeaderTitleRightConfig>
      </HeaderContent>
      <CollapseContent>
        {children}
      </CollapseContent>
    </RightBarConfigContainer>
  )
}
export default BaseStructureBox