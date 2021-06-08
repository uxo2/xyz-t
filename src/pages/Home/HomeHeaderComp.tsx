import {
  Image
} from 'antd'
// import { DownloadOutlined } from '@ant-design/icons'
// import imgLogo from '../../assets/images/logo.png'
// import { logofallback } from '../../assets/images/base64.js'
import {
  HomeHeaderBox,
  Button
} from './styled'
import HomeFileResources from './HomeFileResources'

const HomeHeaderBoxComp = () => {
  const openFileResourcesDrawer = () => {
    console.log(12)
  }

  return (
    <HomeHeaderBox>
      <Image className="logo-box" width={40} height={35} preview={false} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></Image>
      <Button>File</Button>
      <Button onClick={() => openFileResourcesDrawer()}>TL</Button>
      <HomeFileResources></HomeFileResources>
    </HomeHeaderBox>
  )
}

export default HomeHeaderBoxComp
