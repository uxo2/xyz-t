import styled from 'styled-components'

export const HomeHeaderBox = styled.header`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #e3e4e5;
  .logo-box {
    width: 100%;
    height: 100%;
    padding: 7px;
    display: inline-block;
  }
`
export const Button = styled.div`
  display: inline-block;
  padding: 2px 4px;
  color: #fff;
  width: 50px;
  text-align: center;
  cursor: pointer;
`

export const PopoverContentBox = styled.ul`
  width: 220px;
  margin: 0;
  li {
    line-height: 25px;
    font-size: 14px;
    cursor: pointer;
    text-indent: 5px;
    border-radius: 3px;
    &:hover {
      background: #1890ff;
      color: #fff;
    }
  }
`
