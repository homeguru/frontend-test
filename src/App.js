// eslint-disable-next-line
import React from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Details from './components/Details';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <section className="container">
          <Switch>
            <Route path='/' component={Main} exact/>
            <Route path='/detail/:id' component={Details} />
          </Switch>
        </section>
        <Footer />
      </div>
    </Router>
  )
}

export default App;