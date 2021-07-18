import styled from "styled-components"

export const SketchpadComponentTreeContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow-y: auto;
  .ant-tree {
    color: #fff;
    background-color: transparent;
    .ant-tree-switcher {
      background-color: transparent;
    }
    .ant-tree-node-content-wrapper {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`