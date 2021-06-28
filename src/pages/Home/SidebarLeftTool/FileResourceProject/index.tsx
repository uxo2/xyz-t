import { FileResourceProjectContainer, PageList, HeaderFileTitleBox, ResourceManagePopoverContainer, ResourceManageList } from './styled'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu"
import { Collapse, Popover } from 'antd'
import { useState } from 'react'
import { SettingOutlined, EllipsisOutlined, CheckOutlined } from '@ant-design/icons'

const onClick = () => {
  console.log(12)
}

const str = <FileResourceProjectContainer>
  <ContextMenuTrigger id="contextFileResource">
    <div className="well">Right click to see the menu</div>
  </ContextMenuTrigger>

  <ContextMenu id="contextFileResource">
    <MenuItem data={{ foo: 'bar' }} onClick={onClick}>
      ContextMenu Item 1
    </MenuItem>
    <MenuItem data={{ foo: 'bar' }} onClick={onClick}>
      ContextMenu Item 2
    </MenuItem>
    <MenuItem divider />
    <MenuItem data={{ foo: 'bar' }} onClick={onClick}>
      ContextMenu Item 3
    </MenuItem>
  </ContextMenu>
</FileResourceProjectContainer>

const genExtra = () => (
  <SettingOutlined
    onClick={event => {
      event.stopPropagation()
    }}
  />
)

console.log(str)


const FileResourceProject = () => {
  const [visiblePopover, setVisiblePopover] = useState(false)

  const ResourceManagePopover = () => {
    return (
      <ResourceManagePopoverContainer>
        {
          
        }
        <ResourceManageList onClick={() => {
          setVisiblePopover(false)
        }}>
          <CheckOutlined />
          <div className="label">静态资源</div>
        </ResourceManageList>
      </ResourceManagePopoverContainer>
    )
  }

  return (
    <FileResourceProjectContainer>
      <HeaderFileTitleBox className="header-file-title-box__popoverMountedNode">
        <div className="title">资源管理器</div>
        <Popover
          placement="bottomLeft"
          content={ResourceManagePopover}
          trigger="click"
          visible={visiblePopover}
          onVisibleChange={visible => { setVisiblePopover(visible) }}
          overlayClassName="resource-manage-popover"
          overlayStyle={{ padding: 0 }}
          getPopupContainer={() => document.querySelector('.header-file-title-box__popoverMountedNode') || document.body}
        >
          <EllipsisOutlined />
        </Popover>
      </HeaderFileTitleBox>
      <Collapse expandIconPosition="left" className="collppse-container">
        <Collapse.Panel header="页面配置" key="1" extra={genExtra()}>
          <PageList>HomePage</PageList>
        </Collapse.Panel>
        <Collapse.Panel header="静态资源配置" key="2" extra={genExtra()}>
          <div>12</div>
        </Collapse.Panel>
      </Collapse>
    </FileResourceProjectContainer>
  )
}

export default FileResourceProject
