import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';

import Home from "../Home/Home"
import Login from "../Login/Login"
import Register from "../Register/Register"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/zaloguj" component={Login}/>
        <Route path="/zaloz-konto" component={Register}/>
      </Switch>
    </Router>

  );
}

export default App;
