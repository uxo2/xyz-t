import { FileTextOutlined, SearchOutlined, BugOutlined } from '@ant-design/icons'
import antdDesignLogo from '../assets/images/antDesign.svg'
import elementLogo from '../assets/images/elementLogo.svg'
import webpackLogo from '../assets/images/webpack.svg'
import gulpLogo from '../assets/images/gulp.svg'
import angularMaterialLogo from '../assets/images/angularMaterial.svg'
import zhihuLogo from '../assets/images/zhihuLogo.svg'
import nodeJsLogo from '../assets/images/nodejsLogo.svg'
import vueLogo from '../assets/images/vueLogo.svg'
import css3Logo from '../assets/images/css3Logo.svg'
import reactLogo from '../assets/images/reactLogo.svg'

export const SIDEBAR_LEFT_ICONS = [
  { icon: FileTextOutlined, title: '资源管理器', value: 'resources' },
  { icon: SearchOutlined, title: '搜索', value: 'search' },
  { icon: FileTextOutlined, title: '更改', value: 'modify' },
  { icon: BugOutlined, title: 'debug', value: 'preivew' }
]

export const SIDEBAR_ICONS_LIST = [
  { title: 'element-plus', link: 'elementPlus', selected: false, img: elementLogo, width: 26 },
  { title: 'ant Design', link: 'antDesign', selected: false, img: antdDesignLogo, width: 24 },
  { title: 'webpack', link: 'webpack', selected: false, img: webpackLogo, width: 26 },
  { title: 'gulp', link: 'gulp', selected: false, img: gulpLogo, width: 26 },
  { title: 'angularMaterial', link: 'angularMaterial', selected: false, img: angularMaterialLogo, width: 26 },
  { title: 'zhihu', link: 'zhihu', selected: false, img: zhihuLogo, width: 26 },
  { title: 'nodejs', link: 'nodejs', selected: false, img: nodeJsLogo, width: 26 },
  { title: 'css3', link: 'css3', selected: false, img: css3Logo, width: 26 },
  { title: 'react', link: 'react', selected: false, img: reactLogo, width: 26 },
  { title: 'vue', link: 'vue', selected: false, img: vueLogo, width: 26 }
]

export const HEADER_DIR: Array<Meta.HeaderDir> = [
  {
    label: '首页', value: 'homePage', disabled: false, notify: false,
    children: [
      { label: '新建', value: 'newProject', disabled: false, divider: true, notify: false },
      { label: '自动保存', value: 'autoSave', disabled: false, notify: false },
      { label: '退出', value: 'exit', disabled: false, notify: false }
    ]
  },
  {
    label: '查看', value: 'view', disabled: false, notify: true,
    children: [
      { label: '命令面板', value: 'commandPanel', disabled: false , notify: true },
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
    label: '编辑', value: 'edit', disabled: true, notify: true,
    children: [
      { label: '撤销', value: 'undo', disabled: false, divider: true, notify: true },
      { label: '重做', value: 'redo', disabled: false, notify: false }
    ]
  },
  {
    label: '运行', value: 'run', disabled: false, notify: true,
    children: [
      { label: '预览', value: 'preview', disabled: false, divider: true, notify: true  },
      { label: '调试', value: 'debug', disabled: false, notify: false }
    ]
  },
  {
    label: '文档', value: 'docs', disabled: false, notify: false,
    children: [
      { label: '组件文档', value: 'componentDocs', disabled: false, divider: true, notify: false },
      { label: '操作指南', value: 'operationGuide', disabled: false, notify: false }
    ]
  },
  {
    label: '帮助', value: 'run', disabled: false, notify: false,
    children: [
      { label: '隐私声明', value: 'pirvacyStatement', disabled: false, divider: true, notify: false },
      { label: '查看许可证', value: 'licence', disabled: false, notify: false }
    ]
  }
]

