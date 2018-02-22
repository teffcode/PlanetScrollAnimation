import React from 'react';

import asteroid from '../assets/asteroid.png';

import './Asteroid.css';

const Asteroid = ({ classAsteroid }) => (
  <div>
    <img src={asteroid} alt="asteroid" />
  </div>
);

export default Asteroid;
