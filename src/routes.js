import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import Catalogo from "./pages/Catalogo";
import Produto from "./pages/Produto";


const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
          <Component {...props} />
    }
  />
);

export const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path="/" component={Catalogo} />
      <PublicRoute exact path="/Catalogo/:id" component={Catalogo} />
      <PublicRoute exact path="/Produto/:id" component={Produto} />

      <PublicRoute path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  );
};

export default Routes;
