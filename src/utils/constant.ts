import i18n from './i18n'
import FileResourceProject from '../pages/Home/SidebarLeftTool/FileResourceProject'
import ComponentContainer from '../pages/Home/SidebarLeftTool/ComponentContainer'
import SearchModel from '../pages/Home/SidebarLeftTool/SearchModel'
import DebugModel from '../pages/Home/SidebarLeftTool/DebugModel'
import ExtendTool from '../pages/Home/SidebarLeftTool/ExtendTool'

export const SIDEBAR_ICONS_LIST = {
  header: [
    {
      title: i18n.t('common.resourceManage'),
      value: 'resourceManager',
      icon: 'iconwenjianjia1 iconfont',
      Comp: FileResourceProject,
      size: 26
    },
    {
      title: i18n.t('common.holdAll'),
      value: 'tools',
      icon: 'iconfont iconshujuzhongjian',
      Comp: ComponentContainer,
      size: 24
    },
    {
      title: i18n.t('common.search'),
      value: 'search',
      icon: 'iconsearch iconfont',
      Comp: SearchModel,
      size: 24
    },
    {
      title: i18n.t('common.debug'),
      value: 'debugAndRun',
      icon: 'iconrun1 iconfont',
      Comp: DebugModel,
      size: 26
    },
    {
      title: i18n.t('common.extend'),
      value: 'extend',
      icon: 'iconkuaixuanzhong iconfont',
      Comp: ExtendTool,
      size: 26
    }
  ],
  footer: [
    {
      title: i18n.t('common.counter'),
      value: 'counter',
      icon: 'iconfenxiang iconfont',
      size: 26
    },
    {
      title: i18n.t('common.setting'),
      value: 'manage',
      icon: 'iconsetting iconfont',
      size: 24
    }
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

export enum PROGRESSMAPENUM {
  InitBaseEnv = 5,
  DrawingBoardIframeLoadStatus = 30,
  CoreAxiosValue = 30
}

export const HEADER_DIR: Array<Meta.HeaderDir> = [
  {
    label: i18n.t('header.homePage'),
    value: 'homePage',
    disabled: false,
    notify: false,
    visible: false,
    children: [
      {
        label: i18n.t('header.new'),
        value: 'newProject',
        disabled: false,
        divider: true,
        notify: false
      },
      {
        label: i18n.t('header.autoSave'),
        value: 'autoSave',
        disabled: false,
        notify: false
      },
      {
        label: i18n.t('header.exit'),
        value: 'exit',
        disabled: false,
        notify: false
      }
    ]
  },
  {
    label: i18n.t('header.view'),
    value: 'view',
    disabled: false,
    notify: true,
    visible: false,
    children: [
      {
        label: i18n.t('header.commandPanel'),
        value: 'commandPanel',
        disabled: false,
        notify: true
      },
      {
        label: i18n.t('header.openView'),
        value: 'openView',
        disabled: false,
        divider: true,
        notify: false
      },
      {
        label: i18n.t('header.appearance'),
        value: 'appearance',
        disabled: false,
        notify: true,
        children: [
          {
            label: i18n.t('header.sidebarLeft'),
            value: 'sidebar',
            disabled: false,
            notify: false
          },
          {
            label: i18n.t('header.footerBar'),
            value: 'footerbar',
            disabled: false,
            notify: false
          },
          {
            label: i18n.t('header.footerBar'),
            value: 'sidebarToRight',
            disabled: false,
            notify: true
          }
        ]
      }
    ]
  }
]

export const InitialDrawingBoard = `
<!DOCTYPE html>
  <html>
  <head>
    <link href="https://cdn.bootcdn.net/ajax/libs/antd/4.16.6/antd.min.css" rel="stylesheet">
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/antd/4.16.6/antd.min.js"></script>
  </head>
  <body>
    <div id="DrawingBoard" style="width: 100%; height: 100%"></div>
  </body>
</html>
<style>
body, html, #DrawingBoard {
  width: 100%;
  height: 100%;
  padding: 0;
  background: #fff;
  margin: 0;
}
.frame-content {
  width: 100%;
  height: 100%;
}
</style>
`