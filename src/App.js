import React, { Component } from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import SignUp from "./screens/SignUp/SignUp";
import Login from './screens/Login/Login'
import NotFound from './screens/NotFound/NotFound';

import { Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
      <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signup" component={SignUp} exact />
          <Route path="/login" component={Login} exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
