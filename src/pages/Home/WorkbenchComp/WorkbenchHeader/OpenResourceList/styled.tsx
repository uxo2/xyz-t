import styled from "styled-components"

interface OpenResourcesListProp {
  select?: boolean
  empty?: boolean
}

export const OpenResourceItem = styled.li`
  position: relative;
  text-align: center;
  cursor: default;
  padding: 0 5px;
  min-width: 80px;
  user-select: none;
  line-height: 30px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  border-right: 1px solid #434343;
  padding-left: 10px;
  background-color: ${(props: OpenResourcesListProp) => props.select ? 'red' : ''};
  &:hover {
    .close-btn {
      visibility: visible;
    }
  }
`

export const OpenResourceListContainer = styled.ul`
  flex: 1;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding: 0;
  color: #fff;
  background: #9e94943d;
  margin: 0;
  overflow: hidden;
  &:hover {
    overflow: ${(props: OpenResourcesListProp) => props.empty ? 'hidden' : 'scroll hidden'};
    li {
      height: 40px;
      line-height: 40px;
      position: relative;
      top: 1px;
    }
  }
  ::-webkit-scrollbar {
    position: relative;
    width: 3px;
    height: 3px;
    background-color: transparent;
  }
  
  .empty-info {
    font-size: 14px;
    color: #fff;
    width: 100%;
    user-select: none;
    text-align: center;
  }
`
export const ResourceItemTitle = styled.div`
  width: 100%;
`

export const ResourceItemCloseBtn = styled.div`
  visibility: hidden;
  padding: 3px;
  border-radius: 3px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
  transform: scale(0.95);
  &:hover {
    background-color: #3c3c3c;
    color: #fff;
  }
`