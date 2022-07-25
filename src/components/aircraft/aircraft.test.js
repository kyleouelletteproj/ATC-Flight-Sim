import { render } from '@testing-library/react';
import Aircraft from './aircraft';

const mockFlight = {
    flightId: 'DF831',
    altitude: 5000,
    planeType: '747',
    flightStatus: 'departing',
    heading: '170',
    destination: 'JFK',
    runway: '4R'
    };

function setFlight() {

}


    const Planes = [
        {
        flightId: 'DF831',
        altitude: 5000,
        planeType: '747',
        flightStatus: 'departing',
        heading: '170',
        destination: 'JFK',
        runway: '4R'
        },
        {
            flightId: 'DF831',
            altitude: 5000,
            planeType: '747',
            flightStatus: 'departing',
            heading: '170',
            destination: 'JFK',
            runway: '4R'
        },
        {
            flightId: 'DF831',
            altitude: 5000,
            planeType: '747',
            flightStatus: 'departing',
            heading: '170',
            destination: 'JFK',
            runway: '4R'
        },
        {
            flightId: 'DF831',
            altitude: 5000,
            planeType: '747',
            flightStatus: 'departing',
            heading: '170',
            destination: 'JFK',
            runway: '4R'
        },
        {
            flightId: 'DF831',
            altitude: 5000,
            planeType: '747',
            flightStatus: 'departing',
            heading: '170',
            destination: 'JFK',
            runway: '4R'
        },
        {
            flightId: 'DF831',
            altitude: 5000,
            planeType: '747',
            flightStatus: 'departing',
            heading: '170',
            destination: 'JFK',
            runway: '4R'
        },
        {
        flightId: 'CE65A',
        altitude: 5000,
        planeType: '747',
        flightStatus: 'arriving',
        heading: '170',
        destination: 'Pheonix',
        runway: '4R'
        }
    ]
    
    export default Planes;

test('aircraft appears', () => {
  let { getByTestId } = render(<Aircraft flightData={mockFlight} flights={Planes} setFlight={setFlight} />);
  expect(getByTestId("aircraft")).toBeInTheDocument();
});
