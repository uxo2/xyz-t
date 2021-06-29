import styled from 'styled-components'

interface ComponentConfigProps {
  visible?: boolean
}

export const ComponentConfigContainer = styled.div`
  width: ${(props: ComponentConfigProps) => props.visible ? '250px' : '0'};
  height: 100%;
  color: #fff;
  background-color: #0a101b;
  border-left: 1px solid #333f57;
  position: relative;
  &:hover {
    .component-config-visible-btn {
      display: block;
    }
  }
  .component-config-visible-btn {
    display: ${(props: ComponentConfigProps) => props.visible ? 'none' : 'none'};
  }
`

export const ComponentConfigClose = styled.div`
  position: absolute;
  top: calc(50% - 50px);
  left: -15px;
  width: 15px;
  height: 100px;
  line-height: 100px;
  position: absolute;
  background-color: #0000008f;
  z-index: 2;
  cursor: default;
  color: #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`