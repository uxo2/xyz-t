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
    default:
      return state
  }
}

export default pageReducer
