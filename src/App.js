import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import ProjectFrontend from './components/pages/ProjectFrontend';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={ Home }/>
      <Route exact path={process.env.PUBLIC_URL + '/projects/frontend'} component={ ProjectFrontend }/>
    </Switch>
  </Router>
);

export default App;
