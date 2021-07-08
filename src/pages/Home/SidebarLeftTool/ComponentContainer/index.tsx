import { uid } from 'react-uid'
import { Toolcontainer, GroupBlock, GroupName, GroupChildren, CompUnit } from './styled'
import baseMaterial from '../../../../control/baseMaterial'

export const ComponentContainer = () => {
  const componentTags = Object.values(baseMaterial['ant-design'])
  const dragStart = (event: React.DragEvent<HTMLDivElement>, dragObj: string) => {
    event.dataTransfer.setData("dropData", JSON.stringify(dragObj))
  }

  return (
    <Toolcontainer>
      {
        componentTags.map(group => {
          return (
            <GroupBlock key={uid(group.groupName)}>
              <GroupName>{group.groupName}</GroupName>
              <GroupChildren >
                {
                  group.children?.map(item => {
                    return (
                      <CompUnit draggable="true" key={uid(item.label)} onDragStart={event => dragStart(event, JSON.stringify(item))}>{item.label}</CompUnit>
                    )
                  })
                }
              </GroupChildren>
            </GroupBlock>
          )
        })
      }
    </Toolcontainer>
  )
}

export default ComponentContainer
