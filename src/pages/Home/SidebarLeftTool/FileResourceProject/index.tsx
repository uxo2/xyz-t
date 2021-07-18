import { Popover } from 'antd'
import { useState } from 'react'
import { EllipsisOutlined, CheckOutlined, RightOutlined, DownOutlined } from '@ant-design/icons'
import { FileResourceProjectContainer, HeaderFileTitleBox, ResourceManagePopoverContainer, ResourceManageList, SplitView, SplitViewHeader, SplitViewPane } from './styled'
import i18n from '../../../../utils/i18n'
import SketchpadComponentTree from './SketchpadComponentTree/index'

const FileResourceProject = () => {
  const [visiblePopover, setVisiblePopover] = useState(false)
  const [resource, setResource] = useState({
    visiblePageResource: false,
    visibleStaticResouce: false,
    visibleComponentTree: false
  })

  const ResourceManagePopover = () => {
    return (
      <ResourceManagePopoverContainer>
        <ResourceManageList onClick={() => {
          setVisiblePopover(false)
        }}>
          <CheckOutlined />
          <div className="label">{i18n.t('common.workbar')}</div>
        </ResourceManageList>
        <ResourceManageList onClick={() => {
          setVisiblePopover(false)
        }}>
          <CheckOutlined />
          <div className="label">{i18n.t('common.staticResource')}</div>
        </ResourceManageList>
        <ResourceManageList onClick={() => {
          setVisiblePopover(false)
        }}>
          <CheckOutlined />
          <div className="label">{i18n.t('common.componentTree')}</div>
        </ResourceManageList>
      </ResourceManagePopoverContainer>
    )
  }

  return (
    <FileResourceProjectContainer>
      <HeaderFileTitleBox className="header-file-title-box__popoverMountedNode">
        <div className="title">{i18n.t('common.resourceManage')}</div>
        <Popover
          placement="bottomLeft"
          content={ResourceManagePopover}
          trigger="click"
          visible={visiblePopover}
          onVisibleChange={visible => { setVisiblePopover(visible) }}
          overlayClassName="resource-manage-popover"
          overlayStyle={{
            padding: 0
          }}
          getPopupContainer={() => document.querySelector('.header-file-title-box__popoverMountedNode') as HTMLElement}
        >
          <EllipsisOutlined />
        </Popover>
      </HeaderFileTitleBox>
      <SplitView>
        <SplitViewHeader onClick={() => {
          setResource({
            ...resource,
            visiblePageResource: !resource.visiblePageResource
          })
        }}>
          <div className="resource-item-title">{i18n.t('common.workbar')}</div>
          {resource.visiblePageResource ? <DownOutlined /> : <RightOutlined />}
        </SplitViewHeader>
        <SplitViewPane visible={resource.visiblePageResource}>
          file directory
        </SplitViewPane>
        <SplitViewHeader onClick={() => {
          setResource({
            ...resource,
            visibleStaticResouce: !resource.visibleStaticResouce
          })
        }}>
          <div className="resource-item-title">{i18n.t('common.staticResource')}</div>
          {resource.visibleStaticResouce ? <DownOutlined /> : <RightOutlined />}
        </SplitViewHeader>
        <SplitViewPane visible={resource.visibleStaticResouce}>
          14
        </SplitViewPane>
        <SplitViewHeader onClick={() => {
          setResource({
            ...resource,
            visibleComponentTree: !resource.visibleComponentTree
          })
        }}>
          <div className="resource-item-title">{i18n.t('common.componentTree')}</div>
          {resource.visibleComponentTree ? <DownOutlined /> : <RightOutlined />}
        </SplitViewHeader>
        <SplitViewPane visible={resource.visibleComponentTree}>
          <SketchpadComponentTree />
        </SplitViewPane>
      </SplitView>
    </FileResourceProjectContainer>
  )
}

export default FileResourceProject
