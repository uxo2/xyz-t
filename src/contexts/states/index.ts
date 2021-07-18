import initApp from './app'
import initMetaView from './metaView'
import InitWorkbench from './drawingBoard'

const initState: State.AppState = {
  app: initApp,
  metaView: initMetaView,
  workbench: InitWorkbench
}

export default initState
