import { memo } from 'react'
import { ComponentConfigContainer } from './styled'
import renderComponentConfigItem from '../../../control/renderDrawingBoard/antdesign/index'

const ComponentConfig = (
  { routename, visible }: { routename: string, visible: boolean }
) => {
  let ActiveComponentConfig: any

  // eslint-disable-next-line @typescript-eslint/ban-types
  function isValidKey(key: string | number | symbol, object: object): key is keyof typeof object {
    return key in object
  }

  if (isValidKey(routename, renderComponentConfigItem)) {
    ActiveComponentConfig = renderComponentConfigItem[routename]
  }

  return (
    <ComponentConfigContainer visible={visible}>
      {ActiveComponentConfig && <ActiveComponentConfig />}
    </ComponentConfigContainer>
  )
}

export default memo(ComponentConfig)
