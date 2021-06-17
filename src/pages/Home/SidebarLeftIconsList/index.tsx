import {
  SidebarleftIconList
} from './styled'
import {
  SIDEBAR_ICONS_LIST
} from '../../../utils/constant'
import {
  Image
} from 'antd'

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
          <Image
            width={item.width}
            src={item.img}
            preview={false}
          />
        </li>
      ))
    }
  </SidebarleftIconList>
)

export default SidebarLeft
