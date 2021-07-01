import { useRef, useEffect } from 'react'
import { uid } from 'react-uid'
import WorkbenchHeader from './WorkbenchHeader'
import {
  WorkbenchBox,
  DividerWorkbenchVertical,
  DividerWorkbenchHorizontal,
  IframeContainer,
  IframeBox, IframeContent,
  IframeWorkbench,
  FillCorner
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

const getIframe = () => document.getElementById('dnd-iframe') as HTMLIFrameElement

export const WorkbenchComp = () => {
  const iframeRef = useRef<HTMLIFrameElement>()

  useEffect(() => {
    iframeRef.current = getIframe()

    const iframeContent = iframeRef.current.contentWindow!

    iframeContent.addEventListener('dragover', onDragover)
    

    return () => {

    }
  })
  return (
    <WorkbenchBox>
      <WorkbenchHeader />
      <IframeContainer>
        <IframeBox>
          <IframeContent>
            <IframeWorkbench src="" srcDoc={iframeData} />
          </IframeContent>
        </IframeBox>
        <FillCorner className="top-left" />
        <DividerContainer />
      </IframeContainer>
    </WorkbenchBox>
  )
}

export default WorkbenchComp
