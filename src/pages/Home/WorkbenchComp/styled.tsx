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
  overflow: hidden;
`

export const IframeBox = styled.div`
  position: absolute;
  left: 20px;
  right: -20px;
  top: 20px;
  bottom: -20px;
  padding: 20px;
  overflow: hidden;
  background-image: url(${iframeBg});
  flex: 1;
  box-sizing: border-box;
  .frame-drawboard-content {
    width: 100%;
    height: 100%;
  }
`

export const IframeContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  ::-webkit-scrollbar {
    position: relative;
    width: 15px;
    height: 15px;
    border-radius: 0;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    position: relative;
    width: 0;
    height: 0;
    padding: 0;
    margin: 0 auto;
    background-color: #0a101b;
    border-radius: 0;
  }
  ::-webkit-resizer {
    background-color: transparent;
    border-radius: 0;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: transparent;
    border-radius: 0;
  }
  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  iframe {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    margin: 0;
    padding: 0;
    width: 1920px;
    height: 1080px;
    .frame-drawboard-content {
      width: 100%;
      height: 100%;
    }
  }
`

export const DividerWorkbenchVerticalContainer = styled.div`
  position: absolute;
  top: 40px;
  bottom:0;
  width: 20px;
  left: 0;
  overflow: hidden;
`

export const DividerWorkbenchVertical = styled.div`
  position: relative;
  width: 20px;
  background-image: url(${divider2});
  background-repeat: repeat-y;
  background-position-y: 0;
  border-right: solid 1px #333f57;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .number {
    writing-mode: tb-rl;
    position: relative;
    font-size: 12px;
    height: 50px;
    width: 100%;
    top: 0;
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

export const DividerWorkbenchHorizontalContainer = styled.div`
  position: absolute;
  left: 20px;
  right: 0;
  height: 20px;
  top: 0;
  overflow: hidden;
`
export const DividerWorkbenchHorizontal = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 5000px;
  background-position-x: 0;
  background-image: url(${divider1});
  background-repeat: repeat-x;
  border-bottom: solid 1px #333f57;
  box-sizing: border-box;
  overflow: hidden;
  margin-left: 20px;
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
    left: 0;
    text-align: left;
    text-indent: 3px;
    display: inline-block;
    user-select: none;
  }
`
