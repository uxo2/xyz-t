import { SidebarleftIconList, SidebarContainer, SidebarFooterList } from './styled'
import { SIDEBAR_ICONS_LIST } from '../../../utils/constant'

const SidebarLeft = () => (
  <SidebarContainer>
    <SidebarleftIconList>
      {
        SIDEBAR_ICONS_LIST[0].map((item, index) => (
          <li
            key={index}
            title={item.title}
            onClick={() => {

            }}
          >
            <i className={item.icon}></i>
          </li>
        ))
      }
    </SidebarleftIconList>
    <SidebarFooterList>
      {
        SIDEBAR_ICONS_LIST[1].map((item, index) => (
          <li key={index} title={item.title}>
            <i className={item.icon}></i>
          </li>
        ))
      }
    </SidebarFooterList>
  </SidebarContainer>
)

export default SidebarLeft
