import { useEffect } from 'react';
import { getXPosition, getYPosition } from 'helpers/location-helper';
import { useState } from 'react';
import { AircraftWrapper } from './aircraft.styles';

const Aircraft = ({ flightId, setFlight, flights, coordinate, heading }) => {
    const [location, setLocation] = useState(coordinate);
    const [currentState, setState] = useState(true);
    const [spawning, setSpawning] = useState(false);
    useEffect(() => {
        if(currentState === false) {
            setFlight(flights.filter(item => item.flightId !== flightId));
        }
        const interval = setInterval(() => {
            setSpawning(true);
            setLocation({...location, x: (location.x+(2.5*Math.cos(Math.PI/180*heading))), y: location.y+(2.5*Math.sin(Math.PI/180*heading))});
            if (location.x < -2 || location.y < -5 || location.x > 102 || location.y > 155) {
                setState(false);
            }
          }, 1000);
          return() => clearInterval(interval);
        }, [location, heading, flights]);
        return(
        <AircraftWrapper 
        data-testid="aircraft"
        spawning={spawning}
        style={{left: `${getXPosition(location?.x)}`, top: `${getYPosition(location?.y)}`}}
        heading={heading+85}
        />
    )
}

export default Aircraft;


//(150) + Math.cos(flightData.heading)*location.y