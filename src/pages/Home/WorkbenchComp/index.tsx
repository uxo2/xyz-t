import { useState, useEffect } from 'react'
import { uid } from 'react-uid'
import WorkbenchHeader from './WorkbenchHeader'
import { DividerWorkbenchVerticalContainer, DividerWorkbenchHorizontalContainer, WorkbenchBox, DividerWorkbenchVertical, DividerWorkbenchHorizontal, IframeContainer, IframeBox, IframeContent } from './styled'
import DrawingBoard from './DrawingBoard/index'

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

export const WorkbenchComp = () => {
  return (
    <WorkbenchBox>
      <WorkbenchHeader />
      <IframeContainer>
        <IframeBox>
          <IframeContent id="iframeMount">
            <DrawingBoard />
          </IframeContent>
        </IframeBox>
        <DividerContainer />
      </IframeContainer>
    </WorkbenchBox>
  )
}

export default WorkbenchComp
