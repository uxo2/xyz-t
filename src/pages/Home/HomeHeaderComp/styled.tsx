import styled from 'styled-components'

export const HomeHeaderBox = styled.header`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #3c3c3c;
  border-bottom: 1px solid #333f57;
  .logo-box {
    width: 100%;
    height: 100%;
    padding: 7px;
    display: inline-block;
  }
`

interface ButtonPropsAttrs {
  disabled?: boolean
  divider?: boolean
}
export const Button = styled.div`
  display: inline-block;
  width: 50px;
  text-align: center;
  cursor: default;
  height: 100%;
  user-select: none;
  line-height: 34px;
  box-sizing: border-box;
  padding: 0;
  color: ${(props: ButtonPropsAttrs) => props.disabled ? '#928e8e' : '#fff'};
  &:hover {
    background:  ${(props: ButtonPropsAttrs) => props.disabled ? 'transparent' : '#0000003d'}; 
  }
  &.notify {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      background-color: #3a6df0;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      right: 5px;
      top: 5px;
    }
  }
`

export const PopoverContentBox = styled.ul`
  width: 220px;
  margin: 0;
`

export const PopoverContentItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 25px;
  font-size: 14px;
  cursor: pointer;
  text-indent: 5px;
  border-radius: 3px;
  user-select: none;
  > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    svg {
      font-size: 12px;
    }
  }
  &:hover {
    background: #1890ff;
    color: #fff;
  }
  .notify {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      background-color: #3a6df0;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      left: -3px;
      top: 3px;
    }
  }
`

export const PopoverDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin: 2px 0;
`

export const NotityLabel = styled.div`
  width: 100%;
`
