import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Resume from './components/pages/Resume';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/resume" component={ Resume }/>
    </Switch>
  </Router>
);

export default App;
