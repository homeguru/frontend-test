import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
