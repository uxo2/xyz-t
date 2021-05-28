import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Page404 from '../pages/404'

const ContainerRoute: CustomRouter.Route[] = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/404',
    component: Page404
  }
]

const AppRouter = () => (
  <Router>
    {
      ContainerRoute.map(containerRoute => (
        <Route
          {...containerRoute}
          key={containerRoute.path}
        ></Route>
      ))
    }
  </Router>
)

export default AppRouter