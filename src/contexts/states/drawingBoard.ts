export const InitWorkbench: State.WorkbenchLoad = {
  activeFile: null,
  activeComponent: null,
  rightBarRouteName: '',
  openFileList: [],
  drawingboardList: [], // 画板数据，本地存储
  fileResourceManage: {
    pageListData: [],
    staticResourceData: []
  }
}

export default InitWorkbench
