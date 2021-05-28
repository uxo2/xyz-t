import { Drawer } from 'antd'


const FileResources = () => {
  const onClose = () => { }
  let visible = false

  return (
    <Drawer
      title="Basic Drawer"
      placement="top"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}

export default FileResources
