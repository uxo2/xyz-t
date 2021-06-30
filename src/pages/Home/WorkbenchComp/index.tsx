// import { Route } from 'react-router-dom'
// import ElementPlus from '../../ElementPlus/index'
// import AntDesign from '../../AntDesign/index'
import WorkbenchHeader from './WorkbenchHeader'
import { WorkbenchBox, DividerWorkbenchVertical, DividerWorkbenchHorizontal, IframeContainer, IframeBox, IframeWorkbench, ScrollRight, ScrollBottom, FillCorner } from './styled'

export const WorkbenchComp = () => {
  const dividerDom = Array(100).fill(100).map((val, index) => <span className="number">{index * val / 2}</span>)
  return (
    <WorkbenchBox>
      {/* <Route path="/component-docs/elementPlus" component={ElementPlus} exact></Route>
    <Route path="/component-docs/antDesign" component={AntDesign} exact></Route> */}
      <WorkbenchHeader />
      <IframeContainer>
        <IframeBox>
          <IframeWorkbench src="" />
        </IframeBox>
        <FillCorner className="top-left" />
        <FillCorner className="top-right" />
        <FillCorner className="bottom-left" />
        <FillCorner className="bottom-right" />
        <DividerWorkbenchVertical className="left-divider">
          {dividerDom}
        </DividerWorkbenchVertical>
        <DividerWorkbenchVertical className="right-divider">
          {dividerDom}
        </DividerWorkbenchVertical>
        <DividerWorkbenchHorizontal className="top-divider">
          {dividerDom}
        </DividerWorkbenchHorizontal>
        <DividerWorkbenchHorizontal className="bottom-divider">
          {dividerDom}
        </DividerWorkbenchHorizontal>
        <ScrollRight />
        <ScrollBottom />
      </IframeContainer>
    </WorkbenchBox>
  )
}

export default WorkbenchComp
