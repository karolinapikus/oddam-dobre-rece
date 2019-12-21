import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';

import Home from "../Home/Home"
import Login from "../Login/Login"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/zaloguj" component={Login}/>
      </Switch>
    </Router>

  );
}

export default App;
