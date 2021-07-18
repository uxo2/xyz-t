import { CloseOutlined } from '@ant-design/icons'
import { OpenResourceListContainer, OpenResourceItem, ResourceItemTitle, ResourceItemCloseBtn } from './styled'
import { useAppState, useDispatch } from '../../../../../contexts/providers'
import { ComponentActions } from '../../../../../contexts/actions'
import i18n from '../../../../../utils/i18n'

const OpenResourceList = () => {
  const {
    workbench: { openFileList, activeFile }
  } = useAppState()
  const dispatch = useDispatch()

  interface FileProp {
    id: string
    title: string
  }

  return (
    <OpenResourceListContainer empty={openFileList.length === 0}>
      {
        openFileList.length ? openFileList.map((item: FileProp) => (
          <OpenResourceItem select={activeFile?.id === item.id}>
            <ResourceItemTitle>{item.title}</ResourceItemTitle>
            <ResourceItemCloseBtn className="close-btn" onClick={() => {
              dispatch({
                type: ComponentActions.UpdateActiveFile,
                payload: {
                  type: 'close',
                  id: item.id
                }
              })
            }}>
              <CloseOutlined />
            </ResourceItemCloseBtn>
          </OpenResourceItem>
        )) : <div className="empty-info">{i18n.t('common.emptyFile')}</div>
      }
    </OpenResourceListContainer>
  )
}

export default OpenResourceList
