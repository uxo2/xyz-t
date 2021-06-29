import { Toolcontainer, Component } from './styled'
import AntdComponent from './AntdComponent'

export const ComponentContainer = () => <Toolcontainer>
  {
    AntdComponent.map(item => {
      return (
        <Component key={item.label} draggable="true">{item.label}</Component>
      )
    })
  }
</Toolcontainer>

export default ComponentContainer
