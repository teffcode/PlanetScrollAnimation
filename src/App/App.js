import React, { Component } from 'react';

import Planet from '../Planet/Planet';
import Asteroid from '../Asteroid/Asteroid';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      classPlanet: 'hidden'
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleAnimation();
  }

  handleAnimation = () => {
    if(document.documentElement.scrollTop > 80){
      this.setState({
        classPlanet: 'visible'
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Planet classPlanet={this.state.classPlanet}/>
      </div>
    );
  }
}

export default App;
