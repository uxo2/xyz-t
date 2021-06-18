declare namespace State {
  export interface AppState extends PageState {
    app: App
  }

  interface PageState {
    activeFile: ActiveFile
    metaView: MetaView
  }

  interface App {
    token: String
    id: String
    username: String
    avatar: String
    lastLoginTime: Number | null
  }

  interface ActiveFile {
    templateStr: String
    id: String
  }

  interface MetaView {
    visibleSideBarLeftTool: Boolean
    visibleSidebarIconsList: Boolean
    visibleSidebarRightConfigBox: Boolean
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
    label: String
    value: String
    notify: Boolean
    disabled: Boolean
    children?: Array<FileDir>
  }

  interface SidebarIcons {
    icon: String
    title: String
    link: String
  }

  export interface FileDir {
    label: String
    value: String
    disabled: Boolean
    icon?: String
    keymaster?: String
    divider?: Boolean
    notify: Boolean
    onClick?: Function | null,
    children?: Array<FileDir>
  }
}