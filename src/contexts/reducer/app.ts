import { AppActions } from '../actions'

export const appReducer = (
  state: State.AppState,
  { type, payload }: { type: AppActions, payload: string }
): State.AppState => {
  console.log(type, payload)
  switch (type) {
    case AppActions.ResizeWindow:
      return {
        ...state,
        app: {
          ...state.app
        }
      }
    default:
      return state
  }
}

export default appReducer
