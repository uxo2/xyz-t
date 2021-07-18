export const InitMetaView: State.MetaView = {
  visibleSideBarLeftTool: true,
  selectedSideBarLeftIconLabel: 'resourceManager',
  visibleSidebarIconsList: true,
  visibleSidebarRightConfigBox: true,
  visibleHeaderBox: true,
  auxliaryCompName: '',
  componentfield: '',

  // fullLoader data
  visibleinitFullLoading: true,
  fullLoaderProgress: 5,
  fullLoaderInfo: '正在检查最新版本...',
  addProgress: 0,
  visibleFullLoading: true,

  visibleInitPropsModal: true,
  fileResourceManage: {
    visiblePageConfig: true,
    visibleStaticResource: true
  }
}

export default InitMetaView
