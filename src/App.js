import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import '../src/sass/App.scss'
import { Home, Page1 } from './pages/index'

function App() {
  return (
  <>
  <Router>
    <Switch>
      <Route path="/page1">
        <Page1 />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  </>
  );
}

export default App;
