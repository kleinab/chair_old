import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Welcome />
      </div>
    );
  }
}

export default App;
