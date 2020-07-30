import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/detail/:id' component={Detail}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path='/' component={Home}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;