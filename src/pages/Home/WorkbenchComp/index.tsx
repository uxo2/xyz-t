import { useRef, useEffect } from 'react'
import { uid } from 'react-uid'
import IframeEvt from '../../../shell/eventDrag'

import WorkbenchHeader from './WorkbenchHeader'
import {
  WorkbenchBox, DividerWorkbenchVertical, DividerWorkbenchHorizontal,
  IframeContainer, IframeBox, IframeContent, IframeWorkbench, FillCorner
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

const getIframe = () => document.getElementById('workbenchIframeRef') as HTMLIFrameElement

export const WorkbenchComp = () => {
  const iframeRef = useRef<HTMLIFrameElement>()

  useEffect(() => {
    iframeRef.current = getIframe()

    const iframeContent = iframeRef.current.contentWindow as Window
    const iframedemo = new IframeEvt('sd', iframeContent)

    console.log(iframedemo)
  })

  const iframeSrcDoc = ` <style>
  .droptarget {
      position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;width: 100%;height: 100%;
  }
  </style>
  <div class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
  <script>
  function allowDrop(event) {
      event.preventDefault();
  }
  function drop(event) {
    event.preventDefault();
    console.log('drop')
    let a = event.dataTransfer.getData("Text")
    console.log(JSON.parse(JSON.parse(a)).group)
  }
  </script>`

  return (
    <WorkbenchBox>
      <WorkbenchHeader />
      <IframeContainer>
        <IframeBox>
          <IframeContent>
            <IframeWorkbench
              src=""
              scrolling="no"
              frame-border="0"
              srcDoc={iframeSrcDoc}
              allow-transparency="no"
              id="workbenchIframeRef" />
          </IframeContent>
        </IframeBox>
        <FillCorner className="top-left" />
        <DividerContainer />
      </IframeContainer>
    </WorkbenchBox>
  )
}

export default WorkbenchComp
