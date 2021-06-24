import StateActions, { AppActions, PageActions } from '../actions'
import appReducer from './app'
import pageReducer from './page'

const reducer = (
  state: State.AppState,
  { type, payload }: { type: StateActions; payload: any }
): State.AppState => {
  if (Object.values(AppActions).includes(type as AppActions)) {
    return appReducer(state, { type: type as AppActions, payload })
  } else {
    return pageReducer(state, { type: type as PageActions, payload })
  }
}

export default reducer
