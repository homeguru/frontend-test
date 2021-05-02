import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Index from "./pages/Index";
import Details from "./pages/Details";


const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
        <Component {...props} />
    }
  />
);

export const Routes = () => {
    return(
      <BrowserRouter>
          <Switch>
            <PublicRoute exact path="/Details/:id" component={Details} />
            <PublicRoute exact path="/" component={Index} />

            <PublicRoute path="*" component={() => <h1>Pagina nao encontrada</h1>} />
          </Switch>
      </BrowserRouter>
    );
}

export default Routes;