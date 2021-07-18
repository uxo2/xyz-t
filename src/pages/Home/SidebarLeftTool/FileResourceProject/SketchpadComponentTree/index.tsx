import { Tree } from 'antd'
import { CarryOutOutlined } from '@ant-design/icons'
import { SketchpadComponentTreeContainer } from './styled'

export const ComponentTree = () => {
  const TreerootNodeIcon = () => <i className="iconfont iconJournal" style={{ color: '#01aaaa' }} />
  const treeData = [
    {
      title: 'parent 0',
      key: '0-0',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'leaf 0-0', key: '0-0-0', icon: <CarryOutOutlined />,
          children: [
            {
              title: 'leaf 0-0',
              key: '0-0-0-0',
              icon: <CarryOutOutlined />,
              children: [
                { title: 'leaf 0-1212', key: '0-0-0-0-0', icon: <TreerootNodeIcon /> },
                { title: 'leaf 0-1', key: '0-0-0-0-1', icon: <TreerootNodeIcon /> }
              ]
            },
            { title: 'leaf 0-1', key: '0-0-1-1', icon: <TreerootNodeIcon /> }
          ]
        },
        { title: 'leaf 0-1', key: '0-0-1', icon: <TreerootNodeIcon /> }
      ]
    },
    {
      title: 'parent 1',
      key: '0-1',
      icon: <CarryOutOutlined />,
      children: [
        { title: 'leaf 1-0', key: '0-1-0', icon: <TreerootNodeIcon /> },
        { title: 'leaf 1-1', key: '0-1-1', icon: <TreerootNodeIcon /> }
      ]
    }
  ]

  return (
    <Tree.DirectoryTree
      defaultExpandAll
      treeData={treeData}
    />
  )
}

const SketchpadComponentTree = () => {
  return (
    <SketchpadComponentTreeContainer>
      <ComponentTree />
    </SketchpadComponentTreeContainer>
  )
}

export default SketchpadComponentTree
