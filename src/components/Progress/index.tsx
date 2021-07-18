import { withNProgress } from '@tanem/react-nprogress'
import Container from './Container/index'
import { SpinnerContainer, SpinnerLoadingBox, BarContainer, BarContent } from './styled'

const Progress: React.FC<{
  animationDuration: number
  isFinished: boolean
  progress: number
}> = ({ isFinished, progress, animationDuration }) => (
  <Container animationDuration={animationDuration} isFinished={isFinished}>
    <BarContainer animationDuration={animationDuration} progress={progress}>
      <BarContent />
    </BarContainer>
    <SpinnerContainer>
      <SpinnerLoadingBox />
    </SpinnerContainer>
  </Container>
)

export default withNProgress(Progress)
