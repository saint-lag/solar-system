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
            {planets.map((planet, index) => (<PlanetCard
              planetImage={ planet.image }
              planetName={ planet.name }
              key={ index }
            />))}
          </li>
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
