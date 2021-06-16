import styled from 'styled-components'

export const HomeHeaderBox = styled.header`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #282b33;
  .logo-box {
    width: 100%;
    height: 100%;
    padding: 7px;
    display: inline-block;
  }
`


interface ButtonPropsAttrs {
  disabled?: Boolean
  divider?: Boolean
}
export const Button = styled.div`
  display: inline-block;
  width: 50px;
  text-align: center;
  cursor: pointer;
  height: 100%;
  user-select: none;
  line-height: 34px;
  box-sizing: border-box;
  padding: 0;
  color: ${(props: ButtonPropsAttrs) => props.disabled ? '#928e8e' : '#fff'};
  &:hover {
    background:  ${(props: ButtonPropsAttrs) => props.disabled ? 'transparent' : '#0000003d'}; 
  }
`

export const PopoverContentBox = styled.ul`
  width: 220px;
  margin: 0;
`

export const PopoverContentItem = styled.li`
  line-height: 25px;
  font-size: 14px;
  cursor: pointer;
  text-indent: 5px;
  border-radius: 3px;
  user-select: none;
  &:hover {
    background: #1890ff;
    color: #fff;
  }
`

export const PopoverDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin: 2px 0;
`
