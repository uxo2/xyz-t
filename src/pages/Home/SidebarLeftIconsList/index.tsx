import {
  SidebarleftIconList
} from './styled'
import {
  SIDEBAR_ICONS_LIST
} from '../../../utils/constant'
import {
  Image
} from 'antd'
import { NavLink } from 'react-router-dom'

const SidebarLeft = () => (
  <SidebarleftIconList>
    {
      SIDEBAR_ICONS_LIST.map((item, index) => (
        <li key={index}>
          <NavLink
            activeClassName="acitiveLink"
            to={`/component-docs/${item.link}`}
            title={item.title}
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
          </NavLink>
        </li>
      ))
    }
  </SidebarleftIconList>
)

export default SidebarLeft
