import {
  Image,
  Popover
} from 'antd'
import {
  RightOutlined
} from '@ant-design/icons'
import {
  HomeHeaderBox,
  Button,
  PopoverContentItem,
  PopoverDivider,
  PopoverContentBox
} from './styled'
import HomeFileResources from '../HomeFileResources/index'
import {
  HEADER_DIR
} from '../../../utils/constant'
import React from 'react'

const HomeHeaderBoxComp = () => {
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
                  <div className={item.notify ? 'notify' : ''}>{item.label}</div>
              }
            </PopoverContentItem>
            {item.divider ? <PopoverDivider></PopoverDivider> : ''}
          </React.Fragment>
        )
      }
    </PopoverContentBox>
  )

  return (
    <HomeHeaderBox id="headerRef">
      <Image
        className="logo-box"
        width={40}
        height={35}
        preview={false}
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
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
      <HomeFileResources />
    </HomeHeaderBox>
  )
}

export default HomeHeaderBoxComp
