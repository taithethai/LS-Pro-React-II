import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavBar title="Displaying Clock"/>
        </div>
        <Clock />
      </div>
    );
  }
}

export default App;
