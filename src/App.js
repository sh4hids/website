import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import ProjectFrontend from './components/pages/ProjectFrontend';
import NotFoundPage from './components/pages/404';

const pubURL = process.env.PUBLIC_URL;

const App = () => (
  <Router>
    <Switch>
      <Route exact path={pubURL + '/'} component={Home}/>
      <Route exact path={pubURL + '/projects/frontend'} component={ProjectFrontend}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </Router>
);

export default App;
