import { memo } from 'react'
import { ComponentConfigContainer } from './styled'
import componentConfigItem from '../../../control/componentConfig/antdesign/index'
import { isValidKey } from '../../../utils/index'

const ComponentConfig = (
  { routename, visible }: { routename: string, visible: boolean }
) => {
  let ActiveComponentConfig: any

  if (isValidKey(routename, componentConfigItem)) {
    ActiveComponentConfig = componentConfigItem[routename]
  }

  return (
    <ComponentConfigContainer visible={visible}>
      {ActiveComponentConfig && <ActiveComponentConfig />}
    </ComponentConfigContainer>
  )
}

export default memo(ComponentConfig)
