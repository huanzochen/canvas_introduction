import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './feature/home'
import CanvasInReact from './feature/canvasInReact'
import CanvasInReactHook from './feature/canvasInReactHook'

function App() {
  return (
    <Router>
      <div>
        <Home></Home>
        <Switch>
          <Route path="/canvas-in-react">
            <CanvasInReact />
          </Route>
          <Route path="/canvas-in-react-hook">
            <CanvasInReactHook />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
