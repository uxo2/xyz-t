import { Toolcontainer, Component } from './styled'
import AntdComponent from './AntdComponent'

export const ComponentContainer = () => {
  return (
    <Toolcontainer>
      {
        AntdComponent.map(item => {
          return (
            <Component draggable="true" key={item.label}>{item.label}</Component>
          )
        })
      }
    </Toolcontainer>
  )
}

export default ComponentContainer
