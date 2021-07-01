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
`
