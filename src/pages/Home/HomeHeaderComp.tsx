import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
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
      <Button type="primary" icon={<DownloadOutlined />}>配置项</Button>
      <Button type="text" onClick={() => openFileResourcesDrawer()}>TL</Button>
      <HomeFileResources></HomeFileResources>
    </HomeHeaderBox>
  )
}

export default HomeHeaderBoxComp


