import {
  FileTextOutlined,
  SearchOutlined,
  BugOutlined
} from '@ant-design/icons'
import antdDesignLogo from '../assets/images/antDesign.svg'
import elementLogo from '../assets/images/elementLogo.svg'
import webpackLogo from '../assets/images/webpack.svg'
import gulpLogo from '../assets/images/gulp.svg'
import angularMaterialLogo from '../assets/images/angularMaterial.svg'




export const SIDEBAR_LEFT_ICONS = [
  { icon: FileTextOutlined, title: '资源管理器', value: 'resources' },
  { icon: SearchOutlined, title: '搜索', value: 'search' },
  { icon: FileTextOutlined, title: '更改', value: 'modify' },
  { icon: BugOutlined, title: 'debug', value: 'preivew' }
]

export const SIDEBAR_ICONS_LIST = [
  { title: 'ant Design', link: 'antDesign', selected: false, img: antdDesignLogo, width: 24 },
  { title: 'element-plus', link: 'elementPlus', selected: false, img: elementLogo, width: 26 },
  { title: 'webpack', link: 'webpack', selected: false, img: webpackLogo, width: 26 },
  { title: 'gulp', link: 'gulp', selected: false, img: gulpLogo, width: 26 },
  { title: 'angularMaterial', link: 'angularMaterial', selected: false, img: angularMaterialLogo, width: 26 }
]

export const HEADER_DIR: Array<Meta.HeaderDir> = [
  {
    label: '首页', value: 'homePage', disabled: false, onClick: null,
    children: [
      { label: '新建', value: 'newProject', disabled: false, onClick: null, divider: true },
      { label: '自动保存', value: 'autoSave', disabled: false, onClick: null },
      { label: '退出', value: 'exit', disabled: false, onClick: null }
    ]
  },
  {
    label: '查看', value: 'view', disabled: false, onClick: null,
    children: [
      { label: '命令面板', value: 'commandPanel', disabled: false, onClick: null },
      { label: '打开视图', value: 'commandPanel', disabled: false, onClick: null, divider: true },
      {
        label: '外观', value: 'commandPanel', disabled: false, onClick: null,
        children: [
          { label: '顶部菜单栏', value: 'menubar', disabled: false, onClick: null },
          { label: '侧栏', value: 'sidebar', disabled: false, onClick: null },
          { label: '底部状态栏', value: 'footerbar', disabled: false, onClick: null },
          { label: '侧栏右移', value: 'sidebarRight', disabled: false, onClick: null }
        ]
      }
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

