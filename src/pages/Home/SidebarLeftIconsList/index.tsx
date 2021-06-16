import {
  SidebarleftIconList
} from './styled'
import {
  SIDEBAR_ICONS_LIST
} from '../../../utils/constant'

const SidebarLeft = () => (
  <SidebarleftIconList>
    {
      SIDEBAR_ICONS_LIST.map((item, index) => (
        <li
          title={item.title}
          key={index}
          onClick={() => {
            // dispatch({
            //   type: ComponentActions.UpdateHeaderSearchEditable,
            //   payload: {
            //     searchBarEditable: true
            //   }
            // })
          }}>
          {<item.icon />}
        </li>
      ))
    }
  </SidebarleftIconList>
)

export default SidebarLeft
