declare namespace State {
  export interface AppState extends PageState {
    app: App
  }

  interface PageState {
    activeFile: ActiveFile
    metaView: MetaView
  }

  interface App {
    token: string
    id: string
    username: string
    avatar: string
    lastLoginTime: number | null
  }

  interface ActiveFile {
    templateStr: string
    id: string
  }

  interface MetaView {
    visibleSideBarLeftTool: boolean
    visibleSidebarIconsList: boolean
    visibleSidebarRightConfigBox: boolean
    visibleHeaderBox: boolean
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
    onClick?: Function | null,
    children?: Array<FileDir>
  }
}