import { useState, useEffect } from 'react'
import { uid } from 'react-uid'
import WorkbenchHeader from './WorkbenchHeader'
import {
  WorkbenchBox,
  DividerWorkbenchVertical,
  DividerWorkbenchHorizontal,
  IframeContainer,
  IframeBox, IframeContent,
  IframeWorkbench,
  ScrollRight,
  ScrollBottom,
  FillCorner,
  ScrollBlockHorizontal,
  ScrollBlockRight
} from './styled'

export const WorkbenchComp = () => {
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

  const [iframeView, setIframeView] = useState({
    width: 1920,
    height: 1080
  })
  const [scrollBottomWidth, setscrollBottomWidth] = useState(0)

  useEffect(() => {
    const { offsetWidth, clientWidth } = document.getElementById('scrollBottom') as HTMLElement
    const scrollButtonWidth = Math.floor(offsetWidth * offsetWidth / iframeView.width)

    setscrollBottomWidth(scrollButtonWidth)

    const scrollBottomHorizontal = document.getElementById('scrollBottomHorizontal') as HTMLElement
    scrollBottomHorizontal.onmousedown = evt => {
      const b1 = scrollBottomHorizontal.offsetLeft - evt.pageX
      const width = scrollBottomHorizontal.clientWidth
      scrollBottomHorizontal.onmousemove = e => {
        e.stopPropagation()
        e.preventDefault()
        if (b1 + e.pageX <= 5) {
          scrollBottomHorizontal.style.left = '0px'
        } else if (width + b1 + e.pageX - 5 >= clientWidth) {
          scrollBottomHorizontal.style.left = `${clientWidth - width}px`
        } else {
          scrollBottomHorizontal.style.left = `${b1 + e.pageX}px`
        }
        return false
      }
      scrollBottomHorizontal.onmouseup = e => {
        scrollBottomHorizontal.onmousemove = null
        scrollBottomHorizontal.onmouseup = null
        console.log(12)
        e.stopPropagation()
        e.preventDefault()
        return false
      }
      return false
    }
  }, [iframeView])

  const [scrollRightHeight, setscrollRightHeight] = useState(0)

  useEffect(() => {
    const { offsetHeight, clientHeight } = document.getElementById('ScrollRight') as HTMLElement
    const scrollButtonHeight = Math.floor(offsetHeight * offsetHeight / iframeView.height)

    setscrollRightHeight(scrollButtonHeight)

    const scrollBlockVertical = document.getElementById('ScrollBlockVertical') as HTMLElement
    scrollBlockVertical.onmousedown = evt => {
      const b1 = scrollBlockVertical.offsetTop - evt.pageY
      const height = scrollBlockVertical.clientHeight

      scrollBlockVertical.onmousemove = e => {
        e.stopPropagation()
        e.preventDefault()

        if (b1 + e.pageY <= 5) {
          scrollBlockVertical.style.top = '0px'
        } else if (height + b1 + e.pageY - 5 >= clientHeight) {
          scrollBlockVertical.style.top = `${clientHeight - height}px`
        } else {
          scrollBlockVertical.style.top = `${b1 + e.pageY}px`
        }
        return false
      }
      scrollBlockVertical.onmouseup = e => {
        scrollBlockVertical.onmousemove = null
        scrollBlockVertical.onmouseup = null
        e.stopPropagation()
        e.preventDefault()
        return false
      }
      return false
    }
  }, [iframeView])

  return (
    <WorkbenchBox>
      <WorkbenchHeader />
      <IframeContainer>
        <IframeBox>
          <IframeContent>
            <IframeWorkbench src="" />
          </IframeContent>
        </IframeBox>
        <FillCorner className="top-left" onClick={() => {
          setIframeView({
            width: 1140,
            height: 748
          })
        }} />
        <FillCorner className="top-right" />
        <FillCorner className="bottom-left" />
        <FillCorner className="bottom-right" />
        <DividerWorkbenchVertical className="left-divider">
          {dividerDom}
        </DividerWorkbenchVertical>
        <DividerWorkbenchVertical className="right-divider">
          {dividerDom}
        </DividerWorkbenchVertical>
        <DividerWorkbenchHorizontal className="top-divider">
          {dividerDom}
        </DividerWorkbenchHorizontal>
        <DividerWorkbenchHorizontal className="bottom-divider">
          {dividerDom}
        </DividerWorkbenchHorizontal>
        <ScrollRight id="ScrollRight">
          <ScrollBlockRight height={scrollRightHeight} id="ScrollBlockVertical" />
        </ScrollRight>
        <ScrollBottom id="scrollBottom">
          <ScrollBlockHorizontal width={scrollBottomWidth} id="scrollBottomHorizontal" />
        </ScrollBottom>
      </IframeContainer>
    </WorkbenchBox>
  )
}

export default WorkbenchComp
