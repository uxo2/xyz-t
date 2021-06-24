import styled from 'styled-components'

export const ModalTitleContainer = styled.div`
  width: 100%;
  color: #fff;
  font-size: 16px;
  height: 35px;
  line-height: 35px;
  text-indent: 10px;
`

export const FlexInline = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ModalBody = styled.div`
  width: 100%;
  min-height: 350px;
  overflow: hidden auto;
  padding: 10px;
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #f5f5f5;
  box-sizing: border-box;
`