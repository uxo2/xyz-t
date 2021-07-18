export enum AppActions {
  BackHomePage = 'backHomePage',
  ResizeWindow = 'resizeWindow'
}

export enum DrawingBoardActions {
  PushDrawingBoard = 'pushDrawingBoard',
  PopDrawingBoard = 'popDrawingBoard',
  DelDrawingBoard = 'delDrawingBoard',
  SelectComponent = 'selectComponent',
  InsertDrawingBoard = 'insertDrawingBoard',
  ResizeDrawingBoard = 'resizeDrawingBoard'
}

export enum PageActions {
  VisibleSidebarLeftIconContainer = 'visibleSidebarLeftIconContainer',
  VisibleRightConfigComp = 'visibleRightConfigComp',
  VisibleAuxiliaryComp = 'visibleAuxliaryComp',
  ActiveRightBarConfigRouteName = 'activeRightBarConfigRouteName',
  VisibleFullLoadingContainer = 'visibleFullLoadingContainer',
  FullLoaderProgressAction = 'fullLoaderProgress',
  FullLoaderInfoAction = 'fullLoaderInfo'
}

export enum ComponentActions {
  UpdateActiveFile = 'updateActiveFile',
  UpdateHeaderSearchEditable = 'updateHeaderSearchEditable',
  UpdateFilterNoResult = 'updateFilterNoResult',
  UpdateHeaderMobileMenuVisible = 'updateHeaderMobileMenuVisible',
  UpdateHeaderSearchBarVisible = 'updateHeaderSearchBarVisible',
  UpdateMaintenanceAlertVisible = 'updateMaintenanceAlertVisible',
  UpdateRightBarConfigPage = 'updaterightBarConfigPage'
}

export type StateActions = AppActions | PageActions | ComponentActions | DrawingBoardActions

export default StateActions
