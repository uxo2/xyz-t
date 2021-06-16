import {
  Image,
  Popover
} from 'antd'
// import { DownloadOutlined } from '@ant-design/icons'
// import imgLogo from '../../assets/images/logo.png'
// import { logofallback } from '../../assets/images/base64.js'
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
        file.map((item, index) => (
          <React.Fragment key={index}>
            <PopoverContentItem>{item.label}</PopoverContentItem>
            {item.divider ? <PopoverDivider></PopoverDivider> : ''}
          </React.Fragment>
        ))
      }
    </PopoverContentBox>
  )

  return (
    <HomeHeaderBox>
      <Image className="logo-box" width={40} height={35} preview={false} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></Image>
      {
        HEADER_DIR.map((file, index) => {
          let children: any

          if (file.children && !file.disabled) {
            children = (
              <Popover content={(CodeContentDOM(file.children || []))} placement="bottomLeft" trigger="click">
                <Button disabled={file.disabled}>{file.label}</Button>
              </Popover>
            )
          } else {
            children = <Button disabled key={index}>{file.label}</Button>
          }

          return (
            <React.Fragment key={index}>
              {children}
            </React.Fragment>
          )
        })
      }
      <HomeFileResources></HomeFileResources>
    </HomeHeaderBox>
  )
}

export default HomeHeaderBoxComp
