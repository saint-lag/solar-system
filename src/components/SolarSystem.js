import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div id="planets-container" data-testid="solar-system">
        <Title headline="Planetas" />
        <ul id="planets-list">
          {planets.map((planet) => (
            <li key={ planet.name } className="planets">
              <PlanetCard planetImage={ planet.image } planetName={ planet.name } />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
