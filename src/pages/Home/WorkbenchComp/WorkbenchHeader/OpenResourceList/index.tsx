import { OpenResourceListContainer, OpenResourceItem } from './styled'
import { CloseOutlined } from '@ant-design/icons'
import { useAppState, useDispatch } from '../../../../../contexts/providers'
import { ComponentActions } from '../../../../../contexts/actions'
import i18n from '../../../../../utils/i18n'

const OpenResourceList = () => {
  const {
    workbench: { openFileList, activeFile }
  } = useAppState()
  const dispatch = useDispatch()

  return (
    <OpenResourceListContainer empty={openFileList.length === 0}>
      {
        openFileList.length ? openFileList.map((item, index) => (
          <OpenResourceItem key={index} select={activeFile?.id === item.id}>
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
        )) : <div className="empty-info">{i18n.t('common.emptyFile')}</div>
      }
    </OpenResourceListContainer>
  )
}

export default OpenResourceList
