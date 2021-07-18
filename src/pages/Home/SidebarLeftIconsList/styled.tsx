import styled from 'styled-components'

interface SelectIconProps {
  selected?: boolean
}

export const SidebarContainer = styled.div`
  width: 45px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`

export const SidebarleftIconList = styled.div`
  width: 100%;
  max-height: calc(100% - 200px);
  overflow: hidden;
  background-color: #333333;
  &:hover {
    overflow-y: auto;
    overflow-x: hidden;
    color: #fff;
  }
`

export const SideBarIconLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  line-height: 45px;
  height: 45px;
  color: #8492a6;
  font-size: 22px;
  text-align: center;
  background-color: ${(props: SelectIconProps) => props.selected ? '#252526' : ''};
  &:hover {
    background-color: #252526;
  }
  a {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    &.acitiveLink {
      background: #252526;
    }
  }
`

export const SidebarFooterList = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #333333;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    line-height: 45px;
    height: 45px;
    color: #8492a6;
    font-size: 22px;
    text-align: center;
    &:hover {
      color: #fff;
      background-color: #252526;
    }
    a {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      &.acitiveLink {
        background: #252526;
      }
    }
  }
`