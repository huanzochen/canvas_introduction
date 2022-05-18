import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './feature/home'
import CanvasInReact from './feature/canvasInReact'

function App() {
  return (
    <Router>
      <div>
        <Home></Home>
        <Switch>
          <Route path="/canvas-in-react">
            <CanvasInReact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
