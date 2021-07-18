export const InitWorkbench: State.WorkbenchLoad = {
  activeFile: null,
  activeComponent: null,
  rightBarRouteName: '',
  openFileList: [],
  drawingboardList: [], // 画板数据，本地存储
  resizeDrawingBoard: 100, // 画板缩放。默认100，即不缩放
  fileResourceManage: {
    pageListData: [],
    staticResourceData: []
  }
}

export default InitWorkbench
