import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Fade } from 'react-router-dom';
import {LandingPage, Navbar} from './components'

class App extends Component {
  render() {
    console.log(LandingPage)
    return (
      <div className="root">
        <Navbar />
        <Route exact path='/' component={LandingPage} />
      </div>
    );
  }
}

export default App;
