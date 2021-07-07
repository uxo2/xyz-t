import { uid } from 'react-uid'
import Frame, { FrameContextConsumer } from 'react-frame-component'
// import DrawingBoard from './DrawingBoard'
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

console.log(document, window)

export const WorkbenchComp = () => {

  const RenderIfraneChildren = (document: Document, window: Window) => {
    console.log(document, window)

    function iframeDrag(event: React.DragEvent) {
      event.stopPropagation()
      event.preventDefault()
      console.log("drop")
    } 
    
    function iframeDragOver(event: React.DragEvent) {
      event.stopPropagation()
      console.log('dragover')
    }

    // eslint-disable-next-line react/destructuring-assignment
    document.addEventListener('dropend', () => iframeDrag)
    // eslint-disable-next-line react/destructuring-assignment
    document.addEventListener('dragover', () => iframeDragOver)

    function allowDrop(event: React.DragEvent) {
      event.preventDefault()
    }

    function drop(event:React.DragEvent) {
      event.preventDefault()

      const dropText = event.dataTransfer.getData("dropData")
      if (dropText) {
        const dropData = JSON.parse(dropText)

        console.log(dropData)
      }
    }
  
    return <div onDrop={evt => drop(evt)} onDragOver={allowDrop} className="frame-drawboard-content">123</div>
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
              {/* <DrawingBoardContainer /> */}
              <FrameContextConsumer>
                {
                  ({document, window}) => {
                    return RenderIfraneChildren(document, window)
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
