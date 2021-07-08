import { useState, useEffect } from 'react'
import { uid } from 'react-uid'
import Frame, { FrameContextConsumer } from 'react-frame-component'
import WorkbenchHeader from './WorkbenchHeader'
import { InitialDrawingBoard } from '../../../utils/constant'
import { DividerWorkbenchVerticalContainer, DividerWorkbenchHorizontalContainer, WorkbenchBox, DividerWorkbenchVertical, DividerWorkbenchHorizontal, IframeContainer, IframeBox, IframeContent } from './styled'


const dividerDom = Array(100).fill(100).map((val, index) => {
  return (
    <span className="number" key={uid({ val, index })} >{index * val / 2}</span>
  )
})

const DividerContainer = () => {
  const [scrollTopValue, setscrollTopValue] = useState(0)
  const [scrollLeftValue, setscrollLeftValue] = useState(0)

  useEffect(() => {
    const dom = document.getElementById('iframeMount') as HTMLElement

    dom.addEventListener('scroll', () => {
      const { scrollTop, scrollLeft } = dom

      if (scrollTopValue !== scrollTop) {
        setscrollTopValue(scrollTop)
      }

      if (scrollLeftValue !== scrollLeft) {
        setscrollLeftValue(scrollLeft)
      }
    })
  })

  return (
    <>
      <DividerWorkbenchVerticalContainer>
        <DividerWorkbenchVertical className="left-divider" style={{ top: `${- scrollTopValue}px` }}>
          {dividerDom}
        </DividerWorkbenchVertical>
      </DividerWorkbenchVerticalContainer>
      <DividerWorkbenchHorizontalContainer>
        <DividerWorkbenchHorizontal className="top-divider" style={{ left: `${- scrollLeftValue}px` }}>
          {dividerDom}
        </DividerWorkbenchHorizontal>
      </DividerWorkbenchHorizontalContainer>
    </>
  )
}

const Iframe = () => {
  const [RenderComp, setsRenderComp] = useState(<main />)

  function allowDrop(event: React.DragEvent) {
    event.preventDefault()
  }

  function drop(event: React.DragEvent) {
    event.preventDefault()

    const dropText = event.dataTransfer.getData("dropData")
    if (dropText) {
      const dropData = JSON.parse(JSON.parse(dropText))

      setsRenderComp(<div>{dropData.label}</div>)
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

export const WorkbenchComp = () => {
  return (
    <WorkbenchBox>
      <WorkbenchHeader />
      <IframeContainer>
        <IframeBox>
          <IframeContent id="iframeMount">
            <Iframe />
          </IframeContent>
        </IframeBox>
        <DividerContainer />
      </IframeContainer>
    </WorkbenchBox>
  )
}

export default WorkbenchComp
