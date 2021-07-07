import { useState } from 'react'
import { uid } from 'react-uid'
import Frame, { FrameContextConsumer } from 'react-frame-component'
import WorkbenchHeader from './WorkbenchHeader'
import {InitialDrawingBoard} from '../../../utils/constant'
import {
  WorkbenchBox, DividerWorkbenchVertical, DividerWorkbenchHorizontal,
  IframeContainer, IframeBox, IframeContent, FillCorner
} from './styled'

const DividerContainer = () => {
  const dividerDom = Array(100).fill(100).map((val, index) => {
    return (
      <span
        className="number"
        key={uid({
          val, index
        })}
      >{index * val / 2}</span>
    )
  })

  return (
    <>
      <DividerWorkbenchVertical className="left-divider">
        {dividerDom}
      </DividerWorkbenchVertical>
      <DividerWorkbenchHorizontal className="top-divider">
        {dividerDom}
      </DividerWorkbenchHorizontal>
    </>
  )
}

export const WorkbenchComp = () => {
  const [RenderComp, setsRenderComp] = useState(<main />)

  function allowDrop(event: React.DragEvent) {
    event.preventDefault()
  }
  
  function drop(event:React.DragEvent) {
    event.preventDefault()
  
    const dropText = event.dataTransfer.getData("dropData")
    if (dropText) {
      const dropData = JSON.parse(JSON.parse(dropText))

      setsRenderComp(<div>{dropData.label}</div>)
    }
  }

  return (
    <WorkbenchBox>
      <WorkbenchHeader />
      <IframeContainer>
        <IframeBox>
          <IframeContent id="iframeMount">
             <Frame 
              initialContent={InitialDrawingBoard}
              mountTarget='#DrawingBoard'>
              <FrameContextConsumer>
                  {
                    ({document, window}) => {
                      console.log(document, window)
                      return (<div 
                        onDrop={evt => drop(evt)} 
                        onDragOver={allowDrop}
                        style={{width: '100%', height: '100%'}}>
                          {RenderComp}
                        </div>
                      )
                    }
                  }
              </FrameContextConsumer>
            </Frame>
          </IframeContent>
        </IframeBox>
        <FillCorner className="top-left" />
        <DividerContainer />
      </IframeContainer>
    </WorkbenchBox>
  )
}

export default WorkbenchComp
