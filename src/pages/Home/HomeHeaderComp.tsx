import { Button } from 'antd'
// import { DownloadOutlined } from '@ant-design/icons'
import imgLogo from '../../assets/images/logo.png'
import {
  HomeHeaderBox,
  HomeHeaderLogoComp,
} from './styled'
import HomeFileResources from './HomeFileResources'

const HomeHeaderBoxComp = () => {
  const openFileResourcesDrawer = () => {
    console.log(12)
  }

  return (
    <HomeHeaderBox>
      <HomeHeaderLogoComp src={imgLogo} alt="logo"></HomeHeaderLogoComp>
      <Button type="text" className="file-btn" size="small">文件(F)</Button>
      <Button type="text" onClick={() => openFileResourcesDrawer()}>TL</Button>
      <HomeFileResources></HomeFileResources>
    </HomeHeaderBox>
  )
}

export default HomeHeaderBoxComp


