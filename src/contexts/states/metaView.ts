export const InitMetaView: State.MetaView = {
  visibleSideBarLeftTool: true,
  selectedSideBarLeftIconLabel: 'resourceManager',
  visibleSidebarIconsList: true,
  visibleSidebarRightConfigBox: true,
  visibleHeaderBox: true,
  auxliaryCompName: '',
  componentfield: '',

  // fullLoader data
  visibleinitFullLoading: false,
  fullLoaderProgress: 5,
  fullLoaderInfo: '正在检查最新版本...',

  visibleFullLoading: true,
  visibleInitPropsModal: true, // init config modal
  fileResourceManage: {
    visiblePageConfig: true,
    visibleStaticResource: true
  }
}

export default InitMetaView
