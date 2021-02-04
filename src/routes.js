import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROOT, CHARDETAILS } from './consts/routePaths';
import Home from './pages/home';
import charDetails from './pages/charDetails';
class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={ROOT} exact={true} component={Home} />
                    <Route path={CHARDETAILS} component={charDetails} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Routes;