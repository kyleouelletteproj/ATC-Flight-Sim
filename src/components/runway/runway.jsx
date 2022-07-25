import { getXPosition, getYPosition } from 'helpers/location-helper';
import { RunwayWrapper, NameWrapper, RunwayLine } from './runway.styles';


const Runway = ({ data }) => {
    return(
        <RunwayWrapper  xPosition={getXPosition(data.x)} yPosition={getYPosition(data.y)}>
        <RunwayLine />
            <NameWrapper>
            {data?.name}
            </NameWrapper>
        </RunwayWrapper>
    )
}
export default Runway;