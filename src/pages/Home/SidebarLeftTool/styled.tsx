import styled from 'styled-components'

interface SidebarLeftToolProps {
  visible?: boolean
}

export const SidebarLeftTool = styled.div`
  display: ${(props: SidebarLeftToolProps) => props.visible ? 'block' : 'none'};
  width: 200px;
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  background-color: #252526;
  color: var(--theme-color);
`

export default SidebarLeftTool
