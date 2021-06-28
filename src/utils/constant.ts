import { FileTextOutlined, SearchOutlined, BugOutlined } from '@ant-design/icons'
import FileResourceProject from '../pages/Home/SidebarLeftTool/FileResourceProject'
import ComponentContainer from '../pages/Home/SidebarLeftTool/ComponentContainer'
import SearchModel from '../pages/Home/SidebarLeftTool/SearchModel'
import DebugModel from '../pages/Home/SidebarLeftTool/DebugModel'
import ExtendTool from '../pages/Home/SidebarLeftTool/ExtendTool'
import OperationGuide from '../pages/Home/AuxliaryComp/OperationGuide'

export const SIDEBAR_LEFT_ICONS = [
  { icon: FileTextOutlined, title: '资源管理器', value: 'resources', },
  { icon: SearchOutlined, title: '搜索', value: 'search' },
  { icon: FileTextOutlined, title: '更改', value: 'modify' },
  { icon: BugOutlined, title: 'debug', value: 'preivew' }
]

export const SIDEBAR_ICONS_LIST = {
  header: [
    { title: '资源管理器', value: 'resourceManager', icon: 'iconwenjianjia1 iconfont', Comp: FileResourceProject, size: 26 },
    { title: '工具箱', value: 'tools', icon: 'iconfont iconshujuzhongjian', Comp: ComponentContainer, size: 24 },
    { title: '搜索', value: 'search', icon: 'iconsearch iconfont', Comp: SearchModel, size: 24 },
    { title: '运行和调试', value: 'debugAndRun', icon: 'iconrun1 iconfont', Comp: DebugModel, size: 26 },
    { title: '扩展', value: 'extend', icon: 'iconkuaixuanzhong iconfont', Comp: ExtendTool, size: 26 }
  ],
  footer: [
    { title: '账户', value: 'counter', icon: 'iconfenxiang iconfont', size: 26 },
    { title: '管理', value: 'manage', icon: 'iconsetting iconfont', size: 24 }
  ]
}

export const ModalDefaultAttrs = {
  maskClosable: false,
  closable: false,
  wrapClassName: 'custom-wrap-classname__modal',
  width: 800,
  style: {
    top: 35
  },
  footer: null
}

export const HEADER_DIR: Array<Meta.HeaderDir> = [
  {
    label: '首页', value: 'homePage', disabled: false, notify: false, visible: false,
    children: [
      { label: '新建', value: 'newProject', disabled: false, divider: true, notify: false },
      { label: '自动保存', value: 'autoSave', disabled: false, notify: false },
      { label: '退出', value: 'exit', disabled: false, notify: false }
    ]
  },
  {
    label: '查看', value: 'view', disabled: false, notify: true, visible: false,
    children: [
      { label: '命令面板', value: 'commandPanel', disabled: false, notify: true },
      { label: '打开视图', value: 'commandPanel', disabled: false, divider: true, notify: false },
      {
        label: '外观', value: 'commandPanel', disabled: false, notify: true,
        children: [
          { label: '顶部菜单栏', value: 'menubar', disabled: false, divider: true, notify: false },
          { label: '侧栏', value: 'sidebar', disabled: false, notify: false },
          { label: '底部状态栏', value: 'footerbar', disabled: false, notify: false },
          { label: '侧栏右移', value: 'sidebarRight', disabled: false, notify: true }
        ]
      }
    ]
  },
  {
    label: '编辑', value: 'edit', disabled: true, notify: true, visible: false,
    children: [
      { label: '撤销', value: 'undo', disabled: false, divider: true, notify: true },
      { label: '重做', value: 'redo', disabled: false, notify: false }
    ]
  },
  {
    label: '运行', value: 'run', disabled: false, notify: true, visible: false,
    children: [
      { label: '预览', value: 'preview', disabled: false, divider: true, notify: true },
      { label: '调试', value: 'debug', disabled: false, notify: false }
    ]
  },
  {
    label: '文档', value: 'docs', disabled: false, notify: false, visible: false,
    children: [
      { label: '组件文档', value: 'componentDocs', disabled: false, divider: true, notify: false }
    ]
  },
  {
    label: '帮助', value: 'run', disabled: false, notify: false, visible: false,
    children: [
      { label: '操作指南', value: 'operationGuide', disabled: false, notify: false, Comp: OperationGuide },
      { label: '隐私声明', value: 'pirvacyStatement', disabled: false, divider: true, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false }

    ]
  }
]
