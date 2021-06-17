import initApp from './app'
import initMetaView from './metaView'
import initAcitveFile from './activeFile'

const initState: State.AppState = {
  app: initApp,
  metaView: initMetaView,
  activeFile: initAcitveFile
}

export default initState
