export enum AppActions {
  BackHomePage = 'backHomePage',
  ResizeWindow = 'resizeWindow'
}

export enum PageActions {
  VisibleSidebarLeftIconContainer = 'visibleSidebarLeftIconContainer',
  VisibleRightConfigComp = 'visibleRightConfigComp',
  visibleAuxiliaryComp = 'visibleAuxliaryComp'
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
