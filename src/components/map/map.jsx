import Scale from 'components/scale';
import Locations from './location-stub';
import RunwayLoc from './runway-stub';
import Aircraft from 'components/aircraft';
import Beacon from 'components/beacon';
import { MapWrapper } from './map.styles';
import Runway from "components/runway"

const Map = ({scaleEnabled, flights, setFlight}) => {
    let i = 0;
    return(
        <MapWrapper className="map" data-testid="map">
            {Locations.map((data) => {
            return (
                <Beacon key={data["name"]} data={data} />
            )}
            )}
            {RunwayLoc.map((data) => {
            return (
                <Runway data={data} />
            )}
            )}
            {flights.map((flight) => {
            return (
               <Aircraft 
               key={flight["flightId"]} 
               heading={flight?.heading} 
               flightId={flight?.flightId} 
               setFlight={setFlight} 
               flights={flights} 
               coordinate={flight?.coordinate} />
            )}
            )}
          <Scale scaleEnabled={scaleEnabled}/>
        </MapWrapper>
    )
}


export default Map;