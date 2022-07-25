import { getXPosition, getYPosition } from 'helpers/location-helper';
import { BeaconWrapper, NameWrapper } from './beacon.styles';


const Beacon = ({ data }) => {
    return(
        <BeaconWrapper  xPosition={getXPosition(data.x)} yPosition={getYPosition(data.y)}>
        ⬥
            <NameWrapper>
            {data?.name}
            </NameWrapper>
        </BeaconWrapper>
    )
}
export default Beacon;