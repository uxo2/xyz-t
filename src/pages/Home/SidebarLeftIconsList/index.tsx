import { SidebarleftIconList, SidebarContainer, SidebarFooterList, SideBarIconLi } from './styled'
import { SIDEBAR_ICONS_LIST } from '../../../utils/constant'
import { useAppState, useDispatch } from '../../../contexts/providers'
import { PageActions } from '../../../contexts/actions'

const SidebarLeft = () => {
  const {
    metaView: {
      visibleSideBarLeftTool,
      selectedSideBarLeftIconLabel
    }
  } = useAppState()
  const dispatch = useDispatch()

  return (
    <SidebarContainer>
      <SidebarleftIconList>
        {
          SIDEBAR_ICONS_LIST[0].map((item, index) => (
            <SideBarIconLi
              key={index}
              title={item.title}
              selected={selectedSideBarLeftIconLabel === item.value}
              onClick={() => {
                dispatch({
                  type: PageActions.VisibleSidebarLeftIconContainer,
                  payload: {
                    selectedSideBarLeftIconLabel: item.value,
                    visibleSideBarLeftTool: item.value === selectedSideBarLeftIconLabel ? !visibleSideBarLeftTool : true
                  }
                })
              }}
            >
              <i className={item.icon}></i>
            </SideBarIconLi>
          ))
        }
      </SidebarleftIconList>
      <SidebarFooterList>
        {
          SIDEBAR_ICONS_LIST[1].map((item, index) => (
            <li
              key={index}
              title={item.title}
            >
              <i className={item.icon}></i>
            </li>
          ))
        }
      </SidebarFooterList>
    </SidebarContainer>
  )
}

export default SidebarLeft
