import {
  FileTextOutlined,
  SearchOutlined,
  BugOutlined,
  FileProtectOutlined,
  WindowsOutlined,
  CodeSandboxOutlined
} from '@ant-design/icons'

export const SIDEBAR_LEFT_ICONS = [
  { icon: FileTextOutlined, title: '资源管理器', value: 'resources' },
  { icon: SearchOutlined, title: '搜索', value: 'search' },
  { icon: FileTextOutlined, title: '更改', value: 'modify' },
  { icon: BugOutlined, title: 'debug', value: 'preivew' }
]

export const SIDEBAR_ICONS_LIST = [
  { icon: FileProtectOutlined, title: '表单页面', link: 'file', selected: false },
  { icon: WindowsOutlined, title: '基础控件', link: 'component', selected: false },
  { icon: CodeSandboxOutlined, title: '静态资源', link: 'staticResource', selected: false }
]

export const HEADER_DIR: Array<Meta.HeaderDir> = [
  {
    label: '首页', value: 'homePage', disabled: false, onClick: null,
    children: [
      { label: '初始化流水线', value: 'initializePipeline', disabled: false, onClick: null, divider: true },
      { label: '自动保存', value: 'autoSave', disabled: false, onClick: null },
      { label: '退出', value: 'exit', disabled: false, onClick: null }
    ]
  },
  {
    label: '编辑', value: 'edit', disabled: true, onClick: null,
    children: [
      { label: '撤销', value: 'undo', disabled: false, onClick: null, divider: true },
      { label: '重做', value: 'redo', disabled: false, onClick: null }
    ]
  },
  {
    label: '运行', value: 'run', disabled: false, onClick: null,
    children: [
      { label: '预览', value: 'preview', disabled: false, onClick: null, divider: true },
      { label: '调试', value: 'debug', disabled: false, onClick: null },
    ]
  },
  {
    label: '文档', value: 'docs', disabled: false, onClick: null,
    children: [
      { label: '组件文档', value: 'componentDocs', disabled: false, onClick: null, divider: true },
      { label: '操作指南', value: 'operationGuide', disabled: false, onClick: null },
    ]
  },
  {
    label: '帮助', value: 'run', disabled: false, onClick: null,
    children: [
      { label: '隐私声明', value: 'pirvacyStatement', disabled: false, onClick: null, divider: true },
      { label: '查看许可证', value: 'licence', disabled: false, onClick: null },
    ]
  }
]

