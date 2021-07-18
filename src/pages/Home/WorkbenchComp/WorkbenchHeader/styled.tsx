import styled from "styled-components"

export const WorkbenchHeaderContainer = styled.div`
  width: 100%;
  height: 30px;
  background-color: #0a101b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .slider-box {
    width: 150px;
  }
`

export const ToolBtnComp = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const ToolBtnRightComp = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`

export const Button = styled.div`
  width: 45px;
  line-height: 30px;
  height: 30px;
  text-align: center;
  cursor: default;
  &:hover {
    background: #85b1d65c;
  }
`
