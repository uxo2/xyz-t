import styled from 'styled-components'
import iframeBg from '../../../assets/images/iframeBG.png'
import divider1 from '../../../assets/images/divider1.png'
import divider2 from '../../../assets/images/divider2.png'

export const WorkbenchBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  height: 100%;
  color: #fff;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`

export const WorkbenchFooter = styled.div`
  width: 100%;
  height: 28px;
`
export const IframeContainer = styled.div`
  flex: 1;
  position: relative;
  padding: 20px 20px;
  width: 100%;
  box-sizing: border-box;
  background-color: #3c3c3c;
  position: relative;
`

export const IframeBox = styled.div`
  background-image: url(${iframeBg});
  flex: 1;
  position: relative;
  box-sizing: border-box;
  position: absolute;
  left: 20px;
  right: 40px;
  top: 20px;
  bottom: 40px;
  overflow: hidden;
`

export const FillCorner = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #111825;
  z-index: 1;
  
  &.top-left {
    left: 0;
    top: 0;
    border-top: solid 1px #333f57;
    border-left: solid 1px #333f57;
  }
  &.top-right {
    right: 20px;
    top: 0;
    border-top: solid 1px #333f57;
    border-right: solid 1px #333f57;
  }
  &.bottom-left {
    bottom: 20px;
    left: 0;
    border-bottom: solid 1px #333f57;
    border-left: solid 1px #333f57;
  }
  &.bottom-right {
    bottom: 20px;
    right: 20px;
    border-bottom: solid 1px #333f57;
    border-right: solid 1px #333f57;
  }
`

export const IframeWorkbench = styled.iframe`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  border: none;
  margin: 0;
  padding: 0;
  width: 1920px;
  height: 1080px;
`

export const DividerWorkbenchVertical = styled.div`
  position: absolute;
  top: 20px;
  bottom: 40px;
  width: 20px;
  background-image: url(${divider2});
  background-repeat: repeat-y;
  background-position-y: -30px;
  border-right: solid 1px #333f57;
  overflow: hidden;
  .number {
    writing-mode: tb-rl;
    position: relative;
    font-size: 12px;
    height: 50px;
    width: 100%;
    top: 19px;
    text-align: left;
    text-indent: 3px;
    user-select: none;
  }
  &.left-divider {
    left: 0;
  }
  &.right-divider {
    right: 20px;
  }
`
export const DividerWorkbenchHorizontal = styled.div`
  position: absolute;
  left: 20px;
  right: 40px;
  height: 20px;
  background-position-x: 20px;
  background-image: url(${divider1});
  background-repeat: repeat-x;
  border-bottom: solid 1px #333f57;
  box-sizing: border-box;
  overflow: hidden;
  &.top-divider {
    top: 0;
  }
  &.bottom-divider {
    bottom: 20px;
  }
  .number {
    position: relative;
    font-size: 12px;
    height: 100%;
    width: 50px;
    left: 19px;
    text-align: left;
    text-indent: 3px;
    display: inline-block;
    user-select: none;
  }
`

export const ScrollRight = styled.div`
  position: absolute;
  right: 0;
  width: 20px;
  bottom: 40px;
  top: 40px;
  background-color: #1e1e1e;
`

export const ScrollBottom = styled.div`
  position: absolute;
  right: 40px;
  height: 20px;
  bottom: 0;
  left: 40px;
  background-color: #1e1e1e;
`