import React from 'react';

import planet from '../assets/planet.png';

import './Planet.css';

const Planet = ({ classPlanet }) => (
    <img src={planet} alt="planet" className={classPlanet} />
);

export default Planet;
