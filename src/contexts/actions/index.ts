export enum AppActions {
  BackHomePage = 'backHomePage',
  ResizeWindow = 'resizeWindow'
}

export enum DrawingBoardActions {
  PushDrawingBoard = 'pushDrawingBoard',
  PopDrawingBoard = 'popDrawingBoard',
  DelDrawingBoard = 'delDrawingBoard',
  InsertDrawingBoard = 'insertDrawingBoard',
  
}

export enum PageActions {
  VisibleSidebarLeftIconContainer = 'visibleSidebarLeftIconContainer',
  VisibleRightConfigComp = 'visibleRightConfigComp',
  visibleAuxiliaryComp = 'visibleAuxliaryComp'
}

export enum ComponentActions {
  UpdateActiveFile = 'updateActiveFile',
  UpdateHeaderSearchEditable = 'updateHeaderSearchEditable',
  UpdateFilterNoResult = 'updateFilterNoResult',
  UpdateHeaderMobileMenuVisible = 'updateHeaderMobileMenuVisible',
  UpdateHeaderSearchBarVisible = 'updateHeaderSearchBarVisible',
  UpdateMaintenanceAlertVisible = 'updateMaintenanceAlertVisible',
}

export type StateActions = AppActions | PageActions | ComponentActions

export default StateActions
