import Frame, { FrameContextConsumer } from 'react-frame-component'
import { uid } from 'react-uid'
import { useAppState, useDispatch } from '../../../../contexts/providers'
import { InitialDrawingBoard } from '../../../../utils/constant'
import { DrawingBoardActions, PageActions } from '../../../../contexts/actions'

const DrawingBoard = () => {
  const {
    workbench: { drawingboardList }
  } = useAppState()

  const dispatch = useDispatch()

  const RenderComp = drawingboardList.map((item: { label: string }) => {
    return (
      <div key={uid(item.label)}>{item.label}</div>
    )
  })

  function allowDrop(event: React.DragEvent) {
    event.preventDefault()
  }

  function drop(event: React.DragEvent) {
    event.preventDefault()

    const dropText = event.dataTransfer.getData("dropData")

    if (dropText) {
      const compData = JSON.parse(JSON.parse(dropText))

      dispatch({
        type: DrawingBoardActions.PushDrawingBoard,
        payload: {
          activeComponent: compData
        }
      })
      dispatch({
        type: PageActions.ActiveRightBarConfigRouteName,
        payload: {
          rightRouterName: compData.rightRouterName
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
