import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import createBrowserHistory from 'history/createBrowserHistory'
import ComicListView from './views/ComicList/ComicList'
import './index.scss';

const history = createBrowserHistory()

const MOUNT_NODE = document.getElementById('root')
const appElement = (
    <Router history={history}>
      <AppContainer>
      <Switch>
        <Route exact path="/" component={ComicListView} />
      </Switch>
      </AppContainer>
    </Router>

)
ReactDOM.render(appElement, MOUNT_NODE)




//npm install node-sass
//npm install react-slick --save
//isomorphic-fetch
//react-js-pagination
//npm install --save prop-types
// crypto-js