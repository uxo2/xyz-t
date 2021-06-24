export enum AppActions {
  BackHomePage = 'backHomePage',

  ResizeWindow = 'resizeWindow',
  UpdateLoading = 'updateLoading',
  UpdateSecondLoading = 'updateSecondLoading',
  UpdateModal = 'updateModal',
  ShowToastMessage = 'showToastMessage',
  UpdateAppErrors = 'updateAppErrors',
  UpdateNodeVersion = 'updateNodeVersion',
  UpdateTipBlockNumber = 'updateTipBlockNumber',
  UpdateAppLanguage = 'updateAppLanguage',
}

export enum PageActions {
  VisibleSidebarLeftIconContainer = 'visibleSidebarLeftIconContainer'
}

export enum ComponentActions {
  UpdateHeaderSearchEditable = 'updateHeaderSearchEditable',
  UpdateFilterNoResult = 'updateFilterNoResult',
  UpdateHeaderMobileMenuVisible = 'updateHeaderMobileMenuVisible',
  UpdateHeaderSearchBarVisible = 'updateHeaderSearchBarVisible',
  UpdateMaintenanceAlertVisible = 'updateMaintenanceAlertVisible',
}

export type StateActions = AppActions | PageActions | ComponentActions

export default StateActions
