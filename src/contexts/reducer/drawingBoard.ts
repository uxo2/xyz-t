import { DrawingBoardActions } from '../actions'

export const pageReducer = (
  state: State.AppState,
  { type, payload }: { type: DrawingBoardActions, payload: State.WorkbenchLoad }
): State.AppState => {
  switch (type) {
    case DrawingBoardActions.PushDrawingBoard:
      return {
        ...state,
        workbench: {
          ...state.workbench,
          activeComponent: payload.activeComponent,
          drawingboardList: state.workbench.drawingboardList.concat(payload.activeComponent)
        }
      }

    default:
      return state
  }
}

export default pageReducer
