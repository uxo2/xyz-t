import { Toolcontainer } from './styled'
import baseMaterial from '../../../../control/baseMaterial'

export const ComponentContainer = () => {
  const componentTags = Object.values(baseMaterial['element-ui'])
  const dragStart = (event: React.DragEvent<HTMLDivElement>, dragObj: string) => {
    event.dataTransfer.setData("Text", JSON.stringify(dragObj))
  }

  return (
    <Toolcontainer>
      {
        componentTags.map(item => {
          return (
            <div className="component" key={item.label} draggable="true" onDragStart={event => dragStart(event, JSON.stringify(item))}>{item.label}</div>
          )
        })
      }
    </Toolcontainer>
  )
}

export default ComponentContainer
