import { Modal, Button, Space, Form, Input, Select } from 'antd'
import { useAppState } from '../../../contexts/providers'
import { ModalTitleContainer, ModalFooter, ModalBody, FlexInline } from './styled'
import { ModalDefaultAttrs } from '../../../utils/constant'
import { useState } from 'react'

const ModalFormContainer = () => {
  const [form] = Form.useForm()
  const { Option, OptGroup } = Select

  const [selectImageStorage, setSelectImageStorage] = useState('localhost')

  return (
    <Form form={form} name="basic">
      <Form.Item label="项目名" name="projectName">
        <Input placeholder="请输入项目名" />
      </Form.Item>
      <Form.Item label="项目类型" name="projectType">
        <Select allowClear>
          <OptGroup label="移动端项目">
            <Option value="mobile-baseForm">基础表单页面</Option>
            <Option value="mobile-simpleStaticPage">基础静态页面</Option>
            <Option value="mobile-complexPage">复杂页面</Option>
          </OptGroup>
          <OptGroup label="PC端项目">
            <Option value="pc-baseForm">基础表单页面</Option>
            <Option value="pc-simpleStaticPage">基础静态页面</Option>
            <Option value="pc-complexPage">复杂页面</Option>
          </OptGroup>
        </Select>
      </Form.Item>
      <Form.Item label="UI组件库" name="ui-npm">
        <Select allowClear>
          <Option value="antDesign">AntDesign</Option>
          <Option value="Element">Element</Option>
          <Option value="layui">Layui</Option>
          <Option value="others">其他</Option>
        </Select>
      </Form.Item>
      <Form.Item label="图片存储路径" name="imageStorage">
        <FlexInline>
          <Select style={{ width: 150 }} value={selectImageStorage} onChange={(value) => {
            setSelectImageStorage(value)
          }}>
            <Option value="localhost">本地</Option>
            <Option value="serve">远程服务器</Option>
          </Select>
          {
            selectImageStorage === 'serve' && <Input placeholder="请输入静态服务器地址"></Input>
          }
        </FlexInline>
      </Form.Item>
    </Form>
  )
}

const ModalFooterContainer = () => (
  <Space>
    <Button>取消</Button>
    <Button type="primary">确定</Button>
  </Space>
)

const InitPropsModal = () => {
  const {
    metaView: {
      visibleInitPropsModal
    }
  } = useAppState()

  const handleOk = () => {

  }

  const ModalTitle = <ModalTitleContainer>
    初始化配置
  </ModalTitleContainer>

  const modalAttr = {
    ...ModalDefaultAttrs,
    visible: visibleInitPropsModal,
    onOk: handleOk,
    title: ModalTitle
  }

  return (
    <Modal {...modalAttr}>
      <ModalBody>
        <ModalFormContainer></ModalFormContainer>
      </ModalBody>
      <ModalFooter>
        <ModalFooterContainer></ModalFooterContainer>
      </ModalFooter>
    </Modal>
  )
}

export default InitPropsModal
