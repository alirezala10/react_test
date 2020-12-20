
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import history from './utils/history';
import ThemeButton from './components/ThemeButton';


const Login = loadable(() => import('./components/pages/Login'));
const Logout = loadable(() => import('./components/pages/Logout'));
const Notfound = loadable(() => import('./components/pages/Notfound'));

class App extends Component {


  render() {

    return (
      <>
        <ThemeButton />
        <Router history={history}>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/logout' component={Logout} />
            <Route path='/404' component={Notfound} />
            <Route component={Notfound} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;

