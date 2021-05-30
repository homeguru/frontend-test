import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import DetailsCharacter from './pages/ComicsDetails';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/details_character/:id" component={DetailsCharacter} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
