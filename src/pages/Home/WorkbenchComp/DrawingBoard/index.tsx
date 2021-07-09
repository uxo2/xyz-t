import { useState } from 'react'
import Frame, { FrameContextConsumer } from 'react-frame-component'
import shortuuid from 'short-uuid'
import { useAppState, useDispatch } from '../../../../contexts/providers'
import { InitialDrawingBoard } from '../../../../utils/constant'
import { isValidKey } from '../../../../utils/index'
import { DrawingBoardActions, PageActions } from '../../../../contexts/actions'
import { AntdRender } from '../../../../control/renderComponent/index'

const RenderComp = () => {
  const {
    workbench: { drawingboardList }
  } = useAppState()

  return drawingboardList.map((item: { componentfield: string }) => {
    let RenderCompItem: any

    if (isValidKey(item.componentfield, AntdRender)) {
      RenderCompItem = AntdRender[item.componentfield]
      return <RenderCompItem key={shortuuid.generate()} />
    }

    return ''
  })
}

const DrawingBoard = () => {
  const [loadingIframe, setloadingIframe] = useState(true)
  const dispatch = useDispatch()

  function allowDrop(event: React.DragEvent) {
    event.preventDefault()
  }

  console.log(loadingIframe)

  function drop(event: React.DragEvent) {
    event.preventDefault()

    const dropText = event.dataTransfer.getData("dropData")

    if (dropText) {
      const compData = JSON.parse(dropText)

      dispatch({
        type: DrawingBoardActions.PushDrawingBoard,
        payload: {
          activeComponent: compData
        }
      })
      dispatch({
        type: PageActions.ActiveRightBarConfigRouteName,
        payload: {
          componentfield: compData.componentfield
        }
      })
    }
  }
  return (
    <>
      <Frame
        initialContent={InitialDrawingBoard}
        mountTarget='#DrawingBoard' style={{ display: loadingIframe ? 'none' : 'none' }}>
        <FrameContextConsumer>
          {
            () => {
              setloadingIframe(false)
              return (<div
                onDrop={evt => drop(evt)}
                onDragOver={allowDrop}
                style={{ width: '100%', height: '100%' }}>
                <RenderComp />
              </div>
              )
            }
          }
        </FrameContextConsumer>
      </Frame>
    </>
  )
}

export default DrawingBoard
