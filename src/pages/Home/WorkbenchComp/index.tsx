import { Route } from 'react-router-dom'
import ElementPlus from '../../ElementPlus/index'
import AntDesign from '../../AntDesign/index'
import {
  WorkbenchBox
} from './styled'

export const WorkbenchComp = () => (
  <WorkbenchBox>
    <Route path="/component-docs/elementPlus" component={ElementPlus} exact></Route>
    <Route path="/component-docs/antDesign" component={AntDesign} exact></Route>
  </WorkbenchBox>
)

export default WorkbenchComp
