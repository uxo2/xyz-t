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