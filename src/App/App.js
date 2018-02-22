import React, { Component } from 'react';

import Planet from '../Planet/Planet';
import Asteroid from '../Asteroid/Asteroid';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Planet />
        <Asteroid />
      </div>
    );
  }
}

export default App;
