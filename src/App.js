import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import ProjectFrontend from './components/pages/ProjectFrontend';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/projects/frontend" component={ ProjectFrontend }/>
    </Switch>
  </Router>
);

export default App;
