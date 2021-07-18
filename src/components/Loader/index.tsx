import { memo } from 'react'
import { Progress } from 'antd'
import { LoaderContainer, LoaderInfo, LoaderItem } from './styled'

const ImageGridLoader = ({ progress, loadInfo }: { progress: number, loadInfo: string }) => {
  return (
    <LoaderContainer>
      <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="60px" viewBox="0 0 24 30" xmlSpace="preserve">
        <rect x="0" y="7.6416" width="4" height="14.7168" fill="#FF6700" opacity="0.4">
          <animate attributeName="opacity" attributeType="XML" values="0.5; 1; .8" begin="0s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="8" y="5.1416" width="4" height="19.7168" fill="#FF6700" opacity="0.4">
          <animate attributeName="opacity" attributeType="XML" values="0.5; 1; .8" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="16" y="7.3584" width="4" height="15.2832" fill="#FF6700" opacity="0.4">
          <animate attributeName="opacity" attributeType="XML" values="0.5; 1; .8" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
        </rect>
      </svg>
      <LoaderInfo>
        <LoaderItem>{loadInfo}</LoaderItem>
        <Progress percent={progress} showInfo={false} strokeColor="#1890ff" />
      </LoaderInfo>
    </LoaderContainer>
  )
}

function areEqual(prevProps: any, nextProps: any) {
  return prevProps.progress === nextProps.progress && prevProps.fullLoaderInfo === nextProps.fullLoaderInfo
}

export default memo(ImageGridLoader, areEqual)