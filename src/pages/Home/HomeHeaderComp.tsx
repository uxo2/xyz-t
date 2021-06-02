import { Button, Image } from 'antd'
// import { DownloadOutlined } from '@ant-design/icons'
// import imgLogo from '../../assets/images/logo.png'
import { logofallback } from '../../assets/images/base64.js'
import {
  HomeHeaderBox,
} from './styled'
import HomeFileResources from './HomeFileResources'

const HomeHeaderBoxComp = () => {
  const openFileResourcesDrawer = () => {
    console.log(12)
  }

  return (
    <HomeHeaderBox>
      <Image className="logo-box" width={100} height={40} src="error" fallback={logofallback}></Image>
      <Button type="text" className="file-btn" size="small">文件(F)</Button>
      <Button type="text" onClick={() => openFileResourcesDrawer()}>TL</Button>
      <HomeFileResources></HomeFileResources>
    </HomeHeaderBox>
  )
}

export default HomeHeaderBoxComp
