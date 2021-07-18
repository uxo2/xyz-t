import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Page404 from '../pages/404'

const AppRouter = (): React.ReactElement => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/component-docs" component={Home} />
        <Route component={Page404} />
      </Switch>
    </Router>
  )
}

export default AppRouter