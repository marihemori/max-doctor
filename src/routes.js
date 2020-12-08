import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import MaxDoctor from './pages/Maxdoctor/Maxdoctor';

function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/maxdoctor" exact component={MaxDoctor} />
        </Switch>
      </BrowserRouter>
    )
}

export default Routes;