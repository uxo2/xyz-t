import styled from 'styled-components'

export const FileResourceProjectContainer = styled.div`
  color: #fff;
  width: 100%;
  height: 100%;
  .collppse-container {
    background-color: transparent;
    color: #fff;
    border: none;
    .ant-collapse-item {
      background-color: rgba(0, 0, 0, 0);
      border-bottom: 1px solid rgba(204, 204, 204, 0.2);
      &.ant-collapse-item-active:last-child {
        border-bottom: none !important;
      }
      .ant-collapse-header {
        padding: 5px;
        user-select: none;
        color: #fff;
        border: 1px solid transparent;
        &[aria-expanded="true"] {
          border-bottom: 1px solid rgba(204, 204, 204, 0.2);
        }
      }
      .ant-collapse-content {
        background-color: transparent;
        color: #fff;
        border-top: none;
        .ant-collapse-content-box {
          padding: 5px 0;
          min-height: 150px;
        }
      }
    }
  }
  .file-resource-tree {
    background: transparent;
    color: #fff;
    .ant-tree-switcher {
      background-color: transparent;
      color: #fff;
    }
    .ant-tree-treenode {
      &::before {
        &:hover {
          background-color: #333 !important;
        }
      }
    }
  }
`

export const PageList = styled.div`
  height: 25px;
  line-height: 25px;
  text-align: left;
  text-indent: 10px;
  user-select: none;
  &:hover {
    background-color: #37373d;
  }
`

export const HeaderFileTitleBox = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  user-select: none;
`

export const ResourceManagePopoverContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  box-sizing: border-box;
  margin: 0;
  width: 100px;
`

export const ResourceManageList = styled.div`
  width: 100%;
  line-height: 22px;
  height: 22px;
  cursor: default;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 5px;
  &:hover {
    background: #1890ff;
    color: #fff;
    border-radius: 3px;
  }
  .label {
    text-indent: 5px;
  }
`