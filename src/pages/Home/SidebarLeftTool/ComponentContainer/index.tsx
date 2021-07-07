import { uid } from 'react-uid'
import { Toolcontainer } from './styled'
import baseMaterial from '../../../../control/baseMaterial'

export const ComponentContainer = () => {
  const componentTags = Object.values(baseMaterial['ant-design'])
  const dragStart = (event: React.DragEvent<HTMLDivElement>, dragObj: string) => {
    event.dataTransfer.setData("dropData", JSON.stringify(dragObj))
  }
  
  return (
    <Toolcontainer>
      {
        componentTags.map(item => {
          return (
            <div key={uid(item.label)} className="component" draggable="true" onDragStart={event => dragStart(event, JSON.stringify(item))}>{item.label}</div>
          )
        })
      }
    </Toolcontainer>
  )
}

export default ComponentContainer
