import { BrowserRouter, Switch, Route } from 'react-router-dom'

// pages
import { Home } from '../pages/Home'
import { About } from '../pages/About'

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Switch>
    </BrowserRouter>
  )
}
export { Routes }
