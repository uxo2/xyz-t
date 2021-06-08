import {
  SideBarComp
} from './styled'
import { SIDEBAR_LEFT_ICONS } from '../../../utils/constant'
import { Button } from 'antd'

export default () => {
  return (
    <SideBarComp>
      {
        SIDEBAR_LEFT_ICONS.map(item => {
          return (
            <Button icon={<item.icon />} type="text" className="sidebar-icon-btn"></Button>
          )
        })
      }
    </SideBarComp>
  )
}
