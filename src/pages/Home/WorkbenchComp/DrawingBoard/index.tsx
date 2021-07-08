import { useState } from 'react'
import Frame, { FrameContextConsumer } from 'react-frame-component'
import { useAppState, useDispatch } from '../../../../contexts/providers'
import { InitialDrawingBoard } from '../../../../utils/constant'
import { PageActions } from '../../../../contexts/actions'

const DrawingBoard = () => {
  const [RenderComp, setsRenderComp] = useState(<main />)

  const {
    workbench: { drawingboardList }
  } = useAppState()

  console.log(drawingboardList)
  const dispatch = useDispatch()

  function allowDrop(event: React.DragEvent) {
    event.preventDefault()
  }

  function drop(event: React.DragEvent) {
    event.preventDefault()

    const dropText = event.dataTransfer.getData("dropData")
    if (dropText) {
      const dropData = JSON.parse(JSON.parse(dropText))

      setsRenderComp(<div>{dropData.label}</div>)

      dispatch({
        type: PageActions.VisibleSidebarLeftIconContainer,
        payload: {
          selectedSideBarLeftIconLabel: '',
          visibleSideBarLeftTool: ''
        }
      })
    }
  }

  return (
    <Frame
      initialContent={InitialDrawingBoard}
      mountTarget='#DrawingBoard'>
      <FrameContextConsumer>
        {
          () => {
            return (<div
              onDrop={evt => drop(evt)}
              onDragOver={allowDrop}
              style={{ width: '100%', height: '100%' }}>
              {RenderComp}
            </div>
            )
          }
        }
      </FrameContextConsumer>
    </Frame>
  )
}

export default DrawingBoard
