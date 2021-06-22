import { Toolcontainer, ComponentBox, TitleLabel } from './styled'
import { ElementComponentList } from '../../../../controls/index'

export const ComponentContainer = () => <Toolcontainer>
  {
    ElementComponentList.map((item, index) => <ComponentBox key={index}>
      {item.icon ? <i className={`${item.icon} iconfont`} /> : ''}
      <TitleLabel>{item.label}</TitleLabel>
    </ComponentBox>
    )
  }
</Toolcontainer>

export default ComponentContainer
