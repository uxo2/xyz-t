import { Tree } from 'antd'
import { CarryOutOutlined, HeatMapOutlined } from '@ant-design/icons'
import { SketchpadComponentTreeContainer } from './styled'

export const ComponentTree = () => {
  const onSelect = (keys: React.Key[], info: any) => {
    console.log('Trigger Select', keys, info)
  }

  const onExpand = () => {
    console.log('Trigger Expand')
  }

  const TreerootNodeIcon = () => <i className="iconfont iconJournal" style={{ color: '#01aaaa' }} />
  const treeData = [
    {
      title: 'parent 0',
      key: '0-0',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: 'leaf 0-0', key: '0-0-0',
          children: [
            {
              title: 'leaf 0-0',
              key: '0-0-0-0',
              children: [
                { title: 'leaf 0-1212', key: '0-0-0-0-0', icon: <TreerootNodeIcon /> },
                { title: 'leaf 0-1', key: '0-0-0-0-1', icon: <HeatMapOutlined /> }
              ]
            },
            { title: 'leaf 0-1', key: '0-0-1-1' }
          ]
        },
        { title: 'leaf 0-1', key: '0-0-1', isLeaf: true }
      ]
    },
    {
      title: 'parent 1',
      key: '0-1',
      children: [
        { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
        { title: 'leaf 1-1', key: '0-1-1', isLeaf: true }
      ]
    }
  ]

  return (
    <Tree.DirectoryTree
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
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
