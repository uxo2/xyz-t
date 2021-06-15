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
  PopoverContentBox
} from './styled'
import HomeFileResources from '../HomeFileResources/index'

const HomeHeaderBoxComp = () => {
  const openFileResourcesDrawer = () => {
    console.log(12)
  }

  const CodeContentDOM = (
    <PopoverContentBox>
      <li>关于 xyz-t</li>
      <li>退出登陆</li>
    </PopoverContentBox>
  )

  return (
    <HomeHeaderBox>
      <Image className="logo-box" width={40} height={35} preview={false} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></Image>
      <Popover content={CodeContentDOM} placement="bottomLeft" trigger="click">
        <Button>Code</Button>
      </Popover>
      <Button>文件</Button>
      <Button onClick={() => openFileResourcesDrawer()}>编辑</Button>
      <Button onClick={() => openFileResourcesDrawer()}>选择</Button>
      <Button onClick={() => openFileResourcesDrawer()}>查看</Button>
      <Button onClick={() => openFileResourcesDrawer()}>转到</Button>
      <Button onClick={() => openFileResourcesDrawer()}>运行</Button>
      <Button onClick={() => openFileResourcesDrawer()}>源码</Button>
      <Button onClick={() => openFileResourcesDrawer()}>文档</Button>
      <Button onClick={() => openFileResourcesDrawer()}>帮助</Button>
      <HomeFileResources></HomeFileResources>
    </HomeHeaderBox>
  )
}

export default HomeHeaderBoxComp
