/* eslint-disable react/jsx-key */
import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          <li>
            {planets.map((planet) => (<PlanetCard
              planetImage={ planet.image }
              planetName={ planet.name }
            />))}
          </li>
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
