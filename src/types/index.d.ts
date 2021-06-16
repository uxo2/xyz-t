declare namespace State {
  export interface Script {
    args?: String
    codeHash: String<Number>
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
    disabled: Boolean
    onClick: Function | null
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
    onClick?: Function | null,
    children?: []
  }
}