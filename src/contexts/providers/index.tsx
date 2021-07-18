import { createContext, useContext, useReducer } from 'react'
import initState from '../states'
import reducer from '../reducer'

export const AppContext = createContext<{ state: typeof initState, dispatch: any }>({
  state: initState,
  dispatch: alert
})

const useProvides = (Comp: React.ComponentType) => {
  const [providers, dispatch] = useReducer(reducer, initState)

  return (props: React.Props<any>) => (
    <AppContext.Provider
      value={{
        state: providers,
        dispatch
      }}
    >
      <Comp {...props} />
    </AppContext.Provider>
  )
}

export const useAppState = () => useContext(AppContext).state
export const useDispatch = () => useContext(AppContext).dispatch

export default useProvides
