import StateActions, { AppActions, PageActions, DrawingBoardActions } from '../actions'
import appReducer from './app'
import pageReducer from './page'
import drawingBoardReducer from './drawingBoard'

const reducer = (
  state: State.AppState,
  { type, payload }: { type: StateActions; payload: any }
): State.AppState => {
  if (Object.values(AppActions).includes(type as AppActions)) {
    return appReducer(state, {
      type: type as AppActions,
      payload
    })
  }

  if (Object.values(DrawingBoardActions).includes(type as DrawingBoardActions)) {
    return drawingBoardReducer(state, {
      type: type as DrawingBoardActions,
      payload
    })
  }

  return pageReducer(state, {
    type: type as PageActions,
    payload
  })
}

export default reducer
