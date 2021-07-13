import { PageActions } from '../actions'

export const pageReducer = (
  state: State.AppState,
  { type, payload }: { type: PageActions, payload: State.PagePayload }
): State.AppState => {
  let maxProgress = 0

  switch (type) {
    case PageActions.VisibleSidebarLeftIconContainer:
      return {
        ...state,
        metaView: {
          ...state.metaView,
          selectedSideBarLeftIconLabel: payload.selectedSideBarLeftIconLabel,
          visibleSideBarLeftTool: payload.visibleSideBarLeftTool
        }
      }
    case PageActions.VisibleRightConfigComp:
      return {
        ...state,
        metaView: {
          ...state.metaView,
          visibleSidebarRightConfigBox: payload.visibleSidebarRightConfigBox
        }
      }
    case PageActions.VisibleAuxiliaryComp:
      return {
        ...state,
        metaView: {
          ...state.metaView,
          visibleSidebarRightConfigBox: false,
          auxliaryCompName: payload.auxliaryCompName
        }
      }
    case PageActions.ActiveRightBarConfigRouteName:
      return {
        ...state,
        metaView: {
          ...state.metaView,
          componentfield: payload.componentfield
        }
      }
    case PageActions.VisibleFullLoadingContainer:
      return {
        ...state,
        metaView: {
          ...state.metaView,
          visibleinitFullLoading: payload.visibleinitFullLoading
        }
      }
    case PageActions.FullLoaderProgressAction:
      maxProgress = payload.addProgress + state.metaView.fullLoaderProgress
      return {
        ...state,
        metaView: {
          ...state.metaView,
          visibleinitFullLoading: maxProgress < 100, // todo wait close the progress.
          fullLoaderProgress: maxProgress
        }
      }
    case PageActions.FullLoaderInfoAction:
      return {
        ...state,
        metaView: {
          ...state.metaView,
          fullLoaderInfo: payload.fullLoaderInfo
        }
      }
    default:
      return state
  }
}

export default pageReducer
