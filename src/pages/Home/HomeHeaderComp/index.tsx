import { Image, Popover } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { HomeHeaderBox, Button, PopoverContentItem, PopoverDivider, PopoverContentBox, NotityLabel } from './styled'
import { HEADER_DIR } from '../../../utils/constant'
import { useAppState, useDispatch } from '../../../contexts/providers'
import { AppActions, PageActions } from '../../../contexts/actions'
import logo from '../../../assets/images/logo.svg'

const HomeHeaderBoxComp = (): React.ReactElement => {
  const dispatch = useDispatch()
  const {
    metaView: { visibleHeaderBox }
  } = useAppState()
  const handleClickPopoverLabel = (value: string) => {
    if (value === 'operationGuide') {
      dispatch({
        type: PageActions.visibleAuxiliaryComp,
        payload: {
          auxliaryCompName: value
        }
      })
    }
  }

  const CodeContentDOM = (file: Array<Meta.FileDir>): React.ReactElement => {
    const [...codeContent] = file

    return (
      <PopoverContentBox>
        {
          codeContent.map(item => {
            return (
              <main key={item.label}>
                <PopoverContentItem>
                  {
                    item.children ?
                      <Popover
                        content={(CodeContentDOM(item.children || []))}
                        placement="rightTop"
                        trigger="click"
                        color="#f2f4f5"
                        getPopupContainer={() => document.querySelector('.header-menu-item') || document.body}
                      >
                        <div className={item.notify ? 'notify' : ''}>{item.label}</div>
                        <RightOutlined />
                      </Popover>
                      : <NotityLabel
                        className={item.notify ? 'notify' : ''}
                        onClick={() => {
                          handleClickPopoverLabel(item.value)
                        }}
                      >
                        {item.label}
                      </NotityLabel>
                  }
                </PopoverContentItem>
                {item.divider ? <PopoverDivider /> : ''}
              </main>
            )
          })
        }
      </PopoverContentBox>
    )
  }

  return (
    visibleHeaderBox ? <HomeHeaderBox id="headerRef">
      <Image
        className="logo-box"
        width={45}
        height={35}
        preview={false}
        onClick={() => {
          dispatch({
            type: AppActions.BackHomePage,
            payload: {

            }
          })
        }}
        src={logo}
      />
      {
        HEADER_DIR.map(file => {
          let Children: React.FC

          if (file.children && !file.disabled) {
            Children = () => (
              <Popover
                content={(CodeContentDOM(file.children || []))}
                placement="bottomLeft"
                color="#f2f4f5"
                overlayClassName="uxo-popover"
                getPopupContainer={() => document.querySelector('.header-menu-item') || document.body}
                trigger="click"
              >
                <Button disabled={file.disabled} className={file.notify ? 'notify' : ''}>{file.label}</Button>
              </Popover>
            )
          } else {
            Children = () => <Button disabled className="header-menu-item">{file.label}</Button>
          }

          return <Children key={file.label} />
        })
      }
    </HomeHeaderBox>
      : <div />
  )
}

export default HomeHeaderBoxComp
