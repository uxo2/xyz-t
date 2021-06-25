import styled from 'styled-components'

export const FileResourceProjectContainer = styled.div`
  color: #fff;
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