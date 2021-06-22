import { createContext, useContext } from 'react'
import initState from '../states'

export const AppContext = createContext<{ state: typeof initState, dispatch: any }>({
  state: initState,
  dispatch: console.log
})

export const useAppState = () => useContext(AppContext).state
export const useDispatch = () => useContext(AppContext).dispatch