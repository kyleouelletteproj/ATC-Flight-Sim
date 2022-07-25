import FlightCard from 'components/flight-card';
import InputCard from 'components/input-card';
import { FlightBoxWrapper } from './flight-box.styles';

const FlightBox = ({data, flights}) => {
    return(
        <FlightBoxWrapper>
             {data.map((data) => {
            return (
      <>
          <InputCard key={data["input"] }input={data?.input} status={data.status} />
      </>
            )
            })
          }
          {flights.map((flight) => {
            return (
      <>
          <FlightCard key={flight["flightId"]} data={flight} />
      </>
            )
            })
          }
        </FlightBoxWrapper>
    )
}

export default FlightBox;