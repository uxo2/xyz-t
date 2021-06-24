import { Tree } from 'antd'
import { FileResourceProjectContainer } from './styled'

const treeData = [
  {
    title: 'page',
    key: '0-0',
    children: [
      {
        title: '登录页',
        key: '0-0-0'
      },
      {
        title: '首页',
        key: '0-0-1',
        children: [
          {
            title: (
              <span>
                sss
              </span>
            ),
            key: '0-0-1-0'
          }
        ]
      }
    ]
  }
]

const FileResourceProject = () => (
  <FileResourceProjectContainer>
    <Tree.DirectoryTree
      className="file-resource-tree"
      treeData={treeData}
    />
  </FileResourceProjectContainer>
)

export default FileResourceProject
