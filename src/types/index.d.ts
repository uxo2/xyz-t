declare namespace State {
  export interface AppState extends PageState {
    app: App
  }

  export interface PagePayload extends MetaView, ActiveFile, App {

  }

  interface WorkbenchLoad {
    activeFile: ActiveFile | null
    openFileList: Array<ActiveFile>
  } 
  interface PageState {
    metaView: MetaView
    workbench: WorkbenchLoad
  }

  interface App {
    token: string
    id: string
    username: string
    avatar: string
    lastLoginTime: number | null
  }

  interface ActiveFile {
    id: string
    title: string
    codeStr: string
    routerPath: string
  }

  interface MetaView {
    selectedSideBarLeftIconLabel: string
    visibleSideBarLeftTool: boolean
    visibleSidebarIconsList: boolean
    visibleSidebarRightConfigBox: boolean
    visibleHeaderBox: boolean
    auxliaryCompName: string
    visibleInitPropsModal: boolean
  }
}

declare namespace CustomRouter {
  interface Route {
    path: string
    redirectd?: string
    name?: string
    params?: string
    exact?: boolean
    component: React.FunctionComponent<any>
  }
}

declare namespace Meta {
  interface HeaderDir {
    label: string
    value: string
    notify: boolean
    disabled: boolean
    visible: false,
    children?: Array<FileDir>
  }

  interface SidebarIcons {
    icon: string
    title: string
    link: string
  }

  export interface FileDir {
    label: string
    value: string
    disabled: boolean
    icon?: string
    keymaster?: string
    divider?: boolean
    notify: boolean
    onClick?: Function | null
    Comp?: React.FunctionComponent<any>
    children?: Array<FileDir>
  }
}