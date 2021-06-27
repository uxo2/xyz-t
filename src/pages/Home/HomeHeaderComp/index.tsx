import React from 'react'
import { useHistory } from 'react-router'
import { Image, Popover } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { HomeHeaderBox, Button, PopoverContentItem, PopoverDivider, PopoverContentBox } from './styled'
import { HEADER_DIR } from '../../../utils/constant'
import { useAppState, useDispatch } from '../../../contexts/providers'
import { AppActions, PageActions } from '../.././../contexts/actions'
import logo from '../../../assets/images/logo.svg'

const HomeHeaderBoxComp = () => {
  const dispatch = useDispatch()
  const history = useHistory()
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

  const CodeContentDOM = (file: Array<Meta.FileDir>) => (
    <PopoverContentBox>
      {
        file.map((item, index) =>
          <React.Fragment key={index}>
            <PopoverContentItem>
              {
                item.children ?
                  <Popover
                    content={(CodeContentDOM(item.children || []))}
                    placement="rightTop"
                    trigger="click"
                    color="#f2f4f5"
                    getPopupContainer={() => document.querySelector('.menu-item') || document.body}
                  >
                    <div className={item.notify ? 'notify' : ''}>{item.label}</div>
                    <RightOutlined />
                  </Popover>
                  :
                  <div
                    className={item.notify ? 'notify' : ''}
                    onClick={() => {
                      handleClickPopoverLabel(item.value);
                    }}
                  >
                    {item.label}
                  </div>
              }
            </PopoverContentItem>
            {item.divider ? <PopoverDivider></PopoverDivider> : ''}
          </React.Fragment>
        )
      }
    </PopoverContentBox>
  )

  return (
    visibleHeaderBox ? <HomeHeaderBox id="headerRef">
      <Image
        className="logo-box"
        width={45}
        height={35}
        preview={false}
        onClick={() => {
          history.push(`/`)
          dispatch({
            type: AppActions.BackHomePage,
            payload: {}
          })
        }}
        src={logo}
      />
      {
        HEADER_DIR.map((file, index) => {
          let children: any

          if (file.children && !file.disabled) {
            children = <Popover
              content={(CodeContentDOM(file.children || []))}
              placement="bottomLeft"
              color="#f2f4f5"
              overlayClassName="uxo-popover"
              getPopupContainer={() => document.querySelector('.menu-item') || document.body}
              trigger="click"
            >
              <Button disabled={file.disabled} className={file.notify ? 'notify' : ''}>{file.label}</Button>
            </Popover>
          } else {
            children = <Button disabled key={index} className="menu-item">{file.label}</Button>
          }

          return (
            <React.Fragment key={index}>
              {children}
            </React.Fragment>
          )
        })
      }
    </HomeHeaderBox>
      : <div></div>
  )
}

export default HomeHeaderBoxComp
