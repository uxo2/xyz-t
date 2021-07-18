import styled from 'styled-components'

interface SplitViewPaneProps {
  visible: boolean
}

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
  .title {
    color: #d9d9d9;
    font-size: 12px;
    text-align: center;
    flex: 1;
  }
  .resource-manage-popover {
    .ant-popover-inner-content {
      padding: 2px;
    }
    .ant-popover-inner {
      background-color: rgb(242, 244, 245);
    }
  }
`

export const ResourceManagePopoverContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  box-sizing: border-box;
  margin: 0;
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
    padding-right: 5px;
  }
`

export const SplitView = styled.div`
  overflow: hidden;
  width: 100%;
  height: calc(100% - 30px);
  display: flex;
  flex-direction: column;
`

export const SplitViewHeader = styled.div`
  width: 100%;
  line-height: 27px;
  background-color: rgba(0, 0, 0, 0);
  border-top: 1px solid rgba(204, 204, 204, 0.2);
  text-indent: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: #000000 0 -1px 9px -1px inset;
  cursor: pointer;
  user-select: none;
  padding: 0 5px;
  .resource-item-title {
    color: #84939f;
  }
  span {
    color: #666;
  }
`

export const SplitViewPane = styled.div`
  overflow: hidden;
  transition: 0.3s;
  overflow: hidden;
  height: 0;
  flex: ${(props: SplitViewPaneProps) => props.visible ? 1 : 'none'};
`
export const CompBlock = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid red;
`