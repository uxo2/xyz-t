import { PageActions } from '../actions'

export const pageReducer = (
  state: State.AppState,
  { type, payload }: { type: PageActions, payload: State.PagePayload }
): State.AppState => {
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
    case PageActions.visibleAuxiliaryComp:
      return {
        ...state,
        metaView: {
          ...state.metaView,
          visibleSidebarRightConfigBox: false,
          auxliaryCompName: payload.auxliaryCompName
        }
      }
    default:
      return state
  }
}

export default pageReducer
