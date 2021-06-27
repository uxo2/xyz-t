import { OpenResourceListContainer, OpenResourceItem } from './styled'
import { CloseOutlined } from '@ant-design/icons'
import { useAppState, useDispatch } from '../../../../../contexts/providers'
import { ComponentActions } from '../../../../../contexts/actions'

const OpenResourceList = () => {
  const {
    workbench: { openFileList, activeFile }
  } = useAppState()
  const dispatch = useDispatch()

  return (
    <OpenResourceListContainer>
      {
        openFileList.length ? openFileList.map((item, index) => (
          <OpenResourceItem key={index} select={activeFile?.id === item.id }>
            <div className="text">{item.title}</div>
            <div className="close-btn" onClick={() => {
              dispatch({
                type: ComponentActions.UpdateActiveFile,
                payload: {
                  type: 'close',
                  id: item.id
                }
              })
            }}>
              <CloseOutlined />
            </div>
          </OpenResourceItem>
        )) : <div className="empty-info">未发现文件</div>
      }
    </OpenResourceListContainer>
  )
}

export default OpenResourceList
