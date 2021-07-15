import styled from 'styled-components'

export const SpinnerContainer = styled.div`
  display: block;
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 1031;
`

export const SpinnerLoadingBox = styled.div`
  animation: 400ms linear infinite spinner;
  border-bottom: 2px solid transparent;
  border-left: 2px solid #29d;
  border-radius: 50%;
  border-right: 2px solid transparent;
  border-top: 2px solid #29d;
  box-sizing: border-box;
  height: 20px;
  width: 20px;
`
interface BarProps {
  progress: number
  animationDuration: number
}

export const BarContainer = styled.div`
  background: #29d;
  height: 2px;
  left: 0;
  margin-left: ${(props: BarProps) => `${(-1 + props.progress) * 100}%`};
  position: fixed;
  top: 0;
  transition: ${(props: BarProps) => `margin-left ${props.animationDuration}ms linear`};
  width: 100%;
  z-index: 1031;
`

export const BarContent = styled.div`
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  display: block;
  height: 100%;
  opacity: 1;
  position: absolute;
  right: 0;
  transform: rotate(3deg) translate(0px, -4px);
  width: 100px;
`